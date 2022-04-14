import { i18n } from 'i18next';
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
// import L from 'leaflet';

import { LatLng, LatLngBounds } from 'leaflet';

import queryString from 'query-string';
import screenfull from 'screenfull';

import { Basemap } from '../layer/basemap/basemap';
import { Layer } from '../layer/layer';

import { MapProjection } from '../projection/map-projection';

import { api } from '../../app';
import { EVENT_NAMES } from '../../api/event';

import '../../core/types/cgp-leaflet-config';
import { generateId } from '../../core/utils/utilities';
import { Config } from '../../core/utils/config';
import {
  TypeMapConfigProps,
  TypeLayerConfig,
  TypeLanguages,
  TypeLocalizedLanguages,
  TypeMapSchemaProps,
} from '../../core/types/cgpv-types';

import { AppbarButtons } from '../../core/components/appbar/app-bar-buttons';
import { NavbarButtons } from '../../core/components/navbar/nav-bar-buttons';

import { ModalApi } from '../../ui';

// LCC map options
// ! Map bounds doesn't work for projection other then Web Mercator
const lccMapOptionsParam: L.MapOptions = {
  zoomFactor: 7,
  minZoom: 3,
  maxZoom: 19,
};

// Web Mercator map options
const wmMapOptionsParam: L.MapOptions = {
  zoomFactor: 5,
  minZoom: 2,
  maxZoom: 19,
  maxBounds: new LatLngBounds({ lat: -89.999, lng: -180 }, { lat: 89.999, lng: 180 }),
  maxBoundsViscosity: 0.0,
};

/**
 * Class used to manage created maps
 *
 * @export
 * @class MapViewer
 */
export class MapViewer {
  // map config properties
  mapProps: TypeMapConfigProps;

  // the id of the map
  id!: string;

  // the leaflet map
  map!: L.Map;

  // used to access button panel API to create buttons and button panels on the appbar
  appBarButtons!: AppbarButtons;

  // used to access button panel API to create buttons and button panels on the navbar
  navBarButtons!: NavbarButtons;

  // used to access basemap functions
  basemap!: Basemap;

  // used to access layers functions
  layer!: Layer;

  // get used language
  language: TypeLocalizedLanguages;

  // get used projection
  currentProjection: number;

  // store current zoom level
  currentZoom: number;

  // store current position
  currentPosition: LatLng;

  // access projection functions for this map instance
  projection!: MapProjection;

  // i18n instance
  i18nInstance!: i18n;

  // modals creation
  modal!: ModalApi;

  /**
   * Add the map instance to the maps array in the api
   *
   * @param {TypeMapConfigProps} mapProps map properties
   * @param {i18n} i18instance language instance
   */
  constructor(mapProps: TypeMapConfigProps, i18instance: i18n) {
    this.id = mapProps.id;

    // add map viewer instance to api
    api.maps[this.id] = this;

    this.mapProps = mapProps;

    this.language = mapProps.language;
    this.currentProjection = mapProps.map.projection;
    this.i18nInstance = i18instance;
    this.currentZoom = mapProps.map.initialView.zoom;
    this.currentPosition = new LatLng(mapProps.map.initialView.center[0], mapProps.map.initialView.center[1]);

    this.appBarButtons = new AppbarButtons(this.id);
    this.navBarButtons = new NavbarButtons(this.id);

    this.modal = new ModalApi(this.id);
  }

  /**
   * Initialize layers, basemap and projection
   *
   * @param cgpMap
   */
  initMap(cgpMap: L.Map): void {
    this.id = cgpMap.id;
    this.map = cgpMap;

    // initialize layers and load the layers passed in from map config if any
    this.layer = new Layer(this.id, this.mapProps.map.layers);

    // initialize the projection
    this.projection = new MapProjection(this.mapProps.map.projection);

    // check if geometries are provided from url
    this.loadGeometries();

    // create basemap and pass in the map id to be able to access the map instance
    this.basemap = new Basemap(this.mapProps.map.basemapOptions, this.mapProps.language, this.mapProps.map.projection, this.id);
  }

  /**
   * Check if geometries needs to be loaded from a URL geoms parameter
   */
  loadGeometries(): void {
    // see if a data geometry endpoint is configured and geoms param is provided then get the param value(s)
    const servEndpoint = this.map.getContainer()?.closest('.llwp-map')?.getAttribute('data-geometry-endpoint') || '';

    // eslint-disable-next-line no-restricted-globals
    const parsed = queryString.parse(location.search);

    if (parsed.geoms && servEndpoint !== '') {
      const geoms = (parsed.geoms as string).split(',');

      // for the moment, only polygon are supported but if need be, other geometries can easely be use as well
      geoms.forEach((key: string) => {
        fetch(`${servEndpoint}${key}`).then((response) => {
          // only process valid response
          if (response.status === 200) {
            response.json().then((data) => {
              if (typeof data.geometry !== 'undefined') {
                // reverse the array because they are x, y instead of default lat long couple y, x
                // TODO: check if we can know and set this info from outside
                data.geometry.coordinates.forEach((r: Array<Array<number>>) => r.forEach((c: Array<number>) => c.reverse()));

                // add the geometry
                // TODO: use the vector as GeoJSON and add properties to by queried by the details panel
                this.layer.vector.addPolygon(data.geometry.coordinates, {
                  id: generateId(''),
                });
              }
            });
          }
        });
      });
    }
  }

  /**
   * Add a new custom component to the map
   *
   * @param {string} id an id to the new component
   * @param {JSX.Element} component the component to add
   */
  addComponent = (id: string, component: JSX.Element): void => {
    if (id && component) {
      // emit an event to add the component
      api.event.emit(EVENT_NAMES.MAP.EVENT_MAP_ADD_COMPONENT, this.id, {
        id,
        component,
      });
    }
  };

  /**
   * Remove an existing custom component from the map
   *
   * @param id the id of the component to remove
   */
  removeComponent = (id: string): void => {
    if (id) {
      // emit an event to add the component
      api.event.emit(EVENT_NAMES.MAP.EVENT_MAP_REMOVE_COMPONENT, this.id, {
        id,
      });
    }
  };

  /**
   * Get map options configurations based on projection
   *
   * @param epsgCode projection number
   * @returns {L.MapOptions} the map options based on the projection
   */
  getMapOptions = (epsgCode: number): L.MapOptions => {
    return epsgCode === 3978 ? lccMapOptionsParam : wmMapOptionsParam;
  };

  /**
   * Toggles fullscreen for the app.
   *
   * @memberof MapInstance
   */
  toggleFullscreen = (element: HTMLElement): void => {
    if (screenfull.isEnabled) {
      // TODO: check if needed
      // DomUtil.hasClass(mapElem, 'leaflet-pseudo-fullscreen') ? DomUtil.removeClass(mapElem, 'leaflet-pseudo-fullscreen') : DomUtil.addClass(mapElem, 'leaflet-pseudo-fullscreen');
      // DomUtil.hasClass(mapElem, 'leaflet-fullscreen-on') ? DomUtil.removeClass(mapElem, 'leaflet-fullscreen-on') : DomUtil.addClass(mapElem, 'leaflet-fullscreen-on');
      // toogle fullscreen
      screenfull.toggle(element);
    }
  };

  /**
   * Function called when the map has been rendered and ready to be customized
   */
  mapReady = (): void => {
    api.event.emit(EVENT_NAMES.MAP.EVENT_MAP_LOADED, this.id, { map: this.map });
  };

  /**
   * Return the language code from localized language
   *
   * @returns {TypeLanguages} returns the language code from localized language. Ex: en, fr
   */
  getLanguageCode = (): TypeLanguages => {
    return this.language.split('-')[0] as TypeLanguages;
  };

  /**
   * Change the language of the map
   *
   * @param {string} language the language to use (en-CA, fr-CA)
   * @param {TypeLayerConfig} layers optional new set of layers to apply (will override origional set of layers)
   */
  changeLanguage = (language: 'en-CA' | 'fr-CA', layers?: TypeLayerConfig[]): void => {
    const updatedConfig = { ...this.mapProps };

    updatedConfig.language = language;

    if (layers && layers.length > 0) {
      updatedConfig.map.layers = updatedConfig.map.layers?.concat(layers);
    }

    // emit an event to reload the map to change the language
    api.event.emit(EVENT_NAMES.MAP.EVENT_MAP_RELOAD, null, {
      handlerId: this.id,
      config: updatedConfig,
    });
  };

  /**
   * Load a new map config from a function call
   *
   * @param {TypeMapSchemaProps} mapConfig a new config passed in from the function call
   */
  loadMapConfig = (mapConfig: TypeMapSchemaProps) => {
    // create a new config for this map element
    const config = new Config(this.map.getContainer());

    const configObj = config.getMapConfigFromFunc(mapConfig);

    // emit an event to reload the map with the new config
    api.event.emit(EVENT_NAMES.MAP.EVENT_MAP_RELOAD, null, {
      handlerId: this.id,
      config: configObj,
    });
  };

  /**
   * Set map to either dynamic or static
   *
   * @param {string} interaction map interaction
   */
  toggleMapInteraction = (interaction: string) => {
    if (interaction === 'dynamic' || !interaction) {
      // dynamic map
      this.map.dragging.enable();
      this.map.touchZoom.enable();
      this.map.doubleClickZoom.enable();
      this.map.scrollWheelZoom.enable();
      this.map.boxZoom.enable();
      this.map.keyboard.enable();
      if (this.map.tap) this.map.tap.enable();
      this.map.getContainer().style.cursor = 'grab';
    } else {
      // static map
      this.map.dragging.disable();
      this.map.touchZoom.disable();
      this.map.doubleClickZoom.disable();
      this.map.scrollWheelZoom.disable();
      this.map.boxZoom.disable();
      this.map.keyboard.disable();
      if (this.map.tap) this.map.tap.disable();
      this.map.getContainer().style.cursor = 'default';
    }
  };

  /**
   * Create bounds on map
   *
   * @param {LatLng.LatLngBounds} bounds map bounds
   * @returns the bounds
   */
  fitBounds = (bounds: L.LatLngBounds) => this.map.fitBounds(bounds);
}
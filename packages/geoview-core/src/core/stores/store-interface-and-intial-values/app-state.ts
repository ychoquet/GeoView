import { useStore } from 'zustand';
import { useGeoViewStore } from '@/core/stores/stores-managers';
import { TypeSetStore, TypeGetStore } from '@/core/stores/geoview-store';

import {
  NotificationDetailsType,
  TypeDisplayLanguage,
  TypeHTMLElement,
  TypeMapFeaturesConfig,
  TypeSupportedTheme,
} from '@/core/types/cgpv-types';
import { api } from '@/app';

export interface IAppState {
  displayLanguage: TypeDisplayLanguage;
  isCrosshairsActive: boolean;
  isFullscreenActive: boolean;
  notifications: Array<NotificationDetailsType>;
  geolocatorServiceURL: string | undefined;
  suportedLanguages: TypeDisplayLanguage[];
  theme: TypeSupportedTheme;

  setDefaultConfigValues: (geoviewConfig: TypeMapFeaturesConfig) => void;

  actions: {
    addNotification: (notif: NotificationDetailsType) => void;
    setCrosshairActive: (active: boolean) => void;
    setDisplayLanguage: (lang: TypeDisplayLanguage) => void;
    setFullScreenActive: (active: boolean, element?: TypeHTMLElement) => void;
    removeNotification: (key: string) => void;
  };
}

export function initializeAppState(set: TypeSetStore, get: TypeGetStore): IAppState {
  return {
    displayLanguage: 'en' as TypeDisplayLanguage,
    isCrosshairsActive: false,
    isFullscreenActive: false,
    notifications: [],
    geolocatorServiceURL: '',
    suportedLanguages: [],
    theme: 'geo.ca',

    // initialize default stores section from config information when store receive configuration file
    setDefaultConfigValues: (geoviewConfig: TypeMapFeaturesConfig) => {
      set({
        appState: {
          ...get().appState,
          displayLanguage: geoviewConfig.displayLanguage as TypeDisplayLanguage,
          geolocatorServiceURL: geoviewConfig.serviceUrls?.geolocator,
          suportedLanguages: geoviewConfig.suportedLanguages,
          theme: geoviewConfig.theme || 'geo.ca',
        },
      });
    },

    actions: {
      addNotification: (notif: NotificationDetailsType) => {
        set({
          appState: {
            ...get().appState,
            notifications: [
              ...get().appState.notifications,
              { key: notif.key, notificationType: notif.notificationType, message: notif.message },
            ],
          },
        });
      },
      setCrosshairActive: (active: boolean) => {
        set({
          appState: {
            ...get().appState,
            isCrosshairsActive: active,
          },
        });
      },
      setDisplayLanguage: (lang: TypeDisplayLanguage) => {
        set({
          appState: {
            ...get().appState,
            displayLanguage: lang,
          },
        });
      },
      setFullScreenActive: (active: boolean, element?: TypeHTMLElement) => {
        set({
          appState: {
            ...get().appState,
            isFullscreenActive: active,
          },
        });

        //! we need to keep the call to the api map object because there is a state involve
        if (element !== undefined) api.maps[get().mapId].toggleFullscreen(active, element);
      },
      removeNotification: (key: string) => {
        set({
          appState: {
            ...get().appState,
            notifications: get().appState.notifications.filter((item: NotificationDetailsType) => item.key !== key),
          },
        });
      },
    },
  } as IAppState;
}

// **********************************************************
// App state selectors
// **********************************************************
export const useAppCrosshairsActive = () => useStore(useGeoViewStore(), (state) => state.appState.isCrosshairsActive);
export const useAppDisplayLanguage = () => useStore(useGeoViewStore(), (state) => state.appState.displayLanguage);
export const useAppFullscreenActive = () => useStore(useGeoViewStore(), (state) => state.appState.isFullscreenActive);
export const useAppGeolocatorServiceURL = () => useStore(useGeoViewStore(), (state) => state.appState.geolocatorServiceURL);
export const useAppNotifications = () => useStore(useGeoViewStore(), (state) => state.appState.notifications);
export const useAppSuportedLanguages = () => useStore(useGeoViewStore(), (state) => state.appState.suportedLanguages);
export const useAppTheme = () => useStore(useGeoViewStore(), (state) => state.appState.theme);

export const useAppStoreActions = () => useStore(useGeoViewStore(), (state) => state.appState.actions);

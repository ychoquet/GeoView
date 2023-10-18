/*! Package:geoview-footer-panel: 0.1.0 - "ddd7cea1a1b0a80bf7dac230fc751105b54f4cf3" - 2023-10-18T20:10:57.026Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{44141:(e,t,n)=>{var a=n(98124),r=n(46623),o=n(78630),i=n(34313),s=n(61987),u=n(18879),l=n(84421),c=n(2302);const f=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":true,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","details","data-table"]},"minItems":0,"default":["legend","details","data-table"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."},"collapsed":{"type":"boolean","default":true,"description":"State of footer panel when map is loaded"}},"required":["suportedLanguages","tabs"]}'),d=JSON.parse('{"tabs":{"defaultTabs":["legend","details","data-table"],"customTabs":[]},"suportedLanguages":["en","fr"]}');var v=n(38736),p=n(29541),m=window;function E(e){var t=e.mapId,n=m.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o([]),u=(0,v.Z)(s,2),l=u[0],f=u[1],d=o(),E=(0,v.Z)(d,2),g=E[0],y=E[1],b=o([]),h=(0,v.Z)(b,2),T=h[0],_=h[1],N=o(null),L=(0,v.Z)(N,2),A=L[0],I=L[1],D=function(e){if((0,c.gNW)(e)&&"at_long_lat"===e.queryType){var n=e.resultSets,r=[];Object.keys(n).forEach((function(e){var o,i=(0,c.dIw)(a.maps[t].layer.registeredLayers[e].layerName,t),s=null===(o=n[e])||void 0===o?void 0:o.data.at_long_lat;null!=s&&s.length&&(null==s?void 0:s.length)>0&&r.push({layerPath:e,layerName:i,features:s})})),r.length>0?f(r):f([])}else f([])},Z=function(e){if((0,c.gux)(e)){var t=e.coordinates;I(e.handlerName),_(t.lnglat)}else _([])};return i((function(){return a.event.on(a.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,D,"".concat(t,"/FeatureInfoLayerSet")),a.event.on(a.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,Z,t),function(){a.event.off(a.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,t,D),a.event.off(a.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,t,Z)}}),[]),i((function(){y(a.maps[t].detailsFooter.createDetailsFooter(t,l,{mapId:t,location:T,handlerName:A}))}),[l,T]),(0,p.jsx)("div",{children:g})}var g=n(53358),y=window;function b(e){var t=e.mapId,n=y.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(),u=(0,v.Z)(s,2),l=u[0],f=u[1],d=o([]),m=(0,v.Z)(d,2),E=m[0],b=m[1],h=function(){var e;void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&b((0,g.Z)(a.maps[t].layer.layerOrder).reverse())},T=function(){return h()},_=function(e){(0,c.UKz)(e)&&b((function(t){return t.filter((function(t){return t!==e.geoviewLayer.geoviewLayerId}))}))},N=function(e){(0,c.riW)(e)&&a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){h(),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,T,t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,_,t),a.event.on(a.eventNames.LAYER.EVENT_ADD_LAYER,N,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,T),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t,_),a.event.off(a.eventNames.LAYER.EVENT_ADD_LAYER,t,N)}}),[]),i((function(){f(a.maps[t].legend.createLegend({layerIds:E,isRemoveable:!1,canSetOpacity:!0,canZoomTo:!0}))}),[E]),(0,p.jsx)("div",{children:l})}var h=n(11468),T=n(69291),_=n.n(T),N=window;function L(e){var t=e.mapId,n=N.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(null),u=(0,v.Z)(s,2),l=u[0],c=u[1],f=function(){var e=(0,h.Z)(_().mark((function e(){var a;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.api.maps[t].dataTable.createDataPanel();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){setTimeout((function(){f()}),1e3)};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,d,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,d)}}),[]),(0,p.jsx)("div",{children:l})}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.Z)(e);if(t){var r=(0,u.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var I=window,D=function(e){(0,i.Z)(n,e);var t=A(n);function n(e,r){var i;return(0,a.Z)(this,n),i=t.call(this,e,r),(0,l.Z)((0,o.Z)(i),"schema",(function(){return f})),(0,l.Z)((0,o.Z)(i),"defaultConfig",(function(){return(0,c.ZQJ)(d)})),(0,l.Z)((0,o.Z)(i),"translations",(0,c.ZQJ)({en:{legend:"Legend",details:"Details",dataTable:"DataTable"},fr:{legend:"Légende",details:"Détails",dataTable:"Données"}})),(0,l.Z)((0,o.Z)(i),"added",(function(){var e=(0,o.Z)(i),t=e.configObj,n=e.pluginProps.mapId,a=I.cgpv;if(a){var r=a.api,s=r.maps[n],u=s.displayLanguage,l=s.footerTabs,f=s.map.getTargetElement().parentElement;f&&(!1===(null==t?void 0:t.collapsed)?f.style.height="calc( 100% - 300px )":f.style.height="calc( 100% - 55px )");var d=null==t?void 0:t.tabs.defaultTabs,v=0;if(d.includes("legend")&&(l.createFooterTab({value:v,label:i.translations[u].legend,content:function(){return(0,p.jsx)(b,{mapId:n})}}),v++),d.includes("details")){var m=v;l.createFooterTab({value:m,label:i.translations[u].details,content:function(){return(0,p.jsx)(E,{mapId:n})}}),v++,r.event.on(r.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,c.gNW)(e)){var t=e.resultSets,n=[];Object.keys(t).forEach((function(e){n=n.concat(t[e])})),n.length>0&&l.selectFooterTab(m)}}),"".concat(n,"/FeatureInfoLayerSet"))}d.includes("data-table")&&(l.createFooterTab({value:v,label:i.translations[u].dataTable,content:function(){return(0,p.jsx)(L,{mapId:n})}}),v++);for(var g=null==t?void 0:t.tabs.customTabs,y=0;y<g.length;y++){var h=g[y];l.createFooterTab({value:v,label:h.title,content:h.contentHTML}),v++}}})),i.buttonPanel=null,i}return(0,r.Z)(n,[{key:"removed",value:function(){I.cgpv}}]),n}(c.Vw$);I.plugins=I.plugins||{},I.plugins["footer-panel"]=(0,c.RFZ)(D)}},e=>{var t;t=44141,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map
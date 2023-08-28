/*! Package:geoview-footer-panel: 0.1.0 - "8499106f9f0a6933d0d74b34628abadc8910f59e" - 2023-08-28T17:47:37.262Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{28028:(e,t,n)=>{var a=n(38020),r=n(67275),o=n(51608),i=n(10598),s=n(19667),c=n(12317),l=n(92824),u=n(27510);const d=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":true,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","details","data-grid"]},"minItems":0,"default":["legend","details","data-grid"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."},"collapsed":{"type":"boolean","default":true,"description":"State of footer panel when map is loaded"}},"required":["suportedLanguages","tabs"]}'),f=JSON.parse('{"tabs":{"defaultTabs":["legend","details","data-grid"],"customTabs":[]},"suportedLanguages":["en","fr"]}');var v=n(91365),p=n(29541),m=window;function E(e){var t=e.mapId,n=m.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o([]),c=(0,v.Z)(s,2),l=c[0],d=c[1],f=o(),E=(0,v.Z)(f,2),g=E[0],y=E[1],L=o([]),h=(0,v.Z)(L,2),b=h[0],N=h[1],A=o(null),T=(0,v.Z)(A,2),_=T[0],I=T[1],D=function(e){if((0,u.gNW)(e)){var n=e.resultSets,r=[];Object.keys(n).forEach((function(e){var o=(0,u.dIw)(a.map(t).layer.registeredLayers[e].layerName,t),i=n[e].data;i.length>0&&r.push({layerPath:e,layerName:o,features:i})})),r.length>0?d(r):d([])}else d([])},R=function(e){if((0,u.gux)(e)){var t=e.coordinates;I(e.handlerName),N(t.lnglat)}else N([])};return i((function(){return a.event.on(a.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,D,"".concat(t,"/$FeatureInfoLayerSet$")),a.event.on(a.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,R,t),function(){a.event.off(a.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,t,D),a.event.off(a.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,t,R)}}),[]),i((function(){y(a.map(t).details.createDetails(t,l,{mapId:t,location:b,handlerName:_}))}),[l,b]),(0,p.jsx)("div",{children:g})}var g=n(61108),y=window;function L(e){var t=e.mapId,n=y.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(),c=(0,v.Z)(s,2),l=c[0],d=c[1],f=o([]),m=(0,v.Z)(f,2),E=m[0],L=m[1],h=function(){var e;void 0!==(null===(e=a.map(t).layer)||void 0===e?void 0:e.layerOrder)&&L((0,g.Z)(a.map(t).layer.layerOrder).reverse())},b=function(){return h()},N=function(e){(0,u.UKz)(e)&&L((function(t){return t.filter((function(t){return t!==e.geoviewLayer.geoviewLayerId}))}))},A=function(e){(0,u.riW)(e)&&a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){h(),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,b,t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,N,t),a.event.on(a.eventNames.LAYER.EVENT_ADD_LAYER,A,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,b),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t,N),a.event.off(a.eventNames.LAYER.EVENT_ADD_LAYER,t,A)}}),[]),i((function(){d(a.map(t).legend.createLegend({layerIds:E,isRemoveable:!1,canSetOpacity:!0,canZoomTo:!0}))}),[E]),(0,p.jsx)("div",{children:l})}var h=window;function b(e){var t=e.mapId,n=h.cgpv,a=n.api,r=n.ui,o=n.react,i=r.elements.Tabs,s=o.useState,c=o.useEffect,l=s([]),d=(0,v.Z)(l,2),f=d[0],m=d[1],E=function(){var e;void 0!==(null===(e=a.map(t).layer)||void 0===e?void 0:e.layerOrder)&&m((0,g.Z)(a.map(t).layer.layerOrder).reverse())};return c((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,E,t),a.event.on(a.eventNames.LAYER_SET.UPDATED,E,"".concat(t,"/$LegendsLayerSet$")),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,E),a.event.off(a.eventNames.LAYER_SET.UPDATED,t,E)}})),setTimeout((function(){f.forEach((function(e){var t=document.getElementById("".concat(e,"-groupLayerSelection"));t&&t.addEventListener("change",(function(){var t=this.selectedIndex,n=document.getElementsByClassName("".concat(e,"-layer-datagrid-table"));if(n.length>0)for(var a=0;a<n.length;a++)n[a].setAttribute("style","display:".concat(a!==t?"none":"block"))}))}))}),2e3),(0,p.jsx)(i,{tabsProps:{variant:"scrollable"},tabs:f.map((function(e,n){var r=a.map(t).layer.geoviewLayers[e],o=(0,u.dIw)(r.geoviewLayerName,t);return{value:n,label:void 0!==o?o:"data-".concat(n),content:function(){return a.map(t).dataGrid.createDataGrid({layerId:e})}}}))})}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var A=window,T=function(e){(0,i.Z)(n,e);var t=N(n);function n(e,r){var i;return(0,a.Z)(this,n),i=t.call(this,e,r),(0,l.Z)((0,o.Z)(i),"schema",(function(){return d})),(0,l.Z)((0,o.Z)(i),"defaultConfig",(function(){return(0,u.ZQJ)(f)})),(0,l.Z)((0,o.Z)(i),"translations",(0,u.ZQJ)({en:{legend:"Legend",details:"Details",dataGrid:"Data"},fr:{legend:"Légende",details:"Détails",dataGrid:"Données"}})),(0,l.Z)((0,o.Z)(i),"added",(function(){var e=(0,o.Z)(i),t=e.configObj,n=e.pluginProps.mapId,a=A.cgpv;if(a){var r=a.api,s=r.map(n),c=s.displayLanguage,l=s.footerTabs,d=s.map.getTargetElement().parentElement;d&&(!1===(null==t?void 0:t.collapsed)?d.style.height="calc( 100% - 300px )":d.style.height="calc( 100% - 55px )");var f=null==t?void 0:t.tabs.defaultTabs,v=0;if(f.includes("legend")&&(l.createFooterTab({value:v,label:i.translations[c].legend,content:function(){return(0,p.jsx)(L,{mapId:n})}}),v++),f.includes("details")){var m=v;l.createFooterTab({value:m,label:i.translations[c].details,content:function(){return(0,p.jsx)(E,{mapId:n})}}),v++,r.event.on(r.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,u.gNW)(e)){var t=e.resultSets,n=[];Object.keys(t).forEach((function(e){n=n.concat(t[e])})),n.length>0&&l.selectFooterTab(m)}}),"".concat(n,"/$FeatureInfoLayerSet$"))}f.includes("data-grid")&&(l.createFooterTab({value:v,label:i.translations[c].dataGrid,content:function(){return(0,p.jsx)(b,{mapId:n})}}),v++);for(var g=null==t?void 0:t.tabs.customTabs,y=0;y<g.length;y++){var h=g[y];l.createFooterTab({value:v,label:h.title,content:h.contentHTML}),v++}}})),i.buttonPanel=null,i}return(0,r.Z)(n,[{key:"removed",value:function(){A.cgpv}}]),n}(u.Vw$);A.plugins=A.plugins||{},A.plugins["footer-panel"]=(0,u.RFZ)(T)}},e=>{var t;t=28028,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map
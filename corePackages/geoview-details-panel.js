/*! Package:geoview-details-panel: 0.1.0 - "52e697c4f8074961d87fb47d79a369d396517b92" - 2023-07-04T14:20:18.055Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[138],{79332:(e,t,n)=>{var a=n(28990),i=n(34839),o=n(28815),r=n(66301),s=n(3806),l=n(42251),u=n(48836),c=n(8874),p=n(13845),d=n(45202),f=window;function h(e){var t,n=e.mapId,a=e.buttonId,i=f.cgpv,o=i.api,r=i.react,s=r.useState,l=r.useEffect,u=s([]),h=(0,p.Z)(u,2),m=h[0],g=h[1],v=s(),y=(0,p.Z)(v,2),P=y[0],I=y[1],_=s([]),Z=(0,p.Z)(_,2),b=Z[0],E=Z[1],N=s(null),L=(0,p.Z)(N,2),k=L[0],w=L[1],B=null===(t=o.map(n).appBarButtons.getAppBarButtonPanelById(void 0===a?"":a))||void 0===t?void 0:t.panel;return l((function(){return o.event.on(o.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,c.gNW)(e)){var t=e.resultSets,a=[];Object.keys(t).forEach((function(e){var i=(0,c.dIw)(o.map(n).layer.registeredLayers[e].layerName,n),r=t[e];r.length>0&&a.push({layerPath:e,layerName:i,features:r})})),a.length>0?(g(a),null==B||B.open()):g([])}else g([])}),"".concat(n,"/$FeatureInfoLayerSet$")),o.event.on(o.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,(function(e){if((0,c.gux)(e)){var t=e.coordinates;w(e.handlerName),E(t.lnglat)}else E([])}),n),function(){o.event.off(o.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,n),o.event.off(o.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,n)}}),[]),l((function(){I(o.map(n).details.createDetails(n,m,{mapId:n,location:b,backgroundStyle:"dark",singleColumn:!0,handlerName:k}))}),[m,b]),(0,d.jsx)("div",{children:P})}const m=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Details Panel/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),g=JSON.parse('{"suportedLanguages":["en","fr"]}');function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var y=window,P=function(e){(0,r.Z)(n,e);var t=v(n);function n(e,i){var r;return(0,a.Z)(this,n),r=t.call(this,e,i),(0,u.Z)((0,o.Z)(r),"schema",(function(){return m})),(0,u.Z)((0,o.Z)(r),"defaultConfig",(function(){return(0,c.ZQJ)(g)})),(0,u.Z)((0,o.Z)(r),"translations",(0,c.ZQJ)({en:{detailsPanel:"Details",nothing_found:"Nothing found",click_map:"Choose a point on the map to start",action_back:"Back"},fr:{detailsPanel:"Détails",nothing_found:"Aucun résultat",click_map:"Choisissez un point sur la carte pour commencer",action_back:"Retour"}})),(0,u.Z)((0,o.Z)(r),"added",(function(){var e,t,n=r.pluginProps.mapId,a=y.cgpv,i=a.api,o=a.ui.elements.DetailsIcon,s=i.map(n).displayLanguage,l={id:"detailsPanelButton",tooltip:r.translations[s].detailsPanel,tooltipPlacement:"right",children:(0,d.jsx)(o,{}),visible:!0},u={title:r.translations[s].detailsPanel,icon:'<i class="material-icons">details</i>',width:350};r.buttonPanel=i.map(n).appBarButtons.createAppbarPanel(l,u,null),null===(e=r.buttonPanel)||void 0===e||null===(t=e.panel)||void 0===t||t.changeContent((0,d.jsx)(h,{mapId:n,buttonId:l.id}))})),r.buttonPanel=null,r}return(0,i.Z)(n,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=y.cgpv.api;this.buttonPanel&&t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId)}}]),n}(c.Vw$);y.plugins=y.plugins||{},y.plugins["details-panel"]=(0,c.RFZ)(P)}},e=>{var t;t=79332,e(e.s=t)}]);
//# sourceMappingURL=geoview-details-panel.js.map
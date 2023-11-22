/*! Package:geoview-details-panel: 0.1.0 - "2354a7e8a30fdbe554cd91f856192ab8c21ce9c9" - 2023-11-22T14:29:59.084Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[138],{89274:(e,t,n)=>{var a=n(33422),i=n(51423),o=n(94981),s=n(77185),r=n(78807),u=n(51937),l=n(93699),c=n(44760),p=n(29541);function d(){return(0,p.jsx)("div",{children:"This feature is deprecated."})}const f=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Details Panel/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),h=JSON.parse('{"suportedLanguages":["en","fr"]}');function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.Z)(e);if(t){var i=(0,u.Z)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,r.Z)(this,n)}}var m=window,v=function(e){(0,s.Z)(n,e);var t=g(n);function n(e,i){var s;return(0,a.Z)(this,n),s=t.call(this,e,i),(0,l.Z)((0,o.Z)(s),"schema",(function(){return f})),(0,l.Z)((0,o.Z)(s),"defaultConfig",(function(){return(0,c.ZQJ)(h)})),(0,l.Z)((0,o.Z)(s),"translations",(0,c.ZQJ)({en:{detailsPanel:"Details",nothing_found:"Nothing found",click_map:"Choose a point on the map to start",action_back:"Back"},fr:{detailsPanel:"Détails",nothing_found:"Aucun résultat",click_map:"Choisissez un point sur la carte pour commencer",action_back:"Retour"}})),s.buttonPanel=null,s}return(0,i.Z)(n,[{key:"added",value:function(){var e,t=this.pluginProps.mapId,n=m.cgpv,a=n.api,i=n.ui.elements.DetailsIcon,o=a.maps[t].displayLanguage,s={id:"detailsPanelButton",tooltip:this.translations[o].detailsPanel,tooltipPlacement:"right",children:(0,p.jsx)(i,{}),visible:!0},r={title:this.translations[o].detailsPanel,icon:'<i class="material-icons">details</i>',width:350};this.buttonPanel=a.maps[t].appBarButtons.createAppbarPanel(s,r,null),null===(e=this.buttonPanel)||void 0===e||null===(e=e.panel)||void 0===e||e.changeContent((0,p.jsx)(d,{}))}},{key:"removed",value:function(){var e=this.pluginProps.mapId,t=m.cgpv.api;this.buttonPanel&&t.maps[e].appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId)}}]),n}(c.Vw$);m.plugins=m.plugins||{},m.plugins["details-panel"]=v}},e=>{var t;t=89274,e(e.s=t)}]);
//# sourceMappingURL=geoview-details-panel.js.map
/*! Package:geoview-basemap-panel: 0.1.0 - "9f0ce37db37f05a944bf34df45450b1b3eaaccad" - 2023-12-07T14:58:37.434Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[286],{17328:(e,a,t)=>{var r=t(25912),s=t(74146),n=t(1358),o=t(30830),i=t(86022),p=t(82217),l=t(81028),d=t(87663),m=t(59618),c=t(64238),u=t(12919),b=t(14843),f=t.n(b),h=t(90154),g=t(29541),y=window;function v(e){var a=e.mapId,t=e.config,r=y.cgpv,s=r.api.maps[a],n=r.api,o=r.ui,i=r.react,p=o.elements,l=p.Select,b=p.Card,v=p.Box,C=i.useState,P=i.useEffect,j=function(e){return{basemapCard:{"& .MuiCard-root":{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"1px solid rgba(255,255,255,0.25)",borderRadius:"6px",boxShadow:"none",marginBottom:"16px",transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:"0px"}},"& .MuiCardHeader-root":{backgroundColor:"".concat(e.palette.grey.A700," !important"),color:e.basemapPanel.header,fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .basemapCardThumbnail":{position:"absolute",height:"100%",width:"100%",objectFit:"cover",top:0,left:0},"& .basemapCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.basemapPanel.overlayDefault,transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.basemapPanel.borderHover,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayHover}}},"&.active":{borderColor:e.basemapPanel.borderActive,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.basemapPanel.overlayActive}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}(o.useTheme()),I=C([]),x=(0,u.Z)(I,2),w=x[0],B=x[1],Z=C(""),N=(0,u.Z)(Z,2),k=N[0],T=N[1],A=C(t.canSwichProjection),S=(0,u.Z)(A,1)[0],O=t.supportedProjections.map((function(e){return null==e?void 0:e.projectionCode}))||[],M=C((0,h.oW)()),L=(0,u.Z)(M,2),$=L[0],q=L[1],U=function(e){s.basemap.setBasemap(e),T(e)},E=function(){var e=(0,c.Z)(f().mark((function e(r){var o,i,p,l,c,u;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=(0,d.ZQJ)(t.supportedProjections.find((function(e){return e.projectionCode===r}))),i=!1,n.maps[a].basemap.basemaps=[],B([]),p=f().mark((function e(){var t,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.customBasemaps[l],(r=n.maps[a].basemap.createCustomBasemap(t))&&B((function(e){return[].concat((0,m.Z)(e),[r])})),r&&0===l&&""===k&&(U(r.basemapId),i=!0);case 4:case"end":return e.stop()}}),e)})),l=0;case 6:if(!(l<o.customBasemaps.length)){e.next=11;break}return e.delegateYield(p(),"t0",8);case 8:l++,e.next=6;break;case 11:c=f().mark((function e(){var t,s,p;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.coreBasemaps[u],e.next=3,n.maps[a].basemap.createCoreBasemap(t,r);case 3:(s=e.sent)&&B((function(e){return[].concat((0,m.Z)(e),[s])})),p="".concat(t.shaded?"shaded":"").concat(t.id).concat(t.labeled?"label":""),s&&p===k&&!i&&(U(k),i=!0);case 7:case"end":return e.stop()}}),e)})),u=0;case 13:if(!(u<o.coreBasemaps.length)){e.next=18;break}return e.delegateYield(c(),"t1",15);case 15:u++,e.next=13;break;case 18:i||U(s.basemap.basemaps[0].basemapId);case 19:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return P((function(){E($)}),[]),(0,g.jsxs)(v,{sx:j.basemapCard,children:[S&&(0,g.jsx)(l,{fullWidth:!0,labelId:"projection-label",value:$,onChange:function(e){var t=e.target.value;U("nogeom"),q(t);var r=s.getView(),o=r.getCenter(),i=r.getProjection().getCode(),p=n.projection.transformPoints([o],i,"EPSG:4326")[0],l=e.target.value,m={zoom:r.getZoom(),minZoom:r.getMinZoom(),maxZoom:r.getMaxZoom(),center:p,projection:l};s.setView(m),E(t),n.event.emit((0,d.ltv)(n.eventNames.MAP.EVENT_MAP_VIEW_PROJECTION_CHANGE,a,t))},label:"Projection",style:{display:t.canSwichProjection?"flex":"none"},inputLabel:{id:"projection-label"},menuItems:O.map((function(e){return{key:e,item:{value:e,children:"EPSG:".concat(e)}}}))}),w.map((function(e){return(0,g.jsx)(b,{tabIndex:0,className:e.basemapId===k?"active":"",onClick:function(){return U(e.basemapId)},onKeyPress:function(){return U(e.basemapId)},title:e.name,contentCard:(0,g.jsxs)(g.Fragment,{children:["string"==typeof e.thumbnailUrl&&(0,g.jsx)("img",{src:e.thumbnailUrl,alt:e.altText,className:"basemapCardThumbnail"}),Array.isArray(e.thumbnailUrl)&&e.thumbnailUrl.map((function(a,t){return(0,g.jsx)("img",{src:a,alt:e.altText,className:"basemapCardThumbnail"},t)})),(0,g.jsx)("div",{className:"basemapCardThumbnailOverlay"})]})},e.basemapId)}))]})}const C=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Basemap Panel Schema","type":"object","version":1,"comments":"Configuration for GeoView basemap panel package.","additionalProperties":false,"definitions":{"basemapNameNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The display name of the layer."},"basemapDescriptionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap description."},"thumbnailUrlNode":{"type":"object","properties":{"en":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"fr":{"type":"array","uniqueItems":true,"items":{"type":"string"}}},"description":"Basemap thumbnail urls."},"basemapLayerUrlNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The service endpoint of the basemap layer."},"basemapAttributionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap attribution text."},"basemapLayersNode":{"type":"object","properties":{"basemapId":{"type":"string","description":"the id of the basmap layer."},"url":{"$ref":"#/definitions/basemapLayerUrlNode"},"opacity":{"type":"number","description":"the opacity of this layer.","default":0}},"additionalItems":false,"required":["basemapId","url"]},"basemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id","enum":["transport","simple","shaded","osm","nogeom"]},"shaded":{"type":"boolean","description":"if a shaded layer should be included with this basemap.","default":false},"labeled":{"type":"boolean","description":"if labels should be enabled in this basemap.","default":false}},"additionalProperties":false,"required":["basemapId","shaded","labeled"]},"customBasemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id."},"name":{"$ref":"#/definitions/basemapNameNode"},"description":{"$ref":"#/definitions/basemapDescriptionNode"},"thumbnailUrl":{"$ref":"#/definitions/thumbnailUrlNode"},"layers":{"type":"array","description":"a list of basemap layers","items":{"$ref":"#/definitions/basemapLayersNode"},"minItems":1},"attribution":{"$ref":"#/definitions/basemapAttributionNode"},"zoomLevels":{"type":"object","description":"Zoom levels for the basemap","properties":{"min":{"type":"integer","minimum":0,"maximum":24,"default":0},"max":{"type":"integer","minimum":0,"maximum":24,"default":24}},"additionalProperties":false,"required":["min","max"]}},"additionalProperties":false,"required":["basemapId","name","description","layers"]}},"properties":{"isOpen":{"type":"boolean","description":"Specifies whether the basemap panel is initially open or closed","default":false},"canSwichProjection":{"type":"boolean","description":"Allow the user to switch projection from the basemap panel.","default":true},"supportedProjections":{"type":"array","items":{"type":"object","properties":{"projectionCode":{"type":"integer","enum":[3978,3857],"description":"Default projection to load on start."},"customBasemaps":{"type":"array","description":"A list of custom basemaps.","items":{"$ref":"#/definitions/customBasemap"},"minItems":0},"coreBasemaps":{"type":"array","description":"A list of basemaps available in the core to show in the panel.","items":{"$ref":"#/definitions/basemap"},"minItems":1}}},"minItems":1,"required":["coreBasemaps","customBasemaps"]},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["canSwichProjection","supportedProjections","suportedLanguages"]}'),P=JSON.parse('{"isOpen":false,"canSwichProjection":false,"supportedProjections":[{"projectionCode":3978,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]},{"projectionCode":3857,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]}],"suportedLanguages":["en","fr"]}');function j(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,p.Z)(e);if(a){var s=(0,p.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,i.Z)(this,t)}}var I=window,x=function(e){(0,o.Z)(t,e);var a=j(t);function t(e,s){var o;return(0,r.Z)(this,t),o=a.call(this,e,s),(0,l.Z)((0,n.Z)(o),"schema",(function(){return C})),(0,l.Z)((0,n.Z)(o),"defaultConfig",(function(){return(0,d.ZQJ)(P)})),(0,l.Z)((0,n.Z)(o),"translations",(0,d.ZQJ)({en:{basemapPanel:"Basemaps"},fr:{basemapPanel:"Fond de carte"}})),(0,l.Z)((0,n.Z)(o),"added",(function(){var e=(0,n.Z)(o),a=e.configObj,t=e.pluginProps.mapId,r=I.cgpv;if(r){var s,i=r.api,p=r.ui.elements.MapIcon,l=i.maps[t].displayLanguage,d={id:"basemapPanelButton",tooltip:o.translations[l].basemapPanel,tooltipPlacement:"right",children:(0,g.jsx)(p,{}),visible:!0},m={title:o.translations[l].basemapPanel,icon:'<i class="material-icons">map</i>',width:350,status:null==a?void 0:a.isOpen};o.buttonPanel=i.maps[t].appBarButtons.createAppbarPanel(d,m,null),null===(s=o.buttonPanel)||void 0===s||null===(s=s.panel)||void 0===s||s.changeContent((0,g.jsx)(v,{mapId:t,config:a||{}}))}})),o.buttonPanel=null,o}return(0,s.Z)(t,[{key:"removed",value:function(){var e=this.pluginProps.mapId,a=I.cgpv;if(a){var t=a.api;this.buttonPanel&&(t.maps[e].appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId),t.maps[e].basemap.basemaps=[],t.maps[e].basemap.loadDefaultBasemaps())}}}]),t}(d.Vw$);I.plugins=I.plugins||{},I.plugins["basemap-panel"]=(0,d.RFZ)(x)}},e=>{var a;a=17328,e(e.s=a)}]);
//# sourceMappingURL=geoview-basemap-panel.js.map
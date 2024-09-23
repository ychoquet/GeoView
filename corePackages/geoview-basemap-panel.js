/*! Package:geoview-basemap-panel: 1.0.0 - "da9e4451a57d1d8bdb5ea3f69e962f74329b4f69" - 2024-09-23T20:31:02.252Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[300],{64590:(e,a,t)=>{var r=t(13718),n=t(47280),i=t(75583),s=t(96645),o=t(94270),p=t(42432),l=t(48407),d=t(44805),m=t(66932),c=t(96880),u=t(55907),b=t(74813),f=t.n(b),h=t(77994),g=t(53223),y=t(25822),v=t(73914),C=t(97282),P=["91","74"],w=["285","268"],x="8";function I(e){var a=e.mapId,t=e.config,r=window.cgpv,n=r.api.maps[a],i=r.api,s=r.ui,o=r.react,p=s.elements,d=p.Select,m=p.Card,b=p.Box,I=o.useState,j=o.useEffect,B=function(e){return{basemapCard:{"& .MuiCard-root":{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"2px solid rgba(255,255,255,0.25)",borderRadius:"6px",boxShadow:"none",marginBottom:"16px",width:"300px",transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:"0px"},"&:hover":{border:"2px solid #FFFF00"},"&.active":{border:"2px solid #FFFFFF"}},"& .MuiCardHeader-root":{backgroundColor:"".concat(e.palette.geoViewColor.grey.dark[900]," !important"),color:e.palette.geoViewColor.grey.light[900],fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .basemapCardThumbnail":{position:"absolute",height:"100%",width:"100%",objectFit:"cover",top:0,left:0},"& .basemapCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.6),transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.palette.geoViewColor.primary.main,"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.55)}}},"&.active":{borderColor:e.palette.geoViewColor.primary.light[200],"& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:"transparent"}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .basemapCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}(s.useTheme()),A=I([]),k=(0,u.A)(A,2),S=k[0],T=k[1],L=I(""),N=(0,u.A)(L,2),M=N[0],O=N[1],F=I(t.canSwichProjection),z=(0,u.A)(F,1)[0],q=t.supportedProjections.map((function(e){return null==e?void 0:e.projectionCode}))||[],R=(0,h.HA)(),U=I(R),V=(0,u.A)(U,2),E=V[0],$=V[1],W=(0,g.t)();function G(e,a,t){for(var r=[],i=0;i<e.length;i++){var s,o,p,l,d,m,c,u=e[i];if("transport"===u)if(null!==(s=n.basemap.basemapsList[a].transport)&&void 0!==s&&s.url)r.push((null===(o=n.basemap.basemapsList[a].transport)||void 0===o?void 0:o.url).replace("{z}",x).replace("{y}",3978===a?w[0]:P[0]).replace("{x}",3978===a?w[1]:P[1]));if("simple"===u)null!==(p=n.basemap.basemapsList[a].simple)&&void 0!==p&&p.url&&r.push(n.basemap.basemapsList[a].simple.url.replace("{z}",x).replace("{y}",w[0]).replace("{x}",w[1]));if("shaded"===u)null!==(l=n.basemap.basemapsList[a].shaded)&&void 0!==l&&l.url&&r.push(n.basemap.basemapsList[a].shaded.url.replace("{z}",x).replace("{y}",w[0]).replace("{x}",w[1]));if("label"===u)null!==(d=n.basemap.basemapsList[a].label)&&void 0!==d&&d.url&&r.push(n.basemap.basemapsList[a].label.url.replaceAll("xxxx","en"===t?"CBMT":"CBCT").replace("{z}",x).replace("{y}",3978===a?w[0]:P[0]).replace("{x}",3978===a?w[1]:P[1]));if("osm"===u&&r.push("https://tile.openstreetmap.org/0/0/0.png"),"imagery"===u)if(null!==(m=n.basemap.basemapsList[a].imagery)&&void 0!==m&&m.url)r.push((null===(c=n.basemap.basemapsList[a].imagery)||void 0===c?void 0:c.url).replace("{z}",x).replace("{y}",3978===a?w[0]:P[0]).replace("{x}",3978===a?w[1]:P[1]))}return r}function K(e){var a="",t="";return e.includes("osm")?a=(0,v.getLocalizedMessage)("basemapPanel.info.osm.name",W):e.includes("transport")?(a=(0,v.getLocalizedMessage)("basemapPanel.info.transport.name",W),t=(0,v.getLocalizedMessage)("basemapPanel.info.transport.description",W)):e.includes("simple")?a=(0,v.getLocalizedMessage)("basemapPanel.info.simple.name",W):e.includes("shaded")?(a=(0,v.getLocalizedMessage)("basemapPanel.info.shaded.name",W),t=(0,v.getLocalizedMessage)("basemapPanel.info.shaded.description",W)):e.includes("nogeom")?a=(0,v.getLocalizedMessage)("basemapPanel.info.nogeom.name",W):e.includes("imagery")&&(a=(0,v.getLocalizedMessage)("basemapPanel.info.imagery.name",W)),e.includes("label")&&(a="".concat(a," ").concat((0,v.getLocalizedMessage)("basemapPanel.info.label.name",W))),{name:a,description:t}}var D=function(e){var a=S.find((function(a){return a.basemapId===e}));void 0!==a&&(n.basemap.setBasemap(a),O(e))},H=function(){var e=(0,c.A)(f().mark((function e(r){var n,s,o,p,d,m,c,u,b,h,g,y,v,C,P,w;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,l.NK)(t.supportedProjections.find((function(e){return e.projectionCode===r}))),s=!1,T([]),o=[],p=0;case 5:if(!(p<n.coreBasemaps.length)){e.next=15;break}return d=o.map((function(e){return e.type})),m=n.coreBasemaps[p],e.next=10,i.maps[a].basemap.createCoreBasemap(m,r);case 10:(c=e.sent)&&!d.includes(c.type)&&(u=K(c.type.split("-")),b=u.name,h=u.description,c.thumbnailUrl=G(c.type.split("-"),R,W),c.name=b,c.description=h,o.push(c));case 12:p++,e.next=5;break;case 15:for(g=[],y=0;y<n.customBasemaps.length;y++)v=n.customBasemaps[y],C=i.maps[a].basemap.createCustomBasemap(v,r),P=g.map((function(e){return e.type})),C&&!P.includes(C.type)&&g.push(C);T([].concat(o,g)),w=[].concat(g,o).filter((function(e){return e.basemapId===M})),w&&(D(M),s=!0),s||D(S[0]);case 21:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return j((function(){H(E).catch((function(e){y.vF.logPromiseFailed("createBasemapArray in useEffect in basemap-panel",e)}))}),[W]),(0,C.jsxs)(b,{sx:B.basemapCard,children:[z&&(0,C.jsx)(d,{fullWidth:!0,labelId:"projection-label",value:E,onChange:function(e){var a=e.target.value;D("nogeom"),$(a),H(a).then((function(){n.setProjection(a)})).catch((function(e){y.vF.logPromiseFailed("createBasemapArray in setSelectedProjection in basemap-panel",e)}))},label:"Projection",style:{display:t.canSwichProjection?"flex":"none",marginBottom:"8px"},inputLabel:{id:"projection-label"},menuItems:q.map((function(e){return{key:e,item:{value:e,children:"EPSG:".concat(e)}}})),variant:"standard"}),S.map((function(e){return(0,C.jsx)(m,{tabIndex:0,className:e.basemapId===M?"active":"",onClick:function(){return D(e.basemapId)},onKeyPress:function(){return D(e.basemapId)},title:e.name,contentCard:(0,C.jsxs)(C.Fragment,{children:["string"==typeof e.thumbnailUrl&&(0,C.jsx)(b,{component:"img",src:e.thumbnailUrl,alt:e.altText,className:"basemapCardThumbnail"}),Array.isArray(e.thumbnailUrl)&&e.thumbnailUrl.map((function(a,t){return(0,C.jsx)(b,{component:"img",src:a,alt:e.altText,className:"basemapCardThumbnail"},t)})),(0,C.jsx)(b,{className:e.basemapId!==M?"basemapCardThumbnailOverlay":""})]})},e.basemapId)}))]})}const j=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Basemap Panel Schema","type":"object","version":1,"comments":"Configuration for GeoView basemap panel package.","additionalProperties":false,"definitions":{"basemapNameNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The display name of the layer."},"basemapDescriptionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap description."},"thumbnailUrlNode":{"type":"object","properties":{"en":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"fr":{"type":"array","uniqueItems":true,"items":{"type":"string"}}},"description":"Basemap thumbnail urls."},"basemapLayerUrlNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"The service endpoint of the basemap layer."},"basemapAttributionNode":{"type":"object","properties":{"en":{"type":"string"},"fr":{"type":"string"}},"description":"Basemap attribution text."},"basemapLayersNode":{"type":"object","properties":{"basemapId":{"type":"string","description":"the id of the basmap layer."},"url":{"$ref":"#/definitions/basemapLayerUrlNode"},"opacity":{"type":"number","description":"the opacity of this layer.","default":0}},"additionalItems":false,"required":["basemapId","url"]},"basemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id","enum":["transport","simple","shaded","osm","nogeom","imagery"]},"shaded":{"type":"boolean","description":"if a shaded layer should be included with this basemap.","default":false},"labeled":{"type":"boolean","description":"if labels should be enabled in this basemap.","default":false}},"additionalProperties":false,"required":["basemapId","shaded","labeled"]},"customBasemap":{"type":"object","properties":{"basemapId":{"type":"string","description":"the basemap id."},"name":{"$ref":"#/definitions/basemapNameNode"},"description":{"$ref":"#/definitions/basemapDescriptionNode"},"thumbnailUrl":{"$ref":"#/definitions/thumbnailUrlNode"},"layers":{"type":"array","description":"a list of basemap layers","items":{"$ref":"#/definitions/basemapLayersNode"},"minItems":1},"attribution":{"$ref":"#/definitions/basemapAttributionNode"},"zoomLevels":{"type":"object","description":"Zoom levels for the basemap","properties":{"min":{"type":"integer","minimum":0,"maximum":24,"default":0},"max":{"type":"integer","minimum":0,"maximum":24,"default":24}},"additionalProperties":false,"required":["min","max"]}},"additionalProperties":false,"required":["basemapId","name","description","layers"]}},"properties":{"isOpen":{"type":"boolean","description":"Specifies whether the basemap panel is initially open or closed","default":false},"canSwichProjection":{"type":"boolean","description":"Allow the user to switch projection from the basemap panel.","default":true},"supportedProjections":{"type":"array","items":{"type":"object","properties":{"projectionCode":{"type":"integer","enum":[3978,3857],"description":"Default projection to load on start."},"customBasemaps":{"type":"array","description":"A list of custom basemaps.","items":{"$ref":"#/definitions/customBasemap"},"minItems":0},"coreBasemaps":{"type":"array","description":"A list of basemaps available in the core to show in the panel.","items":{"$ref":"#/definitions/basemap"},"minItems":1}}},"minItems":1,"required":["coreBasemaps","customBasemaps"]},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["canSwichProjection","supportedProjections"]}'),B=JSON.parse('{"isOpen":false,"canSwichProjection":false,"supportedProjections":[{"projectionCode":3978,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"imagery","shaded":false,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]},{"projectionCode":3857,"coreBasemaps":[{"basemapId":"transport","shaded":true,"labeled":true},{"basemapId":"transport","shaded":true,"labeled":false},{"basemapId":"imagery","shaded":false,"labeled":false},{"basemapId":"osm","shaded":true,"labeled":false},{"basemapId":"simple","shaded":true,"labeled":false},{"basemapId":"shaded","shaded":true,"labeled":false},{"basemapId":"nogeom","shaded":false,"labeled":false}],"customBasemaps":[]}]}');function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}var k=function(e){function a(){var e,t,n,o;(0,r.A)(this,a);for(var d=arguments.length,m=new Array(d),c=0;c<d;c++)m[c]=arguments[c];return t=this,n=a,o=[].concat(m),n=(0,s.A)(n),e=(0,i.A)(t,A()?Reflect.construct(n,o||[],(0,s.A)(t).constructor):n.apply(t,o)),(0,p.A)(e,"translations",(0,l.NK)({en:{basemapPanel:{title:"Basemaps",info:{transport:{name:"Transport",description:"The Canada Base Map - Transportation (CBMT). This web mapping service provides spatial reference context with an emphasis on transportation networks.\n                          It is designed especially for use as a background map in a web mapping application or geographic information system (GIS)."},simple:{name:"Simple"},shaded:{name:"Shaded relief",description:"The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada,\n                          is intended primarily for online mapping application users and developers"},osm:{name:"Open Street Maps"},imagery:{name:"Satellite Imagery",description:"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide."},nogeom:{name:"No geometry"},label:{name:"with labels"}}}},fr:{basemapPanel:{title:"Fond de carte",info:{transport:{name:"Transport",description:"Carte de base du Canada - Transport (CBCT). Ce service de cartographie Web offre un contexte de référence spatiale axé sur les réseaux de transport.\n                          Il est particulièrement conçu pour être utilisé comme fond de carte dans une application cartographique Web ou un système d'information géographique (SIG)."},simple:{name:"Simple"},shaded:{name:"Relief ombré",description:"Les services de cartographie Web de la carte de base du Canada - élévation (CBCE) du Secteur des sciences de la\n                          Terre de Ressources naturelles Canada sont destinés principalement aux utilisateurs et aux développeurs d'applications de cartographie en ligne."},osm:{name:"Carte - Open Street Maps"},imagery:{name:"Imagerie satellite",description:"World Imagery fournit des images aériennes et satellitaires d'un mètre ou plus dans de nombreuses régions du monde, ainsi que des images satellitaires à plus faible résolution dans le monde entier."},nogeom:{name:"Pas de géométrie"},label:{name:"avec étiquettes"}}}}})),(0,p.A)(e,"onCreateContent",(function(){return(0,C.jsx)(I,{mapId:e.pluginProps.mapId,config:e.configObj||{}})})),e}return(0,o.A)(a,e),(0,n.A)(a,[{key:"schema",value:function(){return j}},{key:"defaultConfig",value:function(){return(0,l.NK)(B)}},{key:"onCreateButtonProps",value:function(){return{id:"basemap-panel",tooltip:"basemapPanel.title",tooltipPlacement:"right",children:(0,C.jsx)(m.A,{}),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"basemapPanel.title",icon:(0,C.jsx)(m.A,{}),width:350,status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onRemoved",value:function(){}}])}(d.i);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["basemap-panel"]=(0,l.KX)(k)},44805:(e,a,t)=>{t.d(a,{i:()=>d});var r=t(13718),n=t(47280),i=t(75583),s=t(96645),o=t(94270),p=t(42432);function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}var d=function(e){function a(){var e,t,n,o;(0,r.A)(this,a);for(var d=arguments.length,m=new Array(d),c=0;c<d;c++)m[c]=arguments[c];return t=this,n=a,o=[].concat(m),n=(0,s.A)(n),e=(0,i.A)(t,l()?Reflect.construct(n,o||[],(0,s.A)(t).constructor):n.apply(t,o)),(0,p.A)(e,"buttonPanel",void 0),(0,p.A)(e,"buttonProps",void 0),(0,p.A)(e,"panelProps",void 0),e}return(0,o.A)(a,e),(0,n.A)(a,[{key:"onCreateButtonProps",value:function(){var e=window.cgpv.ui.elements.MapIcon;return{id:"somePluginButton",tooltip:"Some tooltip",tooltipPlacement:"right",children:this.react.createElement(e),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"Some title",icon:'<i class="material-icons">map</i>',width:"80vw",status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"Content for AppBar Plugin on map id ".concat(this.pluginProps.mapId," goes here..."))}},{key:"onAdd",value:function(){this.buttonProps=this.onCreateButtonProps(),this.panelProps=this.onCreateContentProps(),this.panelProps.content=this.onCreateContent(),this.buttonPanel=this.mapViewer().appBarApi.createAppbarPanel(this.buttonProps,this.panelProps,this.buttonProps.id)||void 0}},{key:"onRemove",value:function(){this.api&&this.buttonPanel&&this.mapViewer().appBarApi.removeAppbarPanel(this.buttonPanel.buttonPanelId,this.buttonProps.id)}}])}(t(87139).G)}},e=>{var a;a=64590,e(e.s=a)}]);
//# sourceMappingURL=geoview-basemap-panel.js.map
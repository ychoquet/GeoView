/*! Package:geoview-layers-panel: 0.1.0 - "df9a7436d33f4fe9c20320b2a641e26c8401d5ed" - 2024-03-11T20:37:43.299Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[617],{7493:(e,t,r)=>{r.d(t,{i:()=>d});var n=r(80669),a=r(23133),o=r(82734),i=r(59290),s=r(17089),l=r(99317),c=r(73963);function u(e,t,r){return t=(0,i.A)(t),(0,o.A)(e,p()?Reflect.construct(t,r||[],(0,i.A)(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var d=function(e){function t(){var e;(0,n.A)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=u(this,t,[].concat(a)),(0,c.A)((0,s.A)(e),"buttonPanel",void 0),(0,c.A)((0,s.A)(e),"buttonProps",void 0),(0,c.A)((0,s.A)(e),"panelProps",void 0),e}return(0,l.A)(t,e),(0,a.A)(t,[{key:"onCreateButtonProps",value:function(){var e=window.cgpv.ui.elements.MapIcon;return{id:"somePluginButton",tooltip:"Some tooltip",tooltipPlacement:"right",children:this.react.createElement(e),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"Some title",icon:'<i class="material-icons">map</i>',width:"80vw",status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"Content for AppBar Plugin on map id ".concat(this.pluginProps.mapId," goes here..."))}},{key:"onAdd",value:function(){var e;this.buttonProps=this.onCreateButtonProps(),this.panelProps=this.onCreateContentProps(),this.panelProps.content=this.onCreateContent(),this.buttonPanel=(null===(e=this.map())||void 0===e?void 0:e.appBarApi.createAppbarPanel(this.buttonProps,this.panelProps,null))||void 0}},{key:"onRemove",value:function(){var e;this.api&&this.buttonPanel&&(null===(e=this.map())||void 0===e||e.appBarApi.removeAppbarPanel(this.buttonPanel.buttonPanelId))}}]),t}(r(18755).G)},97617:(e,t,r)=>{var n=r(80669),a=r(23133),o=r(82734),i=r(59290),s=r(17089),l=r(99317),c=r(73963),u=r(15303),p=r(7493),d=r(4165),f=r(66748),h=r(40048),v=r(78330),y=r(92363),x=r(64316),g=r.n(x),m=r(80678);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,c.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const A=function(e){var t=e.mapId,r=e.setAddLayerVisible,n=window.cgpv,a=n.api,o=n.ui,i=n.react,s=a.maps[t].getDisplayLanguage(),l=a.layerTypes,c=l.ESRI_DYNAMIC,u=l.ESRI_FEATURE,p=l.GEOJSON,d=l.GEOPACKAGE,f=l.WMS,x=l.WFS,b=l.OGC_FEATURE,A=l.XYZ_TILES,E=l.GEOCORE,C=i.useState,P=i.useRef,L=o.elements,w=L.Select,I=L.Stepper,O=L.TextField,S=L.Button,k=L.ButtonGroup,N=L.Autocomplete,T=L.CircularProgressBase,D=L.Box,R=L.IconButton,U=L.CloseIcon,F=L.FileUploadIcon,G=C(0),M=(0,h.A)(G,2),W=M[0],B=M[1],_=C(""),V=(0,h.A)(_,2),z=V[0],Y=V[1],J=C(""),K=(0,h.A)(J,2),X=K[0],H=K[1],Z=C(""),q=(0,h.A)(Z,2),Q=q[0],$=q[1],ee=C([]),te=(0,h.A)(ee,2),re=te[0],ne=te[1],ae=C(""),oe=(0,h.A)(ae,2),ie=oe[0],se=oe[1],le=C([]),ce=(0,h.A)(le,2),ue=ce[0],pe=ce[1],de=C(!1),fe=(0,h.A)(de,2),he=fe[0],ve=fe[1],ye=C(!1),xe=(0,h.A)(ye,2),ge=xe[0],me=xe[1],be=P(null),je={buttonGroup:{paddingTop:12,gap:6}},Ae=function(){return Q===c||Q===x||Q===f},Ee=[[c,"ESRI Dynamic Service"],[u,"ESRI Feature Service"],[p,"GeoJSON"],[d,"GeoPackage"],[f,"OGC Web Map Service (WMS)"],[x,"OGC Web Feature Service (WFS)"],[b,"OGC API Features"],[A,"XYZ Raster Tiles"],[E,"GeoCore"]],Ce={en:{finish:"Finish",continue:"Continue",back:"Back",or:"or",dropzone:"Drop Here",upload:"Choose a File",drop:"Drop the file to upload",url:"Enter URL or UUID",layer:"Layer",stepOne:"Upload a File or enter URL/UUID",stepTwo:"Select format",stepThree:"Configure layer",stepFour:"Enter Name",service:"Service Type",name:"Name",layerSelect:"Select Layer",errorEmpty:"cannot be empty",errorNone:"No file or source added",errorFile:"Only geoJSON and GeoPackage files can be used",errorServer:"source is not valid",errorProj:"does not support current map projection",only:"only"},fr:{finish:"Finir",continue:"Continuer",back:"Retour",or:"ou",dropzone:"Déposez ici",upload:"Choisir un fichier",drop:"Déposez le fichier à télécharger",url:"Entrer l'URL ou l'UUID",layer:"Couche",stepOne:"Ajouter un fichier ou entrer l'URL/UUID",stepTwo:"Sélectionnez le format",stepThree:"Configurer la couche",stepFour:"Entrez le nom",service:"Type de service",name:"Nom",layerSelect:"Sélectionner la couche",errorEmpty:"ne peut être vide",errorNone:"Pas de fichier ou de source ajouté",errorFile:"Seuls les fichiers geoJSON et GeoPackage peuvent être utilisés",errorServer:"source n'est pas valide",errorProj:"ne prend pas en charge la projection cartographique actuelle",only:"seulement"}},Pe=function(e){switch(e){case c:return{err:"ESRI Map",capability:"Map"};case u:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},Le=function(e){ve(!1),a.utilities.showError(t,"".concat(e," ").concat(Ce[s].errorEmpty),!1)},we=function(e){ve(!1),a.utilities.showError(t,"".concat(e," ").concat(Ce[s].errorServer),!1)},Ie=function(e,r,n){ve(!1);var o="".concat(e," ").concat(Ce[s].errorProj," ").concat(r,", ").concat(Ce[s].only," ").concat(n.join(", "));a.utilities.showError(t,o,!1)},Oe=function(){var e=(0,y.A)(g().mark((function e(){var r,n,o,i,s,l,c,u,p,d,f,v;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.projection.projections[a.maps[t].getMapState().currentProjection].getCode(),n=[],e.prev=2,i=z.split("?"),s=(0,h.A)(i,2),l=s[0],c=s[1],u=new URLSearchParams(c),p=(null===(o=u.get("layers"))||void 0===o?void 0:o.split(","))||[""],e.next=8,a.geoUtilities.getWMSServiceMetadata(l,"");case 8:if(d=e.sent,(n=d.Capability.Layer.CRS).includes(r)){e.next=12;break}throw new Error("proj");case 12:f=[],v=function e(t){if(t.Layer&&t.Layer.length>0)t.Layer.forEach((function(t){e(t)}));else for(var r=0;r<p.length;r++)t.Name===p[r]&&f.push([t.Name,t.Title])},d.Capability.Layer&&v(d.Capability.Layer),1===f.length?(se(f[0][1]),pe([{layerId:f[0][0]}])):ne(f),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(2),"proj"===e.t0.message?Ie("WMS",r,n):we("WMS"),e.abrupt("return",!1);case 22:return e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=(0,y.A)(g().mark((function e(){var t,r;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(z);case 3:t=e.sent,1===(r=t.FeatureTypeList.FeatureType.map((function(e){return[e.Name["#text"].split(":")[1],e.Title["#text"]]}))).length?(se(r[0][1]),pe([{layerId:r[0][0]}])):ne(r),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),we("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=(0,y.A)(g().mark((function e(){var t,r,n,a,o,i,s;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["id","title"],e.next=3,fetch("".concat(z,"/?f=json"));case 3:if(200===(r=e.sent).status){e.next=7;break}return we("OGC API Feature"),e.abrupt("return",!1);case 7:return e.next=9,r.json();case 9:if(n=e.sent,!t.every((function(e){return Object.keys(n).includes(e)}))){e.next=15;break}return pe([{layerId:n.id}]),se(n.title),e.abrupt("return",!0);case 15:return e.prev=15,a=["collections","links"],e.next=19,fetch("".concat(z,"/collections?f=json"));case 19:return o=e.sent,e.next=22,o.json();case 22:if(i=e.sent,a.every((function(e){return Object.keys(i).includes(e)}))){e.next=26;break}throw new Error("err");case 26:1===(s=i.collections.map((function(e){return[e.id,e.title]}))).length?(se(s[0][1]),pe([{layerId:s[0][0]}])):ne(s),e.next=34;break;case 30:return e.prev=30,e.t0=e.catch(15),we("OGC API Feature"),e.abrupt("return",!1);case 34:return e.abrupt("return",!0);case 35:case"end":return e.stop()}}),e,null,[[15,30]])})));return function(){return e.apply(this,arguments)}}(),Ne=function(){try{if(!(-1===z.indexOf("/")&&32===z.replaceAll("-","").length))throw new Error("err");se(""),pe([{layerId:z}])}catch(e){return we("GeoCore UUID"),!1}return!0},Te=function(){var e=(0,y.A)(g().mark((function e(t){var r,n;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(z);case 3:if(!(r=e.sent).capabilities.includes(Pe(t).capability)){e.next=8;break}"layers"in r?1===(n=r.layers.map((function(e){return[e.id,e.name]}))).length?(se(n[0][1]),pe([{layerId:n[0][0]}])):ne(n):(se(r.name),pe([{layerId:r.id}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),we(Pe(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),De=function(){for(var e=["{x}","{y}","{z}"],t=0;t<e.length;t+=1)if(!z.includes(e[t]))return we("XYZ Tile"),!1;var r=z;return se(""),pe([{layerId:z,source:{dataAccessPath:{en:r,fr:r}}}]),!0},Re=function(){var e=(0,y.A)(g().mark((function e(){var t,r,n,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(z);case 3:return t=e.sent,e.next=6,t.json();case 6:if(r=e.sent,["FeatureCollection","Feature"].includes(r.type)){e.next=9;break}throw new Error("err");case 9:n=z.split("/").pop(),a=z.replace(n,""),ie||se(n),pe([{layerId:n,source:{dataAccessPath:{en:a,fr:a}}}]),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),we("GeoJSON"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),Ue=function(){var e=(0,y.A)(g().mark((function e(){var t;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ve(!0),t=!0,void 0!==Q){e.next=8;break}t=!1,ve(!1),Le(Ce[s].service),e.next=49;break;case 8:if(Q!==f){e.next=14;break}return e.next=11,Oe();case 11:t=e.sent,e.next=49;break;case 14:if(Q!==x){e.next=20;break}return e.next=17,Se();case 17:t=e.sent,e.next=49;break;case 20:if(Q!==b){e.next=26;break}return e.next=23,ke();case 23:t=e.sent,e.next=49;break;case 26:if(Q!==A){e.next=30;break}t=De(),e.next=49;break;case 30:if(Q!==c){e.next=36;break}return e.next=33,Te(c);case 33:t=e.sent,e.next=49;break;case 36:if(Q!==u){e.next=42;break}return e.next=39,Te(u);case 39:t=e.sent,e.next=49;break;case 42:if(Q!==p){e.next=48;break}return e.next=45,Re();case 45:t=e.sent,e.next=49;break;case 48:Q===d?(r=void 0,n=void 0,r=z.split("/").pop(),n=z.replace(r,""),ie||se(r),pe([{layerId:r,source:{dataAccessPath:{en:n,fr:n}}}]),t=!0):Q===E&&(t=Ne());case 49:t&&(ve(!1),B(2));case 50:case"end":return e.stop()}var r,n}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){ve(!0);var e=a.generateId();a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){v.vF.logTraceCoreAPIEvent("LAYER-STEPPER - EVENT_LAYER_ADDED"),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t),ve(!1),r(!1)}),"".concat(t,"/").concat(e));var n=!0,o=ie,i=z;if(Q!==c&&Q!==u||(i=a.geoUtilities.getMapServerUrl(z)),Q===f){var l=z.split("?");i=(0,h.A)(l,1)[0]}""===ie&&(n=!1,Le(Ae()?Ce[s].layer:Ce[s].name));var y={geoviewLayerId:e,geoviewLayerName:{en:o,fr:o},geoviewLayerType:Q,metadataAccessPath:{en:i,fr:i},listOfLayerEntryConfig:ue};Q!==p&&Q!==A&&Q!==d||(y.metadataAccessPath={en:"",fr:""}),Q===E&&delete y.metadataAccessPath,Q===b&&(y.metadataAccessPath={en:a.geoUtilities.getOGCServerUrl(z),fr:a.geoUtilities.getOGCServerUrl(z)}),n&&(Q===E&&setTimeout((function(){ve(!1),r(!1)}),3e3),y.geoviewLayerId?a.maps[t].layer.layerOrder.push(y.geoviewLayerId):void 0!==y.listOfLayerEntryConfig&&y.listOfLayerEntryConfig.forEach((function(e){e.layerId&&a.maps[t].layer.layerOrder.unshift(e.layerId)})),a.maps[t].layer.addGeoviewLayer(y))},Ge=function(){B((function(e){return e-1}))},Me=function(e){var t=URL.createObjectURL(e);H(e.name),Y(t);var r=e.name.split(".")[0];$(""),ne([]),se(r),pe([])},We=function(e){se(e.target.value)},Be=function(e){var r;if(e.preventDefault(),e.stopPropagation(),me(!1),null!==(r=e.dataTransfer)&&void 0!==r&&r.files){var n=e.dataTransfer.files[0],o=n.name.toUpperCase();o.endsWith(".JSON")||o.endsWith(".GEOJSON")||o.endsWith(".GPKG")||o.endsWith(".CSV")?Me(n):a.utilities.showError(t,Ce[s].errorFile,!1)}};function _e(e){var t=e.isFirst,r=void 0!==t&&t,n=e.isLast,a=void 0!==n&&n,o=e.handleNext;return he?(0,m.jsx)(D,{sx:{padding:10},children:(0,m.jsx)(T,{})}):(0,m.jsxs)(k,{sx:je.buttonGroup,children:[(0,m.jsx)(S,{variant:"contained",type:"text",onClick:o,children:a?Ce[s].finish:Ce[s].continue}),!r&&(0,m.jsx)(S,{variant:"contained",type:"text",onClick:Ge,children:Ce[s].back})]})}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,m.jsx)(R,{color:"primary",onClick:function(){return r(!1)},children:(0,m.jsx)(U,{})})}),(0,m.jsx)(I,{sx:{position:"relative",top:"-30px",zIndex:1},activeStep:W,orientation:"vertical",steps:[{stepLabel:{children:Ce[s].stepOne},stepContent:{children:(0,m.jsxs)("div",{className:"dropzone",style:{position:"relative"},onDrop:function(e){return Be(e)},onDragOver:function(e){return(t=e).preventDefault(),void t.stopPropagation();var t},onDragEnter:function(e){return(t=e).preventDefault(),t.stopPropagation(),void(t.target!==be.current&&me(!0));var t},onDragLeave:function(e){return(t=e).preventDefault(),t.stopPropagation(),void(t.target===be.current&&me(!1));var t},children:[ge&&(0,m.jsx)("div",{ref:be,style:{backgroundColor:"rgba(128,128,128,.95)",position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:9999,textAlign:"center",color:"black",fontSize:24},children:(0,m.jsxs)("h3",{children:[(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),Ce[s].dropzone]})}),(0,m.jsx)("div",{children:(0,m.jsx)("input",{type:"file",id:"fileUpload",style:{display:"none"},onChange:function(e){e.target.files&&Me(e.target.files[0])},accept:".gpkg, .json, .geojson, .csv"})}),(0,m.jsxs)(S,{type:"text",onClick:function(){var e;return null===(e=document.getElementById("fileUpload"))||void 0===e?void 0:e.click()},className:"",children:[(0,m.jsx)(F,{}),(0,m.jsx)("span",{children:Ce[s].upload})]}),(0,m.jsx)("p",{style:{textAlign:"center"},children:(0,m.jsx)("small",{children:Ce[s].drop})}),(0,m.jsx)("p",{style:{textAlign:"center"},children:Ce[s].or}),(0,m.jsx)(O,{sx:{width:"100%"},label:Ce[s].url,variant:"standard",value:X,onChange:function(e){H(e.target.value.trim()),Y(e.target.value.trim()),$(""),ne([]),se(""),pe([])},multiline:!0}),(0,m.jsx)("br",{}),(0,m.jsx)(_e,{isFirst:!0,handleNext:function(){var e,r,n=!0;""===z.trim()&&(n=!1,ve(!1),a.utilities.showError(t,Ce[s].errorNone,!1)),n&&(e=X.toUpperCase().split("/"),r=parseInt(e[e.length-1],10),X.toUpperCase().endsWith("MAPSERVER")||X.toUpperCase().endsWith("MAPSERVER/")?$(c):-1!==X.toUpperCase().indexOf("FEATURESERVER")||-1!==X.toUpperCase().indexOf("MAPSERVER")&&!Number.isNaN(r)?$(u):-1!==e.indexOf("WFS")?$(x):X.toUpperCase().endsWith(".JSON")||X.toUpperCase().endsWith(".GEOJSON")?$(p):X.toUpperCase().endsWith(".GPKG")?$(d):-1!==X.toUpperCase().indexOf("{Z}/{X}/{Y}")||-1!==X.toUpperCase().indexOf("{Z}/{Y}/{X}")?$(A):-1===X.indexOf("/")&&32===X.replaceAll("-","").length?$(E):-1!==X.toUpperCase().indexOf("WMS")&&$(f),B(1))}})]})}},{stepLabel:{children:Ce[s].stepTwo},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(w,{fullWidth:!0,labelId:"service-type-label",value:Q,onChange:function(e){$(e.target.value),ne([]),pe([])},label:Ce[s].service,inputLabel:{id:"service-type-label"},menuItems:Ee.map((function(e){var t=(0,h.A)(e,2),r=t[0];return{key:r,item:{value:r,children:t[1]}}})),variant:"standard"}),(0,m.jsx)(_e,{handleNext:Ue})]})}},{stepLabel:{children:Ce[s].stepThree},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[0===re.length&&(0,m.jsx)(O,{label:Ce[s].name,variant:"standard",value:ie,onChange:We}),re.length>1&&(0,m.jsx)(N,{fullWidth:!0,multiple:Ae(),disableClearable:!Ae(),id:"service-layer-label",options:re,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,m.jsx)("span",j(j({},e),{},{children:t[1]}))},onChange:function(e,t){Ae()?(pe(t.map((function(e){return{layerId:"".concat(e[0])}}))),se(t.map((function(e){return e[1]})).join(", "))):(pe([{layerId:"".concat(t[0])}]),se(t[1]))},renderInput:function(e){return(0,m.jsx)(O,j(j({},e),{},{label:Ce[s].layerSelect}))}}),(0,m.jsx)("br",{}),(0,m.jsx)(_e,{isLast:!Ae(),handleNext:Ae()?function(){var e=!0;0===ue.length&&(e=!1,Le(Ce[s].layer)),e&&B(3)}:Fe})]})}},Ae()?{stepLabel:{children:Ce[s].stepFour},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(O,{sx:{width:"100%"},label:Ce[s].name,variant:"standard",value:ie,onChange:We}),(0,m.jsx)("br",{}),(0,m.jsx)(_e,{isLast:!0,handleNext:Fe})]})}}:null]})]})};var E=r(93987);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,c.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const L=function(e){var t=e.mapId,r=e.title,n=e.layerIds,a=e.setReorderLayersVisible,o=e.setMapLayers,i=window.cgpv,s=i.api,l=i.ui.elements,c=l.List,u=l.ListItem,p=l.ListItemButton,d=l.ListItemIcon,v=l.HandleIcon,y=l.ListItemText,x=l.Box,g=l.IconButton,b=l.CloseIcon,j=s.maps[t].displayLanguage,A={titleBar:{position:"relative",top:"-30px",zIndex:1},draggableList:{top:"-30px"},regularListItem:{color:"text.primary",padding:0},draggingListItem:{color:"text.primary",padding:0,background:"rgb(235,235,235,0.5)"},listItemText:{fontSize:14,noWrap:!0},handleIcon:{margin:"8px 0px"}},C=function(e){return s.maps[t].layer.geoviewLayers[e].geoviewLayerName[j]};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,m.jsx)(g,{className:"style3",onClick:function(){return a(!1)},children:(0,m.jsx)(b,{})})}),(0,m.jsx)(x,{sx:A.titleBar,children:r}),(0,m.jsx)(E.JY,{onDragEnd:function(e){var r=e.destination,a=e.source;if(r){var i=(0,f.A)(n),l=i.splice(a.index,1),c=(0,h.A)(l,1)[0];i.splice(r.index,0,c),s.maps[t].layer.moveLayer(c,r.index),o(i)}},children:(0,m.jsx)(E.gL,{droppableId:"droppable",children:function(e){return(0,m.jsxs)(c,P(P({sx:A.draggableList},e.droppableProps),{},{innerref:e.innerRef,children:[n.map((function(e,t){return(0,m.jsx)(E.sx,{draggableId:e,index:t,children:function(t,r){return(0,m.jsx)(u,P(P(P({innerref:t.innerRef,sx:r.isDragging?A.draggingListItem:A.regularListItem},t.draggableProps),t.dragHandleProps),{},{children:(0,m.jsxs)(p,{children:[(0,m.jsx)(d,{children:(0,m.jsx)(v,{sx:A.handleIcon})}),(0,m.jsx)(y,{primaryTypographyProps:A.listItemText,primary:C(e)})]})}))}},e)})),e.placeholder]}))}})})]})};const w=function(e){var t=e.mapId,r=e.buttonPanel,n=window.cgpv,a=n.api,o=n.ui,i=n.react,s=i.useState,l=i.useEffect,c=s(!1),p=(0,h.A)(c,2),d=p[0],y=p[1],x=s(!1),g=(0,h.A)(x,2),b=g[0],j=g[1],E=s([]),C=(0,h.A)(E,2),P=C[0],w=C[1],I=s(),O=(0,h.A)(I,2),S=O[0],k=O[1],N=s(null),T=(0,h.A)(N,2),D=T[0],R=T[1],U=s(!1),F=(0,h.A)(U,2),G=F[0],M=F[1],W=s(!1),B=(0,h.A)(W,2),_=B[0],V=B[1],z=o.elements,Y=z.IconButton,J=z.AddIcon,K=z.Box,X=z.ExpandMoreIcon,H=z.ExpandLessIcon,Z=z.VisibilityIcon,q=z.VisibilityOffIcon,Q=z.Menu,$=z.MenuItem,ee=z.MenuIcon,te=z.ListItemIcon,re=z.ListItemText,ne=z.ReorderIcon,ae=a.maps[t].getDisplayLanguage(),oe=(0,u.NKs)({en:{addLayer:"Add Layer",expandAll:"Expand Groups",collapseAll:"Collapse Groups",showAll:"Show All",hideAll:"Hide All",reorderLayers:"Reorder Layers"},fr:{addLayer:"Ajouter Couche",expandAll:"Élargir les groupes",collapseAll:"Réduire les groupes",showAll:"Montrer tout",hideAll:"Cacher tout",reorderLayers:"Réorganiser les couches"}}),ie={mainContainer:{display:"flex",flexDirection:"column",height:"inherit"},topControls:{display:"flex",flexDirection:"row",justifyContent:"space-between"},addLayerSection:{display:"flex",alignItems:"center",marginTop:"auto",justifyContent:"end"}},se=Boolean(D),le=function(){var e;v.vF.logTraceCoreAPIEvent("PANEL-CONTENT - updateLayers"),void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&w((0,f.A)(a.maps[t].layer.layerOrder).reverse())};l((function(){return v.vF.logTraceUseEffect("PANEL-CONTENT - mount 1"),a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,le,t),a.event.on(a.eventNames.GET_LEGENDS.LEGEND_LAYERSET_UPDATED,le,"".concat(t,"/LegendsLayerSet")),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,le),a.event.off(a.eventNames.GET_LEGENDS.LEGEND_LAYERSET_UPDATED,t,le)}}),[]),l((function(){}),[P]),l((function(){v.vF.logTraceUseEffect("PANEL-CONTENT - mount 2");var e=function(){v.vF.logTraceCoreAPIEvent("PANEL-CONTENT - setAddLayerVisibleListenerFunction"),y(!1)};return a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,e,"".concat(t,"/").concat(r.buttonPanelId)),function(){a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,"".concat(t,"/").concat(r.buttonPanelId),e)}}),[a,r.buttonPanelId,t]),l((function(){k(null)}),[G]),l((function(){k(null)}),[_]);var ce=function(){R(null)},ue=function(e){M(e),ce()},pe=function(e){V(!e),ce()};return l((function(){if(b){var e=window.scrollX,t=window.scrollY;window.onscroll=function(){window.scrollTo(e,t)}}else window.onscroll=function(){}}),[b]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Q,{anchorEl:D,open:se,onClose:ce,children:[(0,m.jsxs)($,{onClick:function(){return ue(!0)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(X,{})}),(0,m.jsx)(re,{children:oe[ae].expandAll})]}),(0,m.jsxs)($,{onClick:function(){return ue(!1)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(H,{})}),(0,m.jsx)(re,{children:oe[ae].collapseAll})]}),(0,m.jsxs)($,{onClick:function(){return pe(!0)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(Z,{})}),(0,m.jsx)(re,{children:oe[ae].showAll})]}),(0,m.jsxs)($,{onClick:function(){return pe(!1)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(q,{})}),(0,m.jsx)(re,{children:oe[ae].hideAll})]}),(0,m.jsxs)($,{onClick:function(){return j(!0),void ce()},children:[(0,m.jsx)(te,{children:(0,m.jsx)(ne,{})}),(0,m.jsx)(re,{children:oe[ae].reorderLayers})]})]}),(0,m.jsxs)(K,{sx:ie.mainContainer,children:[d&&(0,m.jsx)(A,{mapId:t,setAddLayerVisible:y}),b&&(0,m.jsx)(L,{mapId:t,title:oe[ae].reorderLayers,layerIds:P,setMapLayers:w,setReorderLayersVisible:j}),(0,m.jsxs)(K,{sx:ie.topControls,style:{display:d||b?"none":"flex"},children:[(0,m.jsx)("div",{children:(0,m.jsx)(Y,{color:"primary",onClick:function(e){R(e.currentTarget)},children:(0,m.jsx)(ee,{})})}),(0,m.jsxs)(K,{onClick:function(){y((function(e){return!e}))},children:[oe[ae].addLayer,(0,m.jsx)(Y,{children:(0,m.jsx)(J,{})})]})]}),(0,m.jsx)("div",{style:{display:d||b?"none":"block"},children:S})]})]})},I=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Layers/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"reorderable":{"type":"boolean","default":true,"description":"Specifies if the items in the legend can be reordered."},"allowImport":{"type":"boolean","default":true,"description":"Specifies if the user-added layers are allowed."},"isOpen":{"type":"object","description":"Specifies whether the legend is opened by default on initial loading of the map for small, medium, and large viewports.","properties":{"large":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for large viewports."},"medium":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for medium viewports."},"small":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for small viewports."}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),O=JSON.parse('{"reorderable":true,"allowImport":true,"isOpen":{"small":false,"medium":false,"large":false},"suportedLanguages":["en","fr"]}');function S(e,t,r){return t=(0,i.A)(t),(0,o.A)(e,k()?Reflect.construct(t,r||[],(0,i.A)(e).constructor):t.apply(e,r))}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}var N=function(e){function t(){var e;(0,n.A)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=S(this,t,[].concat(a)),(0,c.A)((0,s.A)(e),"schema",(function(){return I})),(0,c.A)((0,s.A)(e),"defaultConfig",(function(){return(0,u.NKs)(O)})),(0,c.A)((0,s.A)(e),"translations",(0,u.NKs)({en:{layersPanel:{title:"Layers"}},fr:{layersPanel:{title:"Couches"}}})),e}return(0,l.A)(t,e),(0,a.A)(t,[{key:"onCreateButtonProps",value:function(){return{id:"layersPanelButton",tooltip:"layersPanel.title",tooltipPlacement:"right",children:(0,m.jsx)(d.LayersOutlinedIcon,{}),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"layersPanel.title",icon:(0,m.jsx)(d.LayersOutlinedIcon,{}),width:350,status:null===(e=this.configObj)||void 0===e||null===(e=e.isOpen)||void 0===e?void 0:e.large}}},{key:"onCreateContent",value:function(){return(0,m.jsx)(w,{buttonPanel:this.buttonPanel,mapId:this.pluginProps.mapId})}}]),t}(p.i);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["layers-panel"]=(0,u.KXH)(N)}},e=>{var t;t=97617,e(e.s=t)}]);
//# sourceMappingURL=geoview-layers-panel.js.map
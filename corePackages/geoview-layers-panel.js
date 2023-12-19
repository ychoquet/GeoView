/*! Package:geoview-layers-panel: 0.1.0 - "ad945ba0cec36c1c8614c5a2fc870ef18b8b2dff" - 2023-12-19T21:16:03.224Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[763],{71297:(e,t,r)=>{r.d(t,{k:()=>p});var n=r(76014),a=r(84580),o=r(42910),i=r(64188),s=r(16167),l=r(91267),c=r(64057);function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var p=function(e){(0,i.Z)(r,e);var t=u(r);function r(){var e;(0,n.Z)(this,r);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),(0,c.Z)((0,o.Z)(e),"buttonPanel",void 0),(0,c.Z)((0,o.Z)(e),"buttonProps",void 0),(0,c.Z)((0,o.Z)(e),"panelProps",void 0),e}return(0,a.Z)(r,[{key:"onCreateButtonProps",value:function(){var e=window.cgpv.ui.elements.MapIcon;return{id:"somePluginButton",tooltip:"Some tooltip",tooltipPlacement:"right",children:this.react.createElement(e),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"Some title",icon:'<i class="material-icons">map</i>',width:"80vw",status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"Content for AppBar Plugin on map id ".concat(this.pluginProps.mapId," goes here..."))}},{key:"onAdd",value:function(){var e,t;this.buttonProps=this.onCreateButtonProps(),this.panelProps=this.onCreateContentProps(),this.buttonPanel=(null===(e=this.map())||void 0===e?void 0:e.appBarButtons.createAppbarPanel(this.buttonProps,this.panelProps,null))||void 0;var r=this.onCreateContent();null===(t=this.buttonPanel)||void 0===t||null===(t=t.panel)||void 0===t||t.changeContent(r)}},{key:"onRemove",value:function(){var e;this.api&&this.buttonPanel&&(null===(e=this.map())||void 0===e||e.appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId))}}]),r}(r(89498).V)},16e3:(e,t,r)=>{var n=r(76014),a=r(84580),o=r(42910),i=r(64188),s=r(16167),l=r(91267),c=r(64057),u=r(21284),p=r(71297),d=r(51134),f=r(96021),h=r(86865),v=r(77797),y=r(65922),x=r.n(y),g=r(29541);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const j=function(e){var t=e.mapId,r=e.setAddLayerVisible,n=window.cgpv,a=n.api,o=n.ui,i=n.react,s=a.maps[t].getDisplayLanguage(),l=a.layerTypes,c=l.ESRI_DYNAMIC,p=l.ESRI_FEATURE,d=l.GEOJSON,f=l.GEOPACKAGE,y=l.WMS,m=l.WFS,j=l.OGC_FEATURE,E=l.XYZ_TILES,C=l.GEOCORE,O=i.useState,w=i.useEffect,I=i.useRef,L=o.elements,P=L.Select,S=L.Stepper,A=L.TextField,k=L.Button,Z=L.ButtonGroup,N=L.Autocomplete,R=L.CircularProgressBase,T=L.Box,D=L.IconButton,U=L.CloseIcon,F=L.FileUploadIcon,G=O(0),B=(0,h.Z)(G,2),M=B[0],_=B[1],W=O(""),V=(0,h.Z)(W,2),z=V[0],J=V[1],Y=O(""),K=(0,h.Z)(Y,2),X=K[0],q=K[1],H=O(""),Q=(0,h.Z)(H,2),$=Q[0],ee=Q[1],te=O([]),re=(0,h.Z)(te,2),ne=re[0],ae=re[1],oe=O(""),ie=(0,h.Z)(oe,2),se=ie[0],le=ie[1],ce=O([]),ue=(0,h.Z)(ce,2),pe=ue[0],de=ue[1],fe=O(!1),he=(0,h.Z)(fe,2),ve=he[0],ye=he[1],xe=O(!1),ge=(0,h.Z)(xe,2),me=ge[0],be=ge[1],je=I(null),Ee={buttonGroup:{paddingTop:12,gap:6}},Ce=function(){return $===c||$===m||$===y},Oe=[[c,"ESRI Dynamic Service"],[p,"ESRI Feature Service"],[d,"GeoJSON"],[f,"GeoPackage"],[y,"OGC Web Map Service (WMS)"],[m,"OGC Web Feature Service (WFS)"],[j,"OGC API Features"],[E,"XYZ Raster Tiles"],[C,"GeoCore"]],we={en:{finish:"Finish",continue:"Continue",back:"Back",or:"or",dropzone:"Drop Here",upload:"Choose a File",drop:"Drop the file to upload",url:"Enter URL or UUID",layer:"Layer",stepOne:"Upload a File or enter URL/UUID",stepTwo:"Select format",stepThree:"Configure layer",stepFour:"Enter Name",service:"Service Type",name:"Name",layerSelect:"Select Layer",errorEmpty:"cannot be empty",errorNone:"No file or source added",errorFile:"Only geoJSON and GeoPackage files can be used",errorServer:"source is not valid",errorProj:"does not support current map projection",only:"only"},fr:{finish:"Finir",continue:"Continuer",back:"Retour",or:"ou",dropzone:"Déposez ici",upload:"Choisir un fichier",drop:"Déposez le fichier à télécharger",url:"Entrer l'URL ou l'UUID",layer:"Couche",stepOne:"Ajouter un fichier ou entrer l'URL/UUID",stepTwo:"Sélectionnez le format",stepThree:"Configurer la couche",stepFour:"Entrez le nom",service:"Type de service",name:"Nom",layerSelect:"Sélectionner la couche",errorEmpty:"ne peut être vide",errorNone:"Pas de fichier ou de source ajouté",errorFile:"Seuls les fichiers geoJSON et GeoPackage peuvent être utilisés",errorServer:"source n'est pas valide",errorProj:"ne prend pas en charge la projection cartographique actuelle",only:"seulement"}},Ie=function(e){(0,u.xqf)(e)&&e.message&&"validation.layer.loadfailed"===e.message.value&&ye(!1)};w((function(){return a.event.on(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,Ie,t),function(){a.event.off(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,Ie)}}),[]);var Le=function(e){switch(e){case c:return{err:"ESRI Map",capability:"Map"};case p:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},Pe=function(e){ye(!1),a.utilities.showError(t,"".concat(e," ").concat(we[s].errorEmpty),!1)},Se=function(e){ye(!1),a.utilities.showError(t,"".concat(e," ").concat(we[s].errorServer),!1)},Ae=function(e,r,n){ye(!1);var o="".concat(e," ").concat(we[s].errorProj," ").concat(r,", ").concat(we[s].only," ").concat(n.join(", "));a.utilities.showError(t,o,!1)},ke=function(){var e=(0,v.Z)(x().mark((function e(){var r,n,o,i,s,l,c,u,p,d,f,v;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.projection.projections[a.maps[t].getMapState().currentProjection].getCode(),n=[],e.prev=2,i=z.split("?"),s=(0,h.Z)(i,2),l=s[0],c=s[1],u=new URLSearchParams(c),p=(null===(o=u.get("layers"))||void 0===o?void 0:o.split(","))||[""],e.next=8,a.geoUtilities.getWMSServiceMetadata(l,"");case 8:if(d=e.sent,(n=d.Capability.Layer.CRS).includes(r)){e.next=12;break}throw new Error("proj");case 12:f=[],v=function e(t){if(t.Layer&&t.Layer.length>0)t.Layer.forEach((function(t){e(t)}));else for(var r=0;r<p.length;r++)t.Name===p[r]&&f.push([t.Name,t.Title])},d.Capability.Layer&&v(d.Capability.Layer),1===f.length?(le(f[0][1]),de([{layerId:f[0][0]}])):ae(f),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(2),"proj"===e.t0.message?Ae("WMS",r,n):Se("WMS"),e.abrupt("return",!1);case 22:return e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),Ze=function(){var e=(0,v.Z)(x().mark((function e(){var t,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(z);case 3:t=e.sent,1===(r=t.FeatureTypeList.FeatureType.map((function(e){return[e.Name["#text"].split(":")[1],e.Title["#text"]]}))).length?(le(r[0][1]),de([{layerId:r[0][0]}])):ae(r),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),Se("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=(0,v.Z)(x().mark((function e(){var t,r,n,a,o,i,s;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["id","title"],e.next=3,fetch("".concat(z,"/?f=json"));case 3:if(200===(r=e.sent).status){e.next=7;break}return Se("OGC API Feature"),e.abrupt("return",!1);case 7:return e.next=9,r.json();case 9:if(n=e.sent,!t.every((function(e){return Object.keys(n).includes(e)}))){e.next=15;break}return de([{layerId:n.id}]),le(n.title),e.abrupt("return",!0);case 15:return e.prev=15,a=["collections","links"],e.next=19,fetch("".concat(z,"/collections?f=json"));case 19:return o=e.sent,e.next=22,o.json();case 22:if(i=e.sent,a.every((function(e){return Object.keys(i).includes(e)}))){e.next=26;break}throw new Error("err");case 26:1===(s=i.collections.map((function(e){return[e.id,e.title]}))).length?(le(s[0][1]),de([{layerId:s[0][0]}])):ae(s),e.next=34;break;case 30:return e.prev=30,e.t0=e.catch(15),Se("OGC API Feature"),e.abrupt("return",!1);case 34:return e.abrupt("return",!0);case 35:case"end":return e.stop()}}),e,null,[[15,30]])})));return function(){return e.apply(this,arguments)}}(),Re=function(){try{if(!(-1===z.indexOf("/")&&32===z.replaceAll("-","").length))throw new Error("err");le(""),de([{layerId:z}])}catch(e){return Se("GeoCore UUID"),!1}return!0},Te=function(){var e=(0,v.Z)(x().mark((function e(t){var r,n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(z);case 3:if(!(r=e.sent).capabilities.includes(Le(t).capability)){e.next=8;break}"layers"in r?1===(n=r.layers.map((function(e){return[e.id,e.name]}))).length?(le(n[0][1]),de([{layerId:n[0][0]}])):ae(n):(le(r.name),de([{layerId:r.id}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),Se(Le(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),De=function(){for(var e=["{x}","{y}","{z}"],t=0;t<e.length;t+=1)if(!z.includes(e[t]))return Se("XYZ Tile"),!1;var r=z;return le(""),de([{layerId:z,source:{dataAccessPath:{en:r,fr:r}}}]),!0},Ue=function(){var e=(0,v.Z)(x().mark((function e(){var t,r,n,a;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(z);case 3:return t=e.sent,e.next=6,t.json();case 6:if(r=e.sent,["FeatureCollection","Feature"].includes(r.type)){e.next=9;break}throw new Error("err");case 9:n=z.split("/").pop(),a=z.replace(n,""),se||le(n),de([{layerId:n,source:{dataAccessPath:{en:a,fr:a}}}]),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),Se("GeoJSON"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=(0,v.Z)(x().mark((function e(){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ye(!0),t=!0,void 0!==$){e.next=8;break}t=!1,ye(!1),Pe(we[s].service),e.next=49;break;case 8:if($!==y){e.next=14;break}return e.next=11,ke();case 11:t=e.sent,e.next=49;break;case 14:if($!==m){e.next=20;break}return e.next=17,Ze();case 17:t=e.sent,e.next=49;break;case 20:if($!==j){e.next=26;break}return e.next=23,Ne();case 23:t=e.sent,e.next=49;break;case 26:if($!==E){e.next=30;break}t=De(),e.next=49;break;case 30:if($!==c){e.next=36;break}return e.next=33,Te(c);case 33:t=e.sent,e.next=49;break;case 36:if($!==p){e.next=42;break}return e.next=39,Te(p);case 39:t=e.sent,e.next=49;break;case 42:if($!==d){e.next=48;break}return e.next=45,Ue();case 45:t=e.sent,e.next=49;break;case 48:$===f?(r=void 0,n=void 0,r=z.split("/").pop(),n=z.replace(r,""),se||le(r),de([{layerId:r,source:{dataAccessPath:{en:n,fr:n}}}]),t=!0):$===C&&(t=Re());case 49:t&&(ye(!1),_(2));case 50:case"end":return e.stop()}var r,n}),e)})));return function(){return e.apply(this,arguments)}}(),Ge=function(){ye(!0);var e=a.generateId();a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t),ye(!1),r(!1)}),"".concat(t,"/").concat(e));var n=!0,o=se,i=z;if($!==c&&$!==p||(i=a.geoUtilities.getMapServerUrl(z)),$===y){var l=z.split("?");i=(0,h.Z)(l,1)[0]}""===se&&(n=!1,Pe(Ce()?we[s].layer:we[s].name));var u={geoviewLayerId:e,geoviewLayerName:{en:o,fr:o},geoviewLayerType:$,metadataAccessPath:{en:i,fr:i},listOfLayerEntryConfig:pe};$!==d&&$!==E&&$!==f||(u.metadataAccessPath={en:"",fr:""}),$===C&&delete u.metadataAccessPath,$===j&&(u.metadataAccessPath={en:a.geoUtilities.getOGCServerUrl(z),fr:a.geoUtilities.getOGCServerUrl(z)}),n&&($===C&&setTimeout((function(){ye(!1),r(!1)}),3e3),u.geoviewLayerId?a.maps[t].layer.layerOrder.push(u.geoviewLayerId):void 0!==u.listOfLayerEntryConfig&&u.listOfLayerEntryConfig.forEach((function(e){e.layerId&&a.maps[t].layer.layerOrder.unshift(e.layerId)})),a.maps[t].layer.addGeoviewLayer(u))},Be=function(){_((function(e){return e-1}))},Me=function(e){var t=URL.createObjectURL(e);q(e.name),J(t);var r=e.name.split(".")[0];ee(""),ae([]),le(r),de([])},_e=function(e){le(e.target.value)},We=function(e){var r;if(e.preventDefault(),e.stopPropagation(),be(!1),null!==(r=e.dataTransfer)&&void 0!==r&&r.files){var n=e.dataTransfer.files[0],o=n.name.toUpperCase();o.endsWith(".JSON")||o.endsWith(".GEOJSON")||o.endsWith(".GPKG")?Me(n):a.utilities.showError(t,we[s].errorFile,!1)}};function Ve(e){var t=e.isFirst,r=void 0!==t&&t,n=e.isLast,a=void 0!==n&&n,o=e.handleNext;return ve?(0,g.jsx)(T,{sx:{padding:10},children:(0,g.jsx)(R,{})}):(0,g.jsxs)(Z,{sx:Ee.buttonGroup,children:[(0,g.jsx)(k,{variant:"contained",type:"text",onClick:o,children:a?we[s].finish:we[s].continue}),!r&&(0,g.jsx)(k,{variant:"contained",type:"text",onClick:Be,children:we[s].back})]})}return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(T,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,g.jsx)(D,{color:"primary",onClick:function(){return r(!1)},children:(0,g.jsx)(U,{})})}),(0,g.jsx)(S,{sx:{position:"relative",top:"-30px",zIndex:1},activeStep:M,orientation:"vertical",steps:[{stepLabel:{children:we[s].stepOne},stepContent:{children:(0,g.jsxs)("div",{className:"dropzone",style:{position:"relative"},onDrop:function(e){return We(e)},onDragOver:function(e){return(t=e).preventDefault(),void t.stopPropagation();var t},onDragEnter:function(e){return(t=e).preventDefault(),t.stopPropagation(),void(t.target!==je.current&&be(!0));var t},onDragLeave:function(e){return(t=e).preventDefault(),t.stopPropagation(),void(t.target===je.current&&be(!1));var t},children:[me&&(0,g.jsx)("div",{ref:je,style:{backgroundColor:"rgba(128,128,128,.95)",position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:9999,textAlign:"center",color:"black",fontSize:24},children:(0,g.jsxs)("h3",{children:[(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),we[s].dropzone]})}),(0,g.jsx)("div",{children:(0,g.jsx)("input",{type:"file",id:"fileUpload",style:{display:"none"},onChange:function(e){e.target.files&&Me(e.target.files[0])},accept:".gpkg, .json, .geojson"})}),(0,g.jsxs)(k,{type:"text",onClick:function(){var e;return null===(e=document.getElementById("fileUpload"))||void 0===e?void 0:e.click()},className:"",children:[(0,g.jsx)(F,{}),(0,g.jsx)("span",{children:we[s].upload})]}),(0,g.jsx)("p",{style:{textAlign:"center"},children:(0,g.jsx)("small",{children:we[s].drop})}),(0,g.jsx)("p",{style:{textAlign:"center"},children:we[s].or}),(0,g.jsx)(A,{sx:{width:"100%"},label:we[s].url,variant:"standard",value:X,onChange:function(e){q(e.target.value.trim()),J(e.target.value.trim()),ee(""),ae([]),le(""),de([])},multiline:!0}),(0,g.jsx)("br",{}),(0,g.jsx)(Ve,{isFirst:!0,handleNext:function(){var e,r,n=!0;""===z.trim()&&(n=!1,ye(!1),a.utilities.showError(t,we[s].errorNone,!1)),n&&(e=X.toUpperCase().split("/"),r=parseInt(e[e.length-1],10),X.toUpperCase().endsWith("MAPSERVER")||X.toUpperCase().endsWith("MAPSERVER/")?ee(c):-1!==X.toUpperCase().indexOf("FEATURESERVER")||-1!==X.toUpperCase().indexOf("MAPSERVER")&&!Number.isNaN(r)?ee(p):-1!==e.indexOf("WFS")?ee(m):X.toUpperCase().endsWith(".JSON")||X.toUpperCase().endsWith(".GEOJSON")?ee(d):X.toUpperCase().endsWith(".GPKG")?ee(f):-1!==X.toUpperCase().indexOf("{Z}/{X}/{Y}")||-1!==X.toUpperCase().indexOf("{Z}/{Y}/{X}")?ee(E):-1===X.indexOf("/")&&32===X.replaceAll("-","").length?ee(C):-1!==X.toUpperCase().indexOf("WMS")&&ee(y),_(1))}})]})}},{stepLabel:{children:we[s].stepTwo},stepContent:{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(P,{fullWidth:!0,labelId:"service-type-label",value:$,onChange:function(e){ee(e.target.value),ae([]),de([])},label:we[s].service,inputLabel:{id:"service-type-label"},menuItems:Oe.map((function(e){var t=(0,h.Z)(e,2),r=t[0];return{key:r,item:{value:r,children:t[1]}}}))}),(0,g.jsx)(Ve,{handleNext:Fe})]})}},{stepLabel:{children:we[s].stepThree},stepContent:{children:(0,g.jsxs)(g.Fragment,{children:[0===ne.length&&(0,g.jsx)(A,{label:we[s].name,variant:"standard",value:se,onChange:_e}),ne.length>1&&(0,g.jsx)(N,{fullWidth:!0,multiple:Ce(),disableClearable:!Ce(),id:"service-layer-label",options:ne,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,g.jsx)("span",b(b({},e),{},{children:t[1]}))},onChange:function(e,t){Ce()?(de(t.map((function(e){return{layerId:"".concat(e[0])}}))),le(t.map((function(e){return e[1]})).join(", "))):(de([{layerId:"".concat(t[0])}]),le(t[1]))},renderInput:function(e){return(0,g.jsx)(A,b(b({},e),{},{label:we[s].layerSelect}))}}),(0,g.jsx)("br",{}),(0,g.jsx)(Ve,{isLast:!Ce(),handleNext:Ce()?function(){var e=!0;0===pe.length&&(e=!1,Pe(we[s].layer)),e&&_(3)}:Ge})]})}},Ce()?{stepLabel:{children:we[s].stepFour},stepContent:{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(A,{sx:{width:"100%"},label:we[s].name,variant:"standard",value:se,onChange:_e}),(0,g.jsx)("br",{}),(0,g.jsx)(Ve,{isLast:!0,handleNext:Ge})]})}}:null]})]})};var E=r(21226);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const w=function(e){var t=e.mapId,r=e.title,n=e.layerIds,a=e.setReorderLayersVisible,o=e.setMapLayers,i=window.cgpv,s=i.api,l=i.ui.elements,c=l.List,u=l.ListItem,p=l.ListItemButton,d=l.ListItemIcon,v=l.HandleIcon,y=l.ListItemText,x=l.Box,m=l.IconButton,b=l.CloseIcon,j=s.maps[t].displayLanguage,C={titleBar:{position:"relative",top:"-30px",zIndex:1},draggableList:{top:"-30px"},regularListItem:{color:"text.primary",padding:0},draggingListItem:{color:"text.primary",padding:0,background:"rgb(235,235,235,0.5)"},listItemText:{fontSize:14,noWrap:!0},handleIcon:{margin:"8px 0px"}},w=function(e){return s.maps[t].layer.geoviewLayers[e].geoviewLayerName[j]};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,g.jsx)(m,{color:"primary",onClick:function(){return a(!1)},children:(0,g.jsx)(b,{})})}),(0,g.jsx)(x,{sx:C.titleBar,children:r}),(0,g.jsx)(E.Z5,{onDragEnd:function(e){var r=e.destination,a=e.source;if(r){var i=(0,f.Z)(n),l=i.splice(a.index,1),c=(0,h.Z)(l,1)[0];i.splice(r.index,0,c),s.maps[t].layer.moveLayer(c,r.index),o(i)}},children:(0,g.jsx)(E.bK,{droppableId:"droppable",children:function(e){return(0,g.jsxs)(c,O(O({sx:C.draggableList},e.droppableProps),{},{innerref:e.innerRef,children:[n.map((function(e,t){return(0,g.jsx)(E._l,{draggableId:e,index:t,children:function(t,r){return(0,g.jsx)(u,O(O(O({innerref:t.innerRef,sx:r.isDragging?C.draggingListItem:C.regularListItem},t.draggableProps),t.dragHandleProps),{},{children:(0,g.jsxs)(p,{children:[(0,g.jsx)(d,{children:(0,g.jsx)(v,{sx:C.handleIcon})}),(0,g.jsx)(y,{primaryTypographyProps:C.listItemText,primary:w(e)})]})}))}},e)})),e.placeholder]}))}})})]})};const I=function(e){var t=e.mapId,r=e.buttonPanel,n=window.cgpv,a=n.api,o=n.ui,i=n.react,s=i.useState,l=i.useEffect,c=s(!1),p=(0,h.Z)(c,2),d=p[0],v=p[1],y=s(!1),x=(0,h.Z)(y,2),m=x[0],b=x[1],E=s([]),C=(0,h.Z)(E,2),O=C[0],I=C[1],L=s(),P=(0,h.Z)(L,2),S=P[0],A=P[1],k=s(null),Z=(0,h.Z)(k,2),N=Z[0],R=Z[1],T=s(!1),D=(0,h.Z)(T,2),U=D[0],F=D[1],G=s(!1),B=(0,h.Z)(G,2),M=B[0],_=B[1],W=o.elements,V=W.IconButton,z=W.AddIcon,J=W.Box,Y=W.ExpandMoreIcon,K=W.ExpandLessIcon,X=W.VisibilityIcon,q=W.VisibilityOffIcon,H=W.Menu,Q=W.MenuItem,$=W.MenuIcon,ee=W.ListItemIcon,te=W.ListItemText,re=W.ReorderIcon,ne=a.maps[t].getDisplayLanguage(),ae=(0,u.ZQJ)({en:{addLayer:"Add Layer",expandAll:"Expand Groups",collapseAll:"Collapse Groups",showAll:"Show All",hideAll:"Hide All",reorderLayers:"Reorder Layers"},fr:{addLayer:"Ajouter Couche",expandAll:"Élargir les groupes",collapseAll:"Réduire les groupes",showAll:"Montrer tout",hideAll:"Cacher tout",reorderLayers:"Réorganiser les couches"}}),oe={mainContainer:{display:"flex",flexDirection:"column",height:"inherit"},topControls:{display:"flex",flexDirection:"row",justifyContent:"space-between"},addLayerSection:{display:"flex",alignItems:"center",marginTop:"auto",justifyContent:"end"}},ie=Boolean(N),se=function(){var e;void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&I((0,f.Z)(a.maps[t].layer.layerOrder).reverse())};l((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,se,t),a.event.on(a.eventNames.GET_LEGENDS.LEGENDS_LAYERSET_UPDATED,se,"".concat(t,"/LegendsLayerSet")),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,se),a.event.off(a.eventNames.GET_LEGENDS.LEGENDS_LAYERSET_UPDATED,t,se)}}),[]),l((function(){A(a.maps[t].legend.createLegend({layerIds:O,isRemoveable:!0,canSetOpacity:!0,canZoomTo:!0}))}),[O]),l((function(){var e=function(){return v(!1)};return a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,e,"".concat(t,"/").concat(r.buttonPanelId)),function(){a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,"".concat(t,"/").concat(r.buttonPanelId),e)}}),[a,r.buttonPanelId,t]),l((function(){A(a.maps[t].legend.createLegend({layerIds:O,isRemoveable:!0,canSetOpacity:!0,expandAll:U,canZoomTo:!0}))}),[U]),l((function(){A(a.maps[t].legend.createLegend({layerIds:O,isRemoveable:!0,canSetOpacity:!0,hideAll:M,canZoomTo:!0}))}),[M]);var le=function(){R(null)},ce=function(e){F(e),le()},ue=function(e){_(!e),le()};return l((function(){if(m){var e=window.scrollX,t=window.scrollY;window.onscroll=function(){window.scrollTo(e,t)}}else window.onscroll=function(){}}),[m]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(H,{anchorEl:N,open:ie,onClose:le,children:[(0,g.jsxs)(Q,{onClick:function(){return ce(!0)},children:[(0,g.jsx)(ee,{children:(0,g.jsx)(Y,{})}),(0,g.jsx)(te,{children:ae[ne].expandAll})]}),(0,g.jsxs)(Q,{onClick:function(){return ce(!1)},children:[(0,g.jsx)(ee,{children:(0,g.jsx)(K,{})}),(0,g.jsx)(te,{children:ae[ne].collapseAll})]}),(0,g.jsxs)(Q,{onClick:function(){return ue(!0)},children:[(0,g.jsx)(ee,{children:(0,g.jsx)(X,{})}),(0,g.jsx)(te,{children:ae[ne].showAll})]}),(0,g.jsxs)(Q,{onClick:function(){return ue(!1)},children:[(0,g.jsx)(ee,{children:(0,g.jsx)(q,{})}),(0,g.jsx)(te,{children:ae[ne].hideAll})]}),(0,g.jsxs)(Q,{onClick:function(){return b(!0),void le()},children:[(0,g.jsx)(ee,{children:(0,g.jsx)(re,{})}),(0,g.jsx)(te,{children:ae[ne].reorderLayers})]})]}),(0,g.jsxs)(J,{sx:oe.mainContainer,children:[d&&(0,g.jsx)(j,{mapId:t,setAddLayerVisible:v}),m&&(0,g.jsx)(w,{mapId:t,title:ae[ne].reorderLayers,layerIds:O,setMapLayers:I,setReorderLayersVisible:b}),(0,g.jsxs)(J,{sx:oe.topControls,style:{display:d||m?"none":"flex"},children:[(0,g.jsx)("div",{children:(0,g.jsx)(V,{color:"primary",onClick:function(e){R(e.currentTarget)},children:(0,g.jsx)($,{})})}),(0,g.jsxs)(J,{onClick:function(){v((function(e){return!e}))},children:[ae[ne].addLayer,(0,g.jsx)(V,{children:(0,g.jsx)(z,{})})]})]}),(0,g.jsx)("div",{style:{display:d||m?"none":"block"},children:S})]})]})},L=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Layers/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"reorderable":{"type":"boolean","default":true,"description":"Specifies if the items in the legend can be reordered."},"allowImport":{"type":"boolean","default":true,"description":"Specifies if the user-added layers are allowed."},"isOpen":{"type":"object","description":"Specifies whether the legend is opened by default on initial loading of the map for small, medium, and large viewports.","properties":{"large":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for large viewports."},"medium":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for medium viewports."},"small":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for small viewports."}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),P=JSON.parse('{"reorderable":true,"allowImport":true,"isOpen":{"small":false,"medium":false,"large":false},"suportedLanguages":["en","fr"]}');function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var A=function(e){(0,i.Z)(r,e);var t=S(r);function r(){var e;(0,n.Z)(this,r);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),(0,c.Z)((0,o.Z)(e),"schema",(function(){return L})),(0,c.Z)((0,o.Z)(e),"defaultConfig",(function(){return(0,u.ZQJ)(P)})),(0,c.Z)((0,o.Z)(e),"translations",(0,u.ZQJ)({en:{layersPanel:{title:"Layers"}},fr:{layersPanel:{title:"Couches"}}})),e}return(0,a.Z)(r,[{key:"onCreateButtonProps",value:function(){return{id:"layersPanelButton",tooltip:"layersPanel.title",tooltipPlacement:"right",children:(0,g.jsx)(d.LayersOutlinedIcon,{}),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"layersPanel.title",icon:(0,g.jsx)(d.LayersOutlinedIcon,{}),width:350,status:null===(e=this.configObj)||void 0===e||null===(e=e.isOpen)||void 0===e?void 0:e.large}}},{key:"onCreateContent",value:function(){return(0,g.jsx)(I,{buttonPanel:this.buttonPanel,mapId:this.pluginProps.mapId})}}]),r}(p.k);window.plugins=window.plugins||{},window.plugins["layers-panel"]=(0,u.RFZ)(A)}},e=>{var t;t=16e3,e(e.s=t)}]);
//# sourceMappingURL=geoview-layers-panel.js.map
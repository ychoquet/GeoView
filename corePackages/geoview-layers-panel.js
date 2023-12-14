/*! Package:geoview-layers-panel: 0.1.0 - "dc05e2a91dfd0e4a23afb923727d2792df88f097" - 2023-12-14T18:54:18.733Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[763],{16e3:(e,r,t)=>{var n=t(76014),a=t(84580),i=t(42910),o=t(64188),s=t(16167),l=t(91267),c=t(64057),u=t(21284),p=t(96021),d=t(86865),f=t(77797),h=t(65922),y=t.n(h),v=t(29541);function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=window;const b=function(e){var r=e.mapId,t=e.setAddLayerVisible,n=m.cgpv,a=n.api,i=n.ui,o=n.react,s=a.maps[r].getDisplayLanguage(),l=a.layerTypes,c=l.ESRI_DYNAMIC,p=l.ESRI_FEATURE,h=l.GEOJSON,x=l.GEOPACKAGE,b=l.WMS,j=l.WFS,E=l.OGC_FEATURE,L=l.XYZ_TILES,I=l.GEOCORE,O=o.useState,C=o.useEffect,S=o.useRef,P=i.elements,w=P.Select,A=P.Stepper,k=P.TextField,N=P.Button,R=P.ButtonGroup,Z=P.Autocomplete,D=P.CircularProgressBase,T=P.Box,U=P.IconButton,F=P.CloseIcon,G=P.FileUploadIcon,M=O(0),_=(0,d.Z)(M,2),W=_[0],B=_[1],V=O(""),z=(0,d.Z)(V,2),J=z[0],Y=z[1],K=O(""),X=(0,d.Z)(K,2),q=X[0],H=X[1],Q=O(""),$=(0,d.Z)(Q,2),ee=$[0],re=$[1],te=O([]),ne=(0,d.Z)(te,2),ae=ne[0],ie=ne[1],oe=O(""),se=(0,d.Z)(oe,2),le=se[0],ce=se[1],ue=O([]),pe=(0,d.Z)(ue,2),de=pe[0],fe=pe[1],he=O(!1),ye=(0,d.Z)(he,2),ve=ye[0],xe=ye[1],ge=O(!1),me=(0,d.Z)(ge,2),be=me[0],je=me[1],Ee=S(null),Le={buttonGroup:{paddingTop:12,gap:6}},Ie=function(){return ee===c||ee===j||ee===b},Oe=[[c,"ESRI Dynamic Service"],[p,"ESRI Feature Service"],[h,"GeoJSON"],[x,"GeoPackage"],[b,"OGC Web Map Service (WMS)"],[j,"OGC Web Feature Service (WFS)"],[E,"OGC API Features"],[L,"XYZ Raster Tiles"],[I,"GeoCore"]],Ce={en:{finish:"Finish",continue:"Continue",back:"Back",or:"or",dropzone:"Drop Here",upload:"Choose a File",drop:"Drop the file to upload",url:"Enter URL or UUID",layer:"Layer",stepOne:"Upload a File or enter URL/UUID",stepTwo:"Select format",stepThree:"Configure layer",stepFour:"Enter Name",service:"Service Type",name:"Name",layerSelect:"Select Layer",errorEmpty:"cannot be empty",errorNone:"No file or source added",errorFile:"Only geoJSON and GeoPackage files can be used",errorServer:"source is not valid",errorProj:"does not support current map projection",only:"only"},fr:{finish:"Finir",continue:"Continuer",back:"Retour",or:"ou",dropzone:"Déposez ici",upload:"Choisir un fichier",drop:"Déposez le fichier à télécharger",url:"Entrer l'URL ou l'UUID",layer:"Couche",stepOne:"Ajouter un fichier ou entrer l'URL/UUID",stepTwo:"Sélectionnez le format",stepThree:"Configurer la couche",stepFour:"Entrez le nom",service:"Type de service",name:"Nom",layerSelect:"Sélectionner la couche",errorEmpty:"ne peut être vide",errorNone:"Pas de fichier ou de source ajouté",errorFile:"Seuls les fichiers geoJSON et GeoPackage peuvent être utilisés",errorServer:"source n'est pas valide",errorProj:"ne prend pas en charge la projection cartographique actuelle",only:"seulement"}},Se=function(e){(0,u.xqf)(e)&&e.message&&"validation.layer.loadfailed"===e.message.value&&xe(!1)};C((function(){return a.event.on(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,Se,r),function(){a.event.off(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,r,Se)}}),[]);var Pe=function(e){switch(e){case c:return{err:"ESRI Map",capability:"Map"};case p:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},we=function(e){xe(!1),a.utilities.showError(r,"".concat(e," ").concat(Ce[s].errorEmpty),!1)},Ae=function(e){xe(!1),a.utilities.showError(r,"".concat(e," ").concat(Ce[s].errorServer),!1)},ke=function(e,t,n){xe(!1);var i="".concat(e," ").concat(Ce[s].errorProj," ").concat(t,", ").concat(Ce[s].only," ").concat(n.join(", "));a.utilities.showError(r,i,!1)},Ne=function(){var e=(0,f.Z)(y().mark((function e(){var t,n,i,o,s,l,c,u,p,f,h,v;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.projection.projections[a.maps[r].getMapState().currentProjection].getCode(),n=[],e.prev=2,o=J.split("?"),s=(0,d.Z)(o,2),l=s[0],c=s[1],u=new URLSearchParams(c),p=(null===(i=u.get("layers"))||void 0===i?void 0:i.split(","))||[""],e.next=8,a.geoUtilities.getWMSServiceMetadata(l,"");case 8:if(f=e.sent,(n=f.Capability.Layer.CRS).includes(t)){e.next=12;break}throw new Error("proj");case 12:h=[],v=function e(r){if(r.Layer&&r.Layer.length>0)r.Layer.forEach((function(r){e(r)}));else for(var t=0;t<p.length;t++)r.Name===p[t]&&h.push([r.Name,r.Title])},f.Capability.Layer&&v(f.Capability.Layer),1===h.length?(ce(h[0][1]),fe([{layerId:h[0][0]}])):ie(h),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(2),"proj"===e.t0.message?ke("WMS",t,n):Ae("WMS"),e.abrupt("return",!1);case 22:return e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=(0,f.Z)(y().mark((function e(){var r,t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(J);case 3:r=e.sent,1===(t=r.FeatureTypeList.FeatureType.map((function(e){return[e.Name["#text"].split(":")[1],e.Title["#text"]]}))).length?(ce(t[0][1]),fe([{layerId:t[0][0]}])):ie(t),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),Ae("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Ze=function(){var e=(0,f.Z)(y().mark((function e(){var r,t,n,a,i,o,s;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=["id","title"],e.next=3,fetch("".concat(J,"/?f=json"));case 3:if(200===(t=e.sent).status){e.next=7;break}return Ae("OGC API Feature"),e.abrupt("return",!1);case 7:return e.next=9,t.json();case 9:if(n=e.sent,!r.every((function(e){return Object.keys(n).includes(e)}))){e.next=15;break}return fe([{layerId:n.id}]),ce(n.title),e.abrupt("return",!0);case 15:return e.prev=15,a=["collections","links"],e.next=19,fetch("".concat(J,"/collections?f=json"));case 19:return i=e.sent,e.next=22,i.json();case 22:if(o=e.sent,a.every((function(e){return Object.keys(o).includes(e)}))){e.next=26;break}throw new Error("err");case 26:1===(s=o.collections.map((function(e){return[e.id,e.title]}))).length?(ce(s[0][1]),fe([{layerId:s[0][0]}])):ie(s),e.next=34;break;case 30:return e.prev=30,e.t0=e.catch(15),Ae("OGC API Feature"),e.abrupt("return",!1);case 34:return e.abrupt("return",!0);case 35:case"end":return e.stop()}}),e,null,[[15,30]])})));return function(){return e.apply(this,arguments)}}(),De=function(){try{if(!(-1===J.indexOf("/")&&32===J.replaceAll("-","").length))throw new Error("err");ce(""),fe([{layerId:J}])}catch(e){return Ae("GeoCore UUID"),!1}return!0},Te=function(){var e=(0,f.Z)(y().mark((function e(r){var t,n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(J);case 3:if(!(t=e.sent).capabilities.includes(Pe(r).capability)){e.next=8;break}"layers"in t?1===(n=t.layers.map((function(e){return[e.id,e.name]}))).length?(ce(n[0][1]),fe([{layerId:n[0][0]}])):ie(n):(ce(t.name),fe([{layerId:t.id}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),Ae(Pe(r).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),Ue=function(){for(var e=["{x}","{y}","{z}"],r=0;r<e.length;r+=1)if(!J.includes(e[r]))return Ae("XYZ Tile"),!1;var t=J;return ce(""),fe([{layerId:J,source:{dataAccessPath:{en:t,fr:t}}}]),!0},Fe=function(){var e=(0,f.Z)(y().mark((function e(){var r,t,n,a;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(J);case 3:return r=e.sent,e.next=6,r.json();case 6:if(t=e.sent,["FeatureCollection","Feature"].includes(t.type)){e.next=9;break}throw new Error("err");case 9:n=J.split("/").pop(),a=J.replace(n,""),le||ce(n),fe([{layerId:n,source:{dataAccessPath:{en:a,fr:a}}}]),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),Ae("GeoJSON"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),Ge=function(){var e=(0,f.Z)(y().mark((function e(){var r;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(xe(!0),r=!0,void 0!==ee){e.next=8;break}r=!1,xe(!1),we(Ce[s].service),e.next=49;break;case 8:if(ee!==b){e.next=14;break}return e.next=11,Ne();case 11:r=e.sent,e.next=49;break;case 14:if(ee!==j){e.next=20;break}return e.next=17,Re();case 17:r=e.sent,e.next=49;break;case 20:if(ee!==E){e.next=26;break}return e.next=23,Ze();case 23:r=e.sent,e.next=49;break;case 26:if(ee!==L){e.next=30;break}r=Ue(),e.next=49;break;case 30:if(ee!==c){e.next=36;break}return e.next=33,Te(c);case 33:r=e.sent,e.next=49;break;case 36:if(ee!==p){e.next=42;break}return e.next=39,Te(p);case 39:r=e.sent,e.next=49;break;case 42:if(ee!==h){e.next=48;break}return e.next=45,Fe();case 45:r=e.sent,e.next=49;break;case 48:ee===x?(t=void 0,n=void 0,t=J.split("/").pop(),n=J.replace(t,""),le||ce(t),fe([{layerId:t,source:{dataAccessPath:{en:n,fr:n}}}]),r=!0):ee===I&&(r=De());case 49:r&&(xe(!1),B(2));case 50:case"end":return e.stop()}var t,n}),e)})));return function(){return e.apply(this,arguments)}}(),Me=function(){xe(!0);var e=a.generateId();a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,r),xe(!1),t(!1)}),"".concat(r,"/").concat(e));var n=!0,i=le,o=J;if(ee!==c&&ee!==p||(o=a.geoUtilities.getMapServerUrl(J)),ee===b){var l=J.split("?");o=(0,d.Z)(l,1)[0]}""===le&&(n=!1,we(Ie()?Ce[s].layer:Ce[s].name));var u={geoviewLayerId:e,geoviewLayerName:{en:i,fr:i},geoviewLayerType:ee,metadataAccessPath:{en:o,fr:o},listOfLayerEntryConfig:de};ee!==h&&ee!==L&&ee!==x||(u.metadataAccessPath={en:"",fr:""}),ee===I&&delete u.metadataAccessPath,ee===E&&(u.metadataAccessPath={en:a.geoUtilities.getOGCServerUrl(J),fr:a.geoUtilities.getOGCServerUrl(J)}),n&&(ee===I&&setTimeout((function(){xe(!1),t(!1)}),3e3),u.geoviewLayerId?a.maps[r].layer.layerOrder.push(u.geoviewLayerId):void 0!==u.listOfLayerEntryConfig&&u.listOfLayerEntryConfig.forEach((function(e){e.layerId&&a.maps[r].layer.layerOrder.unshift(e.layerId)})),a.maps[r].layer.addGeoviewLayer(u))},_e=function(){B((function(e){return e-1}))},We=function(e){var r=URL.createObjectURL(e);H(e.name),Y(r);var t=e.name.split(".")[0];re(""),ie([]),ce(t),fe([])},Be=function(e){ce(e.target.value)},Ve=function(e){var t;if(e.preventDefault(),e.stopPropagation(),je(!1),null!==(t=e.dataTransfer)&&void 0!==t&&t.files){var n=e.dataTransfer.files[0],i=n.name.toUpperCase();i.endsWith(".JSON")||i.endsWith(".GEOJSON")||i.endsWith(".GPKG")?We(n):a.utilities.showError(r,Ce[s].errorFile,!1)}};function ze(e){var r=e.isFirst,t=void 0!==r&&r,n=e.isLast,a=void 0!==n&&n,i=e.handleNext;return ve?(0,v.jsx)(T,{sx:{padding:10},children:(0,v.jsx)(D,{})}):(0,v.jsxs)(R,{sx:Le.buttonGroup,children:[(0,v.jsx)(N,{variant:"contained",type:"text",onClick:i,children:a?Ce[s].finish:Ce[s].continue}),!t&&(0,v.jsx)(N,{variant:"contained",type:"text",onClick:_e,children:Ce[s].back})]})}return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,v.jsx)(U,{color:"primary",onClick:function(){return t(!1)},children:(0,v.jsx)(F,{})})}),(0,v.jsx)(A,{sx:{position:"relative",top:"-30px",zIndex:1},activeStep:W,orientation:"vertical",steps:[{stepLabel:{children:Ce[s].stepOne},stepContent:{children:(0,v.jsxs)("div",{className:"dropzone",style:{position:"relative"},onDrop:function(e){return Ve(e)},onDragOver:function(e){return(r=e).preventDefault(),void r.stopPropagation();var r},onDragEnter:function(e){return(r=e).preventDefault(),r.stopPropagation(),void(r.target!==Ee.current&&je(!0));var r},onDragLeave:function(e){return(r=e).preventDefault(),r.stopPropagation(),void(r.target===Ee.current&&je(!1));var r},children:[be&&(0,v.jsx)("div",{ref:Ee,style:{backgroundColor:"rgba(128,128,128,.95)",position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:9999,textAlign:"center",color:"black",fontSize:24},children:(0,v.jsxs)("h3",{children:[(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),Ce[s].dropzone]})}),(0,v.jsx)("div",{children:(0,v.jsx)("input",{type:"file",id:"fileUpload",style:{display:"none"},onChange:function(e){e.target.files&&We(e.target.files[0])},accept:".gpkg, .json, .geojson"})}),(0,v.jsxs)(N,{type:"text",onClick:function(){var e;return null===(e=document.getElementById("fileUpload"))||void 0===e?void 0:e.click()},className:"",children:[(0,v.jsx)(G,{}),(0,v.jsx)("span",{children:Ce[s].upload})]}),(0,v.jsx)("p",{style:{textAlign:"center"},children:(0,v.jsx)("small",{children:Ce[s].drop})}),(0,v.jsx)("p",{style:{textAlign:"center"},children:Ce[s].or}),(0,v.jsx)(k,{sx:{width:"100%"},label:Ce[s].url,variant:"standard",value:q,onChange:function(e){H(e.target.value.trim()),Y(e.target.value.trim()),re(""),ie([]),ce(""),fe([])},multiline:!0}),(0,v.jsx)("br",{}),(0,v.jsx)(ze,{isFirst:!0,handleNext:function(){var e,t,n=!0;""===J.trim()&&(n=!1,xe(!1),a.utilities.showError(r,Ce[s].errorNone,!1)),n&&(e=q.toUpperCase().split("/"),t=parseInt(e[e.length-1],10),q.toUpperCase().endsWith("MAPSERVER")||q.toUpperCase().endsWith("MAPSERVER/")?re(c):-1!==q.toUpperCase().indexOf("FEATURESERVER")||-1!==q.toUpperCase().indexOf("MAPSERVER")&&!Number.isNaN(t)?re(p):-1!==e.indexOf("WFS")?re(j):q.toUpperCase().endsWith(".JSON")||q.toUpperCase().endsWith(".GEOJSON")?re(h):q.toUpperCase().endsWith(".GPKG")?re(x):-1!==q.toUpperCase().indexOf("{Z}/{X}/{Y}")||-1!==q.toUpperCase().indexOf("{Z}/{Y}/{X}")?re(L):-1===q.indexOf("/")&&32===q.replaceAll("-","").length?re(I):-1!==q.toUpperCase().indexOf("WMS")&&re(b),B(1))}})]})}},{stepLabel:{children:Ce[s].stepTwo},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{fullWidth:!0,labelId:"service-type-label",value:ee,onChange:function(e){re(e.target.value),ie([]),fe([])},label:Ce[s].service,inputLabel:{id:"service-type-label"},menuItems:Oe.map((function(e){var r=(0,d.Z)(e,2),t=r[0];return{key:t,item:{value:t,children:r[1]}}}))}),(0,v.jsx)(ze,{handleNext:Ge})]})}},{stepLabel:{children:Ce[s].stepThree},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[0===ae.length&&(0,v.jsx)(k,{label:Ce[s].name,variant:"standard",value:le,onChange:Be}),ae.length>1&&(0,v.jsx)(Z,{fullWidth:!0,multiple:Ie(),disableClearable:!Ie(),id:"service-layer-label",options:ae,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,r){return(0,v.jsx)("span",g(g({},e),{},{children:r[1]}))},onChange:function(e,r){Ie()?(fe(r.map((function(e){return{layerId:"".concat(e[0])}}))),ce(r.map((function(e){return e[1]})).join(", "))):(fe([{layerId:"".concat(r[0])}]),ce(r[1]))},renderInput:function(e){return(0,v.jsx)(k,g(g({},e),{},{label:Ce[s].layerSelect}))}}),(0,v.jsx)("br",{}),(0,v.jsx)(ze,{isLast:!Ie(),handleNext:Ie()?function(){var e=!0;0===de.length&&(e=!1,we(Ce[s].layer)),e&&B(3)}:Me})]})}},Ie()?{stepLabel:{children:Ce[s].stepFour},stepContent:{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(k,{sx:{width:"100%"},label:Ce[s].name,variant:"standard",value:le,onChange:Be}),(0,v.jsx)("br",{}),(0,v.jsx)(ze,{isLast:!0,handleNext:Me})]})}}:null]})]})};var j=t(21226);function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var I=window;const O=function(e){var r=e.mapId,t=e.title,n=e.layerIds,a=e.setReorderLayersVisible,i=e.setMapLayers,o=I.cgpv,s=o.api,l=o.ui.elements,c=l.List,u=l.ListItem,f=l.ListItemButton,h=l.ListItemIcon,y=l.HandleIcon,x=l.ListItemText,g=l.Box,m=l.IconButton,b=l.CloseIcon,E=s.maps[r].displayLanguage,O={titleBar:{position:"relative",top:"-30px",zIndex:1},draggableList:{top:"-30px"},regularListItem:{color:"text.primary",padding:0},draggingListItem:{color:"text.primary",padding:0,background:"rgb(235,235,235,0.5)"},listItemText:{fontSize:14,noWrap:!0},handleIcon:{margin:"8px 0px"}},C=function(e){return s.maps[r].layer.geoviewLayers[e].geoviewLayerName[E]};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,v.jsx)(m,{color:"primary",onClick:function(){return a(!1)},children:(0,v.jsx)(b,{})})}),(0,v.jsx)(g,{sx:O.titleBar,children:t}),(0,v.jsx)(j.Z5,{onDragEnd:function(e){var t=e.destination,a=e.source;if(t){var o=(0,p.Z)(n),l=o.splice(a.index,1),c=(0,d.Z)(l,1)[0];o.splice(t.index,0,c),s.maps[r].layer.moveLayer(c,t.index),i(o)}},children:(0,v.jsx)(j.bK,{droppableId:"droppable",children:function(e){return(0,v.jsxs)(c,L(L({sx:O.draggableList},e.droppableProps),{},{innerref:e.innerRef,children:[n.map((function(e,r){return(0,v.jsx)(j._l,{draggableId:e,index:r,children:function(r,t){return(0,v.jsx)(u,L(L(L({innerref:r.innerRef,sx:t.isDragging?O.draggingListItem:O.regularListItem},r.draggableProps),r.dragHandleProps),{},{children:(0,v.jsxs)(f,{children:[(0,v.jsx)(h,{children:(0,v.jsx)(y,{sx:O.handleIcon})}),(0,v.jsx)(x,{primaryTypographyProps:O.listItemText,primary:C(e)})]})}))}},e)})),e.placeholder]}))}})})]})};var C=window;const S=function(e){var r=e.mapId,t=e.buttonPanel,n=C.cgpv,a=n.api,i=n.ui,o=n.react,s=o.useState,l=o.useEffect,c=s(!1),f=(0,d.Z)(c,2),h=f[0],y=f[1],x=s(!1),g=(0,d.Z)(x,2),m=g[0],j=g[1],E=s([]),L=(0,d.Z)(E,2),I=L[0],S=L[1],P=s(),w=(0,d.Z)(P,2),A=w[0],k=w[1],N=s(null),R=(0,d.Z)(N,2),Z=R[0],D=R[1],T=s(!1),U=(0,d.Z)(T,2),F=U[0],G=U[1],M=s(!1),_=(0,d.Z)(M,2),W=_[0],B=_[1],V=i.elements,z=V.IconButton,J=V.AddIcon,Y=V.Box,K=V.ExpandMoreIcon,X=V.ExpandLessIcon,q=V.VisibilityIcon,H=V.VisibilityOffIcon,Q=V.Menu,$=V.MenuItem,ee=V.MenuIcon,re=V.ListItemIcon,te=V.ListItemText,ne=V.ReorderIcon,ae=a.maps[r].getDisplayLanguage(),ie=(0,u.ZQJ)({en:{addLayer:"Add Layer",expandAll:"Expand Groups",collapseAll:"Collapse Groups",showAll:"Show All",hideAll:"Hide All",reorderLayers:"Reorder Layers"},fr:{addLayer:"Ajouter Couche",expandAll:"Élargir les groupes",collapseAll:"Réduire les groupes",showAll:"Montrer tout",hideAll:"Cacher tout",reorderLayers:"Réorganiser les couches"}}),oe={mainContainer:{display:"flex",flexDirection:"column",height:"inherit"},topControls:{display:"flex",flexDirection:"row",justifyContent:"space-between"},addLayerSection:{display:"flex",alignItems:"center",marginTop:"auto",justifyContent:"end"}},se=Boolean(Z),le=function(){var e;void 0!==(null===(e=a.maps[r].layer)||void 0===e?void 0:e.layerOrder)&&S((0,p.Z)(a.maps[r].layer.layerOrder).reverse())};l((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,le,r),a.event.on(a.eventNames.GET_LEGENDS.LEGENDS_LAYERSET_UPDATED,le,"".concat(r,"/LegendsLayerSet")),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,r,le),a.event.off(a.eventNames.GET_LEGENDS.LEGENDS_LAYERSET_UPDATED,r,le)}}),[]),l((function(){k(a.maps[r].legend.createLegend({layerIds:I,isRemoveable:!0,canSetOpacity:!0,canZoomTo:!0}))}),[I]),l((function(){var e=function(){return y(!1)};return a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,e,"".concat(r,"/").concat(t.buttonPanelId)),function(){a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,"".concat(r,"/").concat(t.buttonPanelId),e)}}),[a,t.buttonPanelId,r]),l((function(){k(a.maps[r].legend.createLegend({layerIds:I,isRemoveable:!0,canSetOpacity:!0,expandAll:F,canZoomTo:!0}))}),[F]),l((function(){k(a.maps[r].legend.createLegend({layerIds:I,isRemoveable:!0,canSetOpacity:!0,hideAll:W,canZoomTo:!0}))}),[W]);var ce=function(){D(null)},ue=function(e){G(e),ce()},pe=function(e){B(!e),ce()};return l((function(){if(m){var e=C.scrollX,r=C.scrollY;C.onscroll=function(){C.scrollTo(e,r)}}else C.onscroll=function(){}}),[m]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(Q,{anchorEl:Z,open:se,onClose:ce,children:[(0,v.jsxs)($,{onClick:function(){return ue(!0)},children:[(0,v.jsx)(re,{children:(0,v.jsx)(K,{})}),(0,v.jsx)(te,{children:ie[ae].expandAll})]}),(0,v.jsxs)($,{onClick:function(){return ue(!1)},children:[(0,v.jsx)(re,{children:(0,v.jsx)(X,{})}),(0,v.jsx)(te,{children:ie[ae].collapseAll})]}),(0,v.jsxs)($,{onClick:function(){return pe(!0)},children:[(0,v.jsx)(re,{children:(0,v.jsx)(q,{})}),(0,v.jsx)(te,{children:ie[ae].showAll})]}),(0,v.jsxs)($,{onClick:function(){return pe(!1)},children:[(0,v.jsx)(re,{children:(0,v.jsx)(H,{})}),(0,v.jsx)(te,{children:ie[ae].hideAll})]}),(0,v.jsxs)($,{onClick:function(){return j(!0),void ce()},children:[(0,v.jsx)(re,{children:(0,v.jsx)(ne,{})}),(0,v.jsx)(te,{children:ie[ae].reorderLayers})]})]}),(0,v.jsxs)(Y,{sx:oe.mainContainer,children:[h&&(0,v.jsx)(b,{mapId:r,setAddLayerVisible:y}),m&&(0,v.jsx)(O,{mapId:r,title:ie[ae].reorderLayers,layerIds:I,setMapLayers:S,setReorderLayersVisible:j}),(0,v.jsxs)(Y,{sx:oe.topControls,style:{display:h||m?"none":"flex"},children:[(0,v.jsx)("div",{children:(0,v.jsx)(z,{color:"primary",onClick:function(e){D(e.currentTarget)},children:(0,v.jsx)(ee,{})})}),(0,v.jsxs)(Y,{onClick:function(){y((function(e){return!e}))},children:[ie[ae].addLayer,(0,v.jsx)(z,{children:(0,v.jsx)(J,{})})]})]}),(0,v.jsx)("div",{style:{display:h||m?"none":"block"},children:A})]})]})},P=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Layers/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"reorderable":{"type":"boolean","default":true,"description":"Specifies if the items in the legend can be reordered."},"allowImport":{"type":"boolean","default":true,"description":"Specifies if the user-added layers are allowed."},"isOpen":{"type":"object","description":"Specifies whether the legend is opened by default on initial loading of the map for small, medium, and large viewports.","properties":{"large":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for large viewports."},"medium":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for medium viewports."},"small":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for small viewports."}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),w=JSON.parse('{"reorderable":true,"allowImport":true,"isOpen":{"small":false,"medium":false,"large":false},"suportedLanguages":["en","fr"]}');function A(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,l.Z)(e);if(r){var a=(0,l.Z)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return(0,s.Z)(this,t)}}var k=window,N=function(e){(0,o.Z)(t,e);var r=A(t);function t(e,a){var o;return(0,n.Z)(this,t),o=r.call(this,e,a),(0,c.Z)((0,i.Z)(o),"schema",(function(){return P})),(0,c.Z)((0,i.Z)(o),"defaultConfig",(function(){return(0,u.ZQJ)(w)})),(0,c.Z)((0,i.Z)(o),"translations",(0,u.ZQJ)({en:{layersPanel:"Layers"},fr:{layersPanel:"Couches"}})),o.buttonPanel=null,o}return(0,a.Z)(t,[{key:"added",value:function(){var e,r,t,n=this.pluginProps.mapId,a=k.cgpv,i=a.api,o=a.ui.elements.LayersOutlinedIcon,s=i.maps[n].getDisplayLanguage();t=null===(e=this.configObj)||void 0===e||null===(e=e.isOpen)||void 0===e?void 0:e.large;var l={id:"layersPanelButton",tooltip:this.translations[s].layersPanel,tooltipPlacement:"right",children:(0,v.jsx)(o,{}),visible:!0},c={title:this.translations[s].layersPanel,icon:'<i class="material-icons">layers</i>',width:350,status:t};this.buttonPanel=i.maps[n].appBarButtons.createAppbarPanel(l,c,null),null===(r=this.buttonPanel)||void 0===r||null===(r=r.panel)||void 0===r||r.changeContent((0,v.jsx)(S,{buttonPanel:this.buttonPanel,mapId:n}))}},{key:"removed",value:function(){var e=this.pluginProps.mapId,r=k.cgpv.api;this.buttonPanel&&r.maps[e].appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId)}}]),t}(u.Vw$);k.plugins=k.plugins||{},k.plugins["layers-panel"]=(0,u.RFZ)(N)}},e=>{var r;r=16e3,e(e.s=r)}]);
//# sourceMappingURL=geoview-layers-panel.js.map
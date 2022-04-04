"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[763],{7494:(e,t,n)=>{var r=n(6482),a=n(3915),i=n(3744),o=n(1565),c=n(8114),s=n(1871),l=n.n(s),u=n(5202);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=window;const v=function(e){var t=e.mapId,n=e.setAddLayerVisible,r=f.cgpv,a=r.api,i=r.react,s=r.ui,p=r.mui,v=a.layerTypes,y=v.ESRI_DYNAMIC,m=v.ESRI_FEATURE,h=v.GEOJSON,g=v.WMS,x=v.WFS,b=v.OGC_FEATURE,j=v.XYZ_TILES,O=i.useState,S=s.elements,w=S.Button,E=S.ButtonGroup,N=p.Stepper,C=p.Step,P=p.StepLabel,k=p.StepContent,L=p.TextField,Z=p.Typography,I=p.InputLabel,T=p.FormControl,A=p.Select,G=p.MenuItem,D=p.Autocomplete,R=O(0),B=(0,o.Z)(R,2),_=B[0],F=B[1],W=O(""),M=(0,o.Z)(W,2),V=M[0],U=M[1],J=O(""),z=(0,o.Z)(J,2),Y=z[0],X=z[1],q=O([]),K=(0,o.Z)(q,2),H=K[0],Q=K[1],$=O(""),ee=(0,o.Z)($,2),te=ee[0],ne=ee[1],re=O(""),ae=(0,o.Z)(re,2),ie=ae[0],oe=ae[1],ce=s.makeStyles((function(){return{buttonGroup:{paddingTop:12,gap:6}}}))(),se=function(){return Y===y},le=[[y,"ESRI Dynamic Service"],[m,"ESRI Feature Service"],[h,"GeoJSON"],[g,"OGC Web Map Service (WMS)"],[x,"OGC Web Feature Service (WFS)"],[b,"OGC API Features"],[j,"XYZ Raster Tiles"]],ue=function(e){switch(e){case y:return{err:"ESRI Map",capability:"Map"};case m:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},pe=function(e){a.event.emit(a.eventNames.EVENT_SNACKBAR_OPEN,t,{message:{type:"string",value:"".concat(e," cannot be empty")}})},de=function(e){a.event.emit(a.eventNames.EVENT_SNACKBAR_OPEN,t,{message:{type:"string",value:"URL is not a valid ".concat(e," Server")}})},fe=function(e,n,r){a.event.emit("snackbar/open",t,{message:{type:"string",value:"".concat(e," does not support current map projection ").concat(n,", only ").concat(r.join(", "))}})},ve=function(){var e=(0,c.Z)(l().mark((function e(){var n,r,i,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.map(t).projection.getCRS().code,r=[],e.prev=2,e.next=5,a.geoUtilities.getWMSServiceMetadata(V,"");case 5:if(i=e.sent,(r=i.Capability.Layer.CRS).includes(n)){e.next=9;break}throw new Error("proj");case 9:1===(o=i.Capability.Layer.Layer.map((function(e){return[e.Name,e.Title]}))).length?(ne(o[0][1]),oe(o[0][0])):Q(o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(2),"proj"===e.t0?fe("WMS",n,r):de("WMS"),e.abrupt("return",!1);case 17:return e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=(0,c.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(V);case 3:t=e.sent,1===(n=t.FeatureTypeList.FeatureType.map((function(e){return[e.Name["#text"].split(":")[1],e.Title["#text"]]}))).length?(ne(n[0][1]),oe(n[0][0])):Q(n),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),de("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,c.Z)(l().mark((function e(){var t,n,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["collections","links"],e.prev=1,e.next=4,fetch("".concat(V,"/collections?f=json"));case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,t.every((function(e){return Object.keys(r).includes(e)}))){e.next=11;break}throw new Error("err");case 11:1===(a=r.collections.map((function(e){return[e.id,e.title]}))).length?(ne(a[0][1]),oe(a[0][0])):Q(a),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(1),de("OGC API Feature"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=(0,c.Z)(l().mark((function e(t){var n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(V);case 3:if(!(n=e.sent).capabilities.includes(ue(t).capability)){e.next=8;break}"layers"in n?1===(r=n.layers.map((function(e){var t=e.id,n=e.name;return[String(t),n]}))).length?(ne(r[0][1]),oe(r[0][0])):Q(r):(ne(n.name),oe(String(n.id))),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),de(ue(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),ge=function(){for(var e=a.map(t).projection.getCRS().code,n=["{x}","{y}","{z}"],r=0;r<n.length;r+=1)if(!V.includes(n[r]))return de("XYZ Tile"),!1;return"EPSG:3857"===e||(fe("XYZ Tiles",e,["EPSG:3857"]),!1)},xe=function(){var e=(0,c.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(V);case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,["FeatureCollection","Feature"].includes(n.type)){e.next=9;break}throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),de("GeoJSON"),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=(0,c.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!0,""===Y&&(t=!1,pe("Service Type")),Y!==g){e.next=6;break}return e.next=5,ve();case 5:t=e.sent;case 6:if(Y!==x){e.next=10;break}return e.next=9,ye();case 9:t=e.sent;case 10:if(Y!==b){e.next=16;break}return e.next=13,me();case 13:t=e.sent,e.next=36;break;case 16:if(Y!==j){e.next=20;break}t=ge(),e.next=36;break;case 20:if(Y!==y){e.next=26;break}return e.next=23,he(y);case 23:t=e.sent,e.next=36;break;case 26:if(Y!==m){e.next=32;break}return e.next=29,he(m);case 29:t=e.sent,e.next=36;break;case 32:if(Y!==h){e.next=36;break}return e.next=35,xe();case 35:t=e.sent;case 36:t&&F(2);case 37:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=!0,r=te,i=V,o=ie;Array.isArray(o)&&(o=o.join(",")),Y===y?i=a.geoUtilities.getMapServerUrl(V):Y===m&&(i="".concat(a.geoUtilities.getMapServerUrl(V),"/").concat(ie),o=""),""===te&&(e=!1,pe(se()?"Name":"Layer"));var c={name:r,type:Y,url:i,entries:o};e&&(a.map(t).layer.addLayer(c),n(!1))},Oe=function(){F((function(e){return e-1}))},Se=function(e){ne(e.target.value)};function we(e){var t=e.isFirst,n=void 0!==t&&t,r=e.isLast,a=void 0!==r&&r,i=e.handleNext;return(0,u.jsxs)(E,{className:ce.buttonGroup,children:[(0,u.jsx)(w,{variant:"contained",type:"text",onClick:i,children:a?"Finish":"Continue"}),!n&&(0,u.jsx)(w,{variant:"contained",type:"text",onClick:Oe,children:"Back"})]})}return(0,u.jsxs)(N,{activeStep:_,orientation:"vertical",children:[(0,u.jsxs)(C,{children:[(0,u.jsx)(P,{children:"Enter URL"}),(0,u.jsxs)(k,{children:[(0,u.jsx)(L,{sx:{width:"100%"},label:"URL",variant:"standard",value:V,onChange:function(e){U(e.target.value),X(""),Q([]),ne(""),oe("")}}),(0,u.jsx)("br",{}),(0,u.jsx)(we,{isFirst:!0,handleNext:function(){var e=!0;""===V.trim()&&(e=!1,pe("URL")),e&&F(1)}})]})]}),(0,u.jsxs)(C,{children:[(0,u.jsx)(P,{children:"Select format"}),(0,u.jsxs)(k,{children:[(0,u.jsxs)(T,{fullWidth:!0,children:[(0,u.jsx)(I,{id:"service-type-label",children:"Service Type"}),(0,u.jsx)(A,{labelId:"service-type-label",value:Y,onChange:function(e){X(e.target.value),Q([]),ne(""),oe("")},label:"Service Type",children:le.map((function(e){var t=(0,o.Z)(e,2),n=t[0],r=t[1];return(0,u.jsx)(G,{value:n,children:r},n)}))})]}),(0,u.jsx)(we,{handleNext:be})]})]}),(0,u.jsxs)(C,{children:[(0,u.jsx)(P,{children:"Configure layer"}),(0,u.jsxs)(k,{children:[0===H.length&&""===ie&&(0,u.jsx)(L,{label:"Name",variant:"standard",value:te,onChange:Se}),0===H.length&&""!==ie&&(0,u.jsx)(Z,{children:te}),H.length>1&&(0,u.jsx)(T,{fullWidth:!0,children:(0,u.jsx)(D,{multiple:se(),disableCloseOnSelect:se(),disableClearable:!se(),id:"service-layer-label",options:H,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,u.jsx)("span",d(d({},e),{},{children:t[1]}))},onChange:function(e,t){se()?(oe(t.map((function(e){return e[0]}))),ne(t.map((function(e){return e[1]})).join(", "))):(oe(t[0]),ne(t[1]))},renderInput:function(e){return(0,u.jsx)(L,d(d({},e),{},{label:"Select Layer"}))}})}),(0,u.jsx)("br",{}),(0,u.jsx)(we,{isLast:!se(),handleNext:se()?function(){var e=!0;0===ie.length&&(e=!1,pe("Layer")),e&&F(3)}:je})]})]}),se()&&(0,u.jsxs)(C,{children:[(0,u.jsx)(P,{children:"Enter Name"}),(0,u.jsxs)(k,{children:[(0,u.jsx)(L,{sx:{width:"100%"},label:"Name",variant:"standard",value:te,onChange:Se}),(0,u.jsx)("br",{}),(0,u.jsx)(we,{isLast:!0,handleNext:je})]})]})]})};var y=n(3386);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=window;const x=function(e){var t=e.mapId,n=e.layers,r=e.language,a=g.cgpv,s=a.mui,p=a.ui,d=a.react,f=a.api,v=a.leaflet,m=d.useState,x=d.useEffect,b=m(""),j=(0,o.Z)(b,2),O=j[0],S=j[1],w=m({}),E=(0,o.Z)(w,2),N=E[0],C=E[1],P=m({}),k=(0,o.Z)(P,2),L=k[0],Z=k[1],I=m(v.polygon([])),T=(0,o.Z)(I,2),A=T[0],G=T[1],D=m({}),R=(0,o.Z)(D,2),B=R[0],_=R[1],F=m({}),W=(0,o.Z)(F,2),M=W[0],V=W[1],U=m({}),J=(0,o.Z)(U,2),z=J[0],Y=J[1],X=s.Slider,q=s.Tooltip,K=s.Checkbox,H=p.elements.Button,Q={"en-CA":{bounds:"Toggle Bounds",zoom:"Zoom to Layer",remove:"Remove Layer",opacity:"Adjust Opacity",visibility:"Toggle Visibility"},"fr-CA":{bounds:"Basculer la limite",zoom:"Zoom sur la Couche",remove:"Supprimer la Couche",opacity:"Ajuster l'opacité",visibility:"Basculer la Visibilité"}},$=p.makeStyles((function(){return{layersContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},layerItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3,border:"none",width:"100%"},layerParentText:{fontSize:"16px",fontWeight:"bold"},layerCountTextContainer:{display:"flex",alignItems:"center",width:"100%",height:"32px"},layerItemText:{fontSize:"14px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",marginLeft:"10px",display:"flex",alignItems:"center",gap:6},flexGroup:{display:"flex",justifyContent:"flex-end",alignItems:"baseline",gap:12},flexGroupButton:{height:38,minHeight:38,width:25,minWidth:25,"& > div":{textAlign:"center"}},slider:{width:"100%",paddingLeft:20,paddingRight:20},legendSubLayerGroup:{display:"flex",justifyContent:"space-between"}}}));x((function(){var e=Object.values(n).reduce((function(e,t){return h(h({},e),{},(0,i.Z)({},t.id,[]))}),{});C((function(t){return h(h({},e),t)})),Object.values(n).forEach(function(){var e=(0,c.Z)(l().mark((function e(t){var n,r,a,o,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.getLegendGraphic){e.next=9;break}return e.next=3,t.getLegendGraphic();case 3:n=e.sent,r=t.url.includes("/MapServer")?t.name:"",a=[{name:r,dataUrl:n}],C((function(e){return h(h({},e),{},(0,i.Z)({},t.id,a))})),e.next=15;break;case 9:if(!t.getLegendJson){e.next=15;break}return e.next=12,t.getLegendJson();case 12:o=e.sent,c=Array.isArray(o)?o:[o],C((function(e){return h(h({},e),{},(0,i.Z)({},t.id,c))}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var t=Object.values(n).reduce((function(e,t){return h(h({},e),{},(0,i.Z)({},t.id,v.latLngBounds([])))}),{});Z((function(e){return h(h({},t),e)})),Object.values(n).forEach(function(){var e=(0,c.Z)(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBounds();case 2:n=e.sent,Z((function(e){return h(h({},e),{},(0,i.Z)({},t.id,n))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var r=Object.values(n).reduce((function(e,t){return h(h({},e),{},(0,i.Z)({},t.id,100))}),{});_((function(e){return h(h({},r),e)}));var a=Object.values(n).reduce((function(e,t){return h(h({},e),{},(0,i.Z)({},t.id,!0))}),{});V((function(e){return h(h({},a),e)}));var o=Object.values(n).reduce((function(e,t){return h(h({},e),{},(0,i.Z)({},t.id,t.entries))}),{});Y((function(e){return h(h({},o),e)}))}),[n,v]);var ee=$(),te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=e.getEast()-e.getWest(),r=[];r.push(e.getSouthWest());for(var a=1;a<=t;a+=1){var i=n*(a/(t+1)),o=e.getWest()+i;r.push({lat:e.getSouth(),lng:o})}r.push(e.getSouthEast()),r.push(e.getNorthEast());for(var c=1;c<=t;c+=1){var s=n*(c/(t+1)),l=e.getEast()-s;r.push({lat:e.getNorth(),lng:l})}return r.push(e.getNorthWest()),v.polygon(r,{color:"red"})};return(0,u.jsx)("div",{className:ee.layersContainer,children:Object.values(n).map((function(e){return(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{type:"button",className:ee.layerItem,onClick:function(){return t=e.id,void S(t!==O?t:"");var t},children:(0,u.jsx)("div",{className:ee.layerCountTextContainer,children:(0,u.jsx)("div",{className:ee.layerItemText,title:e.name,children:e.name})})}),O===e.id&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:ee.flexGroup,children:[(0,u.jsx)(H,{className:ee.flexGroupButton,tooltip:Q[r].zoom,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">zoom_in</i>',onClick:function(){return function(e){return f.map(t).fitBounds(L[e.id])}(e)}}),(0,u.jsx)(H,{className:ee.flexGroupButton,tooltip:Q[r].bounds,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">crop_free</i>',onClick:function(){return function(e){var n=te(L[e.id]);JSON.stringify(n.toGeoJSON())===JSON.stringify(A.toGeoJSON())?(A.remove(),G(v.polygon([]))):(A.remove(),n.addTo(f.map(t).map),G(n))}(e)}}),(0,u.jsx)(H,{className:ee.flexGroupButton,tooltip:Q[r].remove,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">remove</i>',onClick:function(){return function(e){var n=te(L[e.id]);JSON.stringify(n.toGeoJSON())===JSON.stringify(A.toGeoJSON())&&(A.remove(),G(v.polygon([]))),f.map(t).layer.removeLayer(e)}(e)}})]}),(0,u.jsxs)("div",{className:ee.flexGroup,children:[(0,u.jsx)(q,{title:Q[r].opacity,children:(0,u.jsx)("i",{className:"material-icons",children:"contrast"})}),(0,u.jsx)("div",{className:ee.slider,children:(0,u.jsx)(X,{size:"small",value:B[e.id],valueLabelDisplay:"auto",onChange:function(t){return function(e,t){_((function(n){return h(h({},n),{},(0,i.Z)({},t.id,e))}));var n=M[t.id]?e/100:0;t.setOpacity(n)}(t.target.value,e)}})}),(0,u.jsx)(q,{title:Q[r].visibility,children:(0,u.jsx)(K,{checked:M[e.id],onChange:function(t){return function(e,t){V((function(n){return h(h({},n),{},(0,i.Z)({},t.id,e))}));var n=e?B[t.id]/100:0;t.setOpacity(n),e&&t.setEntries&&(Y((function(e){return h(h({},e),{},(0,i.Z)({},t.id,t.entries))})),t.setEntries(t.entries)),!e&&t.setEntries&&(Y((function(e){return h(h({},e),{},(0,i.Z)({},t.id,[]))})),t.setEntries([]))}(t.target.checked,e)}})})]}),N[e.id].map((function(t,n){var a,o,c,s,l,p,d,f;return(0,u.jsxs)("div",{children:[t.legend&&(0,u.jsxs)("div",{className:ee.legendSubLayerGroup,children:[(0,u.jsx)("div",{className:ee.layerItemText,title:t.layerName,children:t.layerName}),(0,u.jsx)(q,{title:Q[r].visibility,children:(0,u.jsx)(K,{checked:z[e.id].includes(t.layerId),onChange:function(n){return r=n.target.checked,a=e,o=t.layerId,c=z[a.id],s=r?(0,y.Z)(new Set([].concat((0,y.Z)(c),[o]))):c.filter((function(e){return e!==o})),0===c.length&&(V((function(e){return h(h({},e),{},(0,i.Z)({},a.id,!0))})),a.setOpacity(B[a.id]/100)),0===s.length&&(V((function(e){return h(h({},e),{},(0,i.Z)({},a.id,!1))})),a.setOpacity(0)),Y((function(e){return h(h({},e),{},(0,i.Z)({},a.id,s))})),void a.setEntries(s);var r,a,o,c,s}})})]}),"simple"===(null===(a=t.drawingInfo)||void 0===a?void 0:a.renderer.type)&&(null===(o=t.drawingInfo)||void 0===o?void 0:o.renderer.symbol.imageData)&&(0,u.jsxs)("div",{className:ee.layerItemText,children:[(0,u.jsx)("img",{alt:"Layer Legend",src:"data:".concat(null===(c=t.drawingInfo)||void 0===c?void 0:c.renderer.symbol.contentType,";base64,").concat(null===(s=t.drawingInfo)||void 0===s?void 0:s.renderer.symbol.imageData)}),(null===(l=t.drawingInfo)||void 0===l?void 0:l.renderer.label)||t.name]}),"uniqueValue"===(null===(p=t.drawingInfo)||void 0===p?void 0:p.renderer.type)&&(null===(d=t.drawingInfo)||void 0===d?void 0:d.renderer.uniqueValueInfos[0].symbol.imageData)&&(null===(f=t.drawingInfo)||void 0===f?void 0:f.renderer.uniqueValueInfos.map((function(e,t){return(0,u.jsxs)("div",{className:ee.layerItemText,children:[(0,u.jsx)("img",{alt:"Layer Legend",src:"data:".concat(e.symbol.contentType,";base64,").concat(e.symbol.imageData)}),e.label]},t)}))),t.legend&&t.legend.map((function(e,n){return(0,u.jsxs)("div",{className:ee.layerItemText,children:[(0,u.jsx)("img",{alt:"Layer Legend",src:"data:".concat(e.contentType,";base64,").concat(e.imageData)}),e.label||t.layerName]},n)})),t.dataUrl&&(0,u.jsxs)("div",{className:ee.layerItemText,children:[(0,u.jsx)("img",{alt:"Layer Legend",src:t.dataUrl}),t.name]})]},n)}))]})]},e.id)}))})};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=window;const S=function(e){var t=e.mapId,n=O.cgpv,r=n.api,a=n.react,i=n.ui,c=a.useState,s=a.useEffect,l=c(!1),p=(0,o.Z)(l,2),d=p[0],f=p[1],y=c({}),m=(0,o.Z)(y,2),h=m[0],g=m[1],b=i.elements.Button,S=r.map(t).language,w=i.makeStyles((function(){return{mainContainer:{display:"flex",flexDirection:"row"},addLayerButton:{width:50,minWidth:50,"& > div":{textAlign:"center"}}}}))();return s((function(){return g((function(){return j({},r.map(t).layer.layers)})),r.event.on(r.eventNames.EVENT_LAYER_ADDED,(function(){return g((function(){return j({},r.map(t).layer.layers)}))}),t),r.event.on(r.eventNames.EVENT_REMOVE_LAYER,(function(){return g((function(){return j({},r.map(t).layer.layers)}))}),t),r.event.on(r.eventNames.EVENT_PANEL_CLOSE,(function(){f(!1)}),t),function(){r.event.off(r.eventNames.EVENT_LAYER_ADDED,t),r.event.off(r.eventNames.EVENT_REMOVE_LAYER,t),r.event.off(r.eventNames.EVENT_PANEL_CLOSE,t)}}),[r,t]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:w.mainContainer,children:(0,u.jsx)(b,{className:w.addLayerButton,tooltip:{"en-CA":{addLayer:"Add Layer"},"fr-CA":{addLayer:"Ajouter Couche"}}[S].addLayer,tooltipPlacement:"right",variant:"contained",type:"icon",icon:'<i class="material-icons">add</i>',onClick:function(){return f((function(e){return!e}))}})}),d&&(0,u.jsx)(v,{mapId:t,setAddLayerVisible:f}),(0,u.jsx)("div",{style:{display:d?"none":"inherit"},children:(0,u.jsx)(x,{mapId:t,layers:h,language:S})})]})};var w=window,E=function(){function e(t,n){var a=this;(0,r.Z)(this,e),(0,i.Z)(this,"translations",{"en-CA":{layersPanel:"Layers"},"fr-CA":{layersPanel:"Couches"}}),(0,i.Z)(this,"added",(function(){var e,t,n=a.LayersPanelPluginProps.mapId,r=w.cgpv.api,i=r.map(n).language,o={id:"layersPanelButton",tooltip:a.translations[i].layersPanel,tooltipPlacement:"right",icon:'<i class="material-icons">layers</i>',type:"textWithIcon"},c={title:a.translations[i].layersPanel,icon:'<i class="material-icons">layers</i>',width:200};a.buttonPanel=r.map(n).appBarButtons.createAppbarPanel(o,c,null),null===(e=a.buttonPanel)||void 0===e||null===(t=e.panel)||void 0===t||t.changeContent((0,u.jsx)(S,{buttonPanel:a.buttonPanel,mapId:n}))})),this.id=t,this.LayersPanelPluginProps=n,this.buttonPanel=null}return(0,a.Z)(e,[{key:"removed",value:function(){var e=this.LayersPanelPluginProps.mapId,t=w.cgpv.api;this.buttonPanel&&t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.id)}}]),e}();w.plugins=w.plugins||{},w.plugins.layersPanel=E}},e=>{var t;t=7494,e(e.s=t)}]);
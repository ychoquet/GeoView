"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[763],{7494:(e,t,n)=>{var r=n(6482),a=n(3915),i=n(632),o=n(6712),c=n(2303),s=n(8792),u=n(3744),l=n(3547),p=n(1565),d=n(8114),f=n(1871),v=n.n(f),y=n(5202);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=window;const g=function(e){var t=e.mapId,n=e.setAddLayerVisible,r=x.cgpv,a=r.api,i=r.react,o=r.ui,c=r.mui,s=a.layerTypes,u=s.ESRI_DYNAMIC,f=s.ESRI_FEATURE,m=s.GEOJSON,g=s.WMS,b=s.WFS,j=s.OGC_FEATURE,O=s.XYZ_TILES,S=i.useState,w=o.elements,E=w.Button,N=w.ButtonGroup,C=c.Stepper,P=c.Step,k=c.StepLabel,Z=c.StepContent,L=c.TextField,I=c.Typography,R=c.InputLabel,T=c.FormControl,A=c.Select,F=c.MenuItem,D=c.Autocomplete,G=S(0),B=(0,p.Z)(G,2),_=B[0],W=B[1],M=S(""),V=(0,p.Z)(M,2),U=V[0],J=V[1],z=S(""),Y=(0,p.Z)(z,2),X=Y[0],q=Y[1],K=S([]),H=(0,p.Z)(K,2),Q=H[0],$=H[1],ee=S(""),te=(0,p.Z)(ee,2),ne=te[0],re=te[1],ae=S(""),ie=(0,p.Z)(ae,2),oe=ie[0],ce=ie[1],se=o.makeStyles((function(){return{buttonGroup:{paddingTop:12,gap:6}}}))(),ue=function(){return X===u},le=[[u,"ESRI Dynamic Service"],[f,"ESRI Feature Service"],[m,"GeoJSON"],[g,"OGC Web Map Service (WMS)"],[b,"OGC Web Feature Service (WFS)"],[j,"OGC API Features"],[O,"XYZ Raster Tiles"]],pe=function(e){switch(e){case u:return{err:"ESRI Map",capability:"Map"};case f:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},de=function(e){a.event.emit(a.eventNames.EVENT_SNACKBAR_OPEN,t,{message:{type:"string",value:"".concat(e," cannot be empty")}})},fe=function(e){a.event.emit(a.eventNames.EVENT_SNACKBAR_OPEN,t,{message:{type:"string",value:"URL is not a valid ".concat(e," Server")}})},ve=function(e,n,r){a.event.emit("snackbar/open",t,{message:{type:"string",value:"".concat(e," does not support current map projection ").concat(n,", only ").concat(r.join(", "))}})},ye=function(){var e=(0,d.Z)(v().mark((function e(){var n,r,i,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.map(t).projection.getCRS().code,r=[],e.prev=2,e.next=5,a.geoUtilities.getWMSServiceMetadata(U,"");case 5:if(i=e.sent,(r=i.Capability.Layer.CRS).includes(n)){e.next=9;break}throw new Error("proj");case 9:1===(o=i.Capability.Layer.Layer.map((function(e){return[e.Name,e.Title]}))).length?(re((0,l.RF)(o[0][1])),ce((0,l.RF)(o[0][0]))):$(o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(2),"proj"===e.t0?ve("WMS",n,r):fe("WMS"),e.abrupt("return",!1);case 17:return e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,d.Z)(v().mark((function e(){var t,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(U);case 3:t=e.sent,1===(n=t.FeatureTypeList.FeatureType.map((function(e){return[(0,l.RF)(e.Name["#text"].split(":")[1]),e.Title["#text"]]}))).length?(re((0,l.RF)(n[0][1])),ce((0,l.RF)(n[0][0]))):$(n),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),fe("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=(0,d.Z)(v().mark((function e(){var t,n,r,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["collections","links"],e.prev=1,e.next=4,fetch("".concat(U,"/collections?f=json"));case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,t.every((function(e){return Object.keys(r).includes(e)}))){e.next=11;break}throw new Error("err");case 11:1===(a=r.collections.map((function(e){return[e.id,e.title]}))).length?(re((0,l.RF)(a[0][1])),ce((0,l.RF)(a[0][0]))):$(a),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(1),fe("OGC API Feature"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=(0,d.Z)(v().mark((function e(t){var n,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(U);case 3:if(!(n=e.sent).capabilities.includes(pe(t).capability)){e.next=8;break}"layers"in n?1===(r=n.layers.map((function(e){return[e.id,e.name]}))).length?(re((0,l.RF)(r[0][1])),ce((0,l.RF)(r[0][0]))):$(r):(re(n.name),ce(String(n.id))),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),fe(pe(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),ge=function(){for(var e=a.map(t).projection.getCRS().code,n=["{x}","{y}","{z}"],r=0;r<n.length;r+=1)if(!U.includes(n[r]))return fe("XYZ Tile"),!1;return"EPSG:3857"===e||(ve("XYZ Tiles",e,["EPSG:3857"]),!1)},be=function(){var e=(0,d.Z)(v().mark((function e(){var t,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(U);case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,["FeatureCollection","Feature"].includes(n.type)){e.next=9;break}throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),fe("GeoJSON"),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=(0,d.Z)(v().mark((function e(){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!0,""===X&&(t=!1,de("Service Type")),X!==g){e.next=6;break}return e.next=5,ye();case 5:t=e.sent;case 6:if(X!==b){e.next=10;break}return e.next=9,me();case 9:t=e.sent;case 10:if(X!==j){e.next=16;break}return e.next=13,he();case 13:t=e.sent,e.next=36;break;case 16:if(X!==O){e.next=20;break}t=ge(),e.next=36;break;case 20:if(X!==u){e.next=26;break}return e.next=23,xe(u);case 23:t=e.sent,e.next=36;break;case 26:if(X!==f){e.next=32;break}return e.next=29,xe(f);case 29:t=e.sent,e.next=36;break;case 32:if(X!==m){e.next=36;break}return e.next=35,be();case 35:t=e.sent;case 36:t&&W(2);case 37:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=!0,r=ne,i=U,o=oe;Array.isArray(o)&&(o=o.join(",")),X===u?i=a.geoUtilities.getMapServerUrl(U):X===f&&(i="".concat(a.geoUtilities.getMapServerUrl(U),"/").concat(oe),o=""),""===ne&&(e=!1,de(ue()?"Name":"Layer"));var c={name:r,type:X,url:i,entries:o};e&&(a.map(t).layer.addLayer(c),n(!1))},Se=function(){W((function(e){return e-1}))},we=function(e){re(e.target.value)};function Ee(e){var t=e.isFirst,n=void 0!==t&&t,r=e.isLast,a=void 0!==r&&r,i=e.handleNext;return(0,y.jsxs)(N,{className:se.buttonGroup,children:[(0,y.jsx)(E,{variant:"contained",type:"text",onClick:i,children:a?"Finish":"Continue"}),!n&&(0,y.jsx)(E,{variant:"contained",type:"text",onClick:Se,children:"Back"})]})}return(0,y.jsxs)(C,{activeStep:_,orientation:"vertical",children:[(0,y.jsxs)(P,{children:[(0,y.jsx)(k,{children:"Enter URL"}),(0,y.jsxs)(Z,{children:[(0,y.jsx)(L,{sx:{width:"100%"},label:"URL",variant:"standard",value:U,onChange:function(e){J(e.target.value),q(""),$([]),re(""),ce("")}}),(0,y.jsx)("br",{}),(0,y.jsx)(Ee,{isFirst:!0,handleNext:function(){var e=!0;""===U.trim()&&(e=!1,de("URL")),e&&W(1)}})]})]}),(0,y.jsxs)(P,{children:[(0,y.jsx)(k,{children:"Select format"}),(0,y.jsxs)(Z,{children:[(0,y.jsxs)(T,{fullWidth:!0,children:[(0,y.jsx)(R,{id:"service-type-label",children:"Service Type"}),(0,y.jsx)(A,{labelId:"service-type-label",value:X,onChange:function(e){q(e.target.value),$([]),re(""),ce("")},label:"Service Type",children:le.map((function(e){var t=(0,p.Z)(e,2),n=t[0],r=t[1];return(0,y.jsx)(F,{value:n,children:r},n)}))})]}),(0,y.jsx)(Ee,{handleNext:je})]})]}),(0,y.jsxs)(P,{children:[(0,y.jsx)(k,{children:"Configure layer"}),(0,y.jsxs)(Z,{children:[0===Q.length&&""===oe&&(0,y.jsx)(L,{label:"Name",variant:"standard",value:ne,onChange:we}),0===Q.length&&""!==oe&&(0,y.jsx)(I,{children:ne}),Q.length>1&&(0,y.jsx)(T,{fullWidth:!0,children:(0,y.jsx)(D,{multiple:ue(),disableCloseOnSelect:ue(),disableClearable:!ue(),id:"service-layer-label",options:Q,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,y.jsx)("span",h(h({},e),{},{children:t[1]}))},onChange:function(e,t){ue()?(ce(t.map((function(e){return e[0]}))[0]),re(t.map((function(e){return e[1]})).join(", "))):(ce(t[0]),re(t[1]))},renderInput:function(e){return(0,y.jsx)(L,h(h({},e),{},{label:"Select Layer"}))}})}),(0,y.jsx)("br",{}),(0,y.jsx)(Ee,{isLast:!ue(),handleNext:ue()?function(){var e=!0;0===oe.length&&(e=!1,de("Layer")),e&&W(3)}:Oe})]})]}),ue()&&(0,y.jsxs)(P,{children:[(0,y.jsx)(k,{children:"Enter Name"}),(0,y.jsxs)(Z,{children:[(0,y.jsx)(L,{sx:{width:"100%"},label:"Name",variant:"standard",value:ne,onChange:we}),(0,y.jsx)("br",{}),(0,y.jsx)(Ee,{isLast:!0,handleNext:Oe})]})]})]})};var b=n(3386),j=n(7406);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=window;const E=function(e){var t=e.mapId,n=e.layers,r=e.language,a=w.cgpv,i=a.ui,o=a.react,c=a.api,s=a.leaflet,f=a.mui,m=o.useState,h=o.useEffect,x=m(""),g=(0,p.Z)(x,2),O=g[0],E=g[1],N=m({}),C=(0,p.Z)(N,2),P=C[0],k=C[1],Z=m({}),L=(0,p.Z)(Z,2),I=L[0],R=L[1],T=m(s.polygon([])),A=(0,p.Z)(T,2),F=A[0],D=A[1],G=m({}),B=(0,p.Z)(G,2),_=B[0],W=B[1],M=m({}),V=(0,p.Z)(M,2),U=V[0],J=V[1],z=m({}),Y=(0,p.Z)(z,2),X=Y[0],q=Y[1],K=f.Slider,H=f.Tooltip,Q=f.Checkbox,$=i.elements.Button,ee=(0,l.RF)({"en-CA":{bounds:"Toggle Bounds",zoom:"Zoom to Layer",remove:"Remove Layer",opacity:"Adjust Opacity",visibility:"Toggle Visibility"},"fr-CA":{bounds:"Basculer la limite",zoom:"Zoom sur la Couche",remove:"Supprimer la Couche",opacity:"Ajuster l'opacité",visibility:"Basculer la Visibilité"}}),te=i.makeStyles((function(){return{layersContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},layerItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3,border:"none",width:"100%"},layerParentText:{fontSize:"16px",fontWeight:"bold"},layerCountTextContainer:{display:"flex",alignItems:"center",width:"100%",height:"32px"},layerItemText:{fontSize:"14px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",marginLeft:"10px",display:"flex",alignItems:"center",gap:6},flexGroup:{display:"flex",justifyContent:"flex-end",alignItems:"baseline",gap:12},flexGroupButton:{height:38,minHeight:38,width:25,minWidth:25,"& > div":{textAlign:"center"}},slider:{width:"100%",paddingLeft:20,paddingRight:20},legendSubLayerGroup:{display:"flex",justifyContent:"space-between"}}}));h((function(){var e=Object.values(n).reduce((function(e,t){return S(S({},e),{},(0,u.Z)({},t.id,[]))}),{});k((function(t){return S(S({},e),t)})),Object.values(n).forEach(function(){var e=(0,d.Z)(v().mark((function e(t){var n,r,a,i,o,c,s;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("ogcWMS"!==t.type){e.next=10;break}return n=(0,l.RF)(t),e.next=4,n.getLegendGraphic();case 4:r=e.sent,a=t.url.includes("/MapServer")?t.name:"",i=[{name:a,dataUrl:r}],k((function(e){return S(S({},e),{},(0,u.Z)({},t.id,i))})),e.next=17;break;case 10:if("esriDynamic"!==t.type&&"esriFeature"!==t.type){e.next=17;break}return o=(0,l.RF)(t),e.next=14,o.getLegendJson();case 14:c=e.sent,s=Array.isArray(c)?c:[c],k((function(e){return S(S({},e),{},(0,u.Z)({},t.id,s))}));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var t=Object.values(n).reduce((function(e,t){return S(S({},e),{},(0,u.Z)({},t.id,s.latLngBounds([])))}),{});R((function(e){return S(S({},t),e)})),Object.values(n).forEach(function(){var e=(0,d.Z)(v().mark((function e(t){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBounds();case 2:n=e.sent,R((function(e){return S(S({},e),{},(0,u.Z)({},t.id,n))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var r=Object.values(n).reduce((function(e,t){return S(S({},e),{},(0,u.Z)({},t.id,100))}),{});W((function(e){return S(S({},r),e)}));var a=Object.values(n).reduce((function(e,t){return S(S({},e),{},(0,u.Z)({},t.id,!0))}),{});J((function(e){return S(S({},a),e)}));var i=Object.values(n).reduce((function(e,t){return S(S({},e),{},(0,u.Z)({},t.id,t.entries))}),{});q((function(e){return S(S({},i),e)}))}),[n,s]);var ne=te(),re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=e.getEast()-e.getWest(),r=[];r.push(e.getSouthWest());for(var a=1;a<=t;a+=1){var i=n*(a/(t+1)),o=e.getWest()+i;r.push({lat:e.getSouth(),lng:o})}r.push(e.getSouthEast()),r.push(e.getNorthEast());for(var c=1;c<=t;c+=1){var u=n*(c/(t+1)),l=e.getEast()-u;r.push({lat:e.getNorth(),lng:l})}return r.push(e.getNorthWest()),s.polygon(r,{id:(0,j.Ox)(),color:"red"})};return(0,y.jsx)("div",{className:ne.layersContainer,children:Object.values(n).map((function(e){return(0,y.jsxs)("div",{children:[(0,y.jsx)("button",{type:"button",className:ne.layerItem,onClick:function(){return t=e.id,void E(t!==O?t:"");var t},children:(0,y.jsx)("div",{className:ne.layerCountTextContainer,children:(0,y.jsx)("div",{className:ne.layerItemText,title:e.name,children:e.name})})}),O===e.id&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:ne.flexGroup,children:[(0,y.jsx)($,{className:ne.flexGroupButton,tooltip:ee[r].zoom,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">zoom_in</i>',onClick:function(){return function(e){return c.map(t).fitBounds(I[e.id])}(e)}}),(0,y.jsx)($,{className:ne.flexGroupButton,tooltip:ee[r].bounds,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">crop_free</i>',onClick:function(){return function(e){var n=re(I[e.id]);JSON.stringify(n.toGeoJSON())===JSON.stringify(F.toGeoJSON())?(F.remove(),D(s.polygon([]))):(F.remove(),n.addTo(c.map(t).map),D(n))}(e)}}),(0,y.jsx)($,{className:ne.flexGroupButton,tooltip:ee[r].remove,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">remove</i>',onClick:function(){return function(e){var n=re(I[e.id]);JSON.stringify(n.toGeoJSON())===JSON.stringify(F.toGeoJSON())&&(F.remove(),D(s.polygon([]))),c.map(t).layer.removeLayer(e)}(e)}})]}),(0,y.jsxs)("div",{className:ne.flexGroup,children:[(0,y.jsx)(H,{title:ee[r].opacity,children:(0,y.jsx)("i",{className:"material-icons",children:"contrast"})}),(0,y.jsx)("div",{className:ne.slider,children:(0,y.jsx)(K,{size:"small",value:_[e.id],valueLabelDisplay:"auto",onChange:function(t){return function(e,t){W((function(n){return S(S({},n),{},(0,u.Z)({},t.id,e))}));var n=U[t.id]?e/100:0;t.setOpacity(n)}(t.target.value,e)}})}),(0,y.jsx)(H,{title:ee[r].visibility,children:(0,y.jsx)(Q,{checked:U[e.id],onChange:function(t){return function(e,t){J((function(n){return S(S({},n),{},(0,u.Z)({},t.id,e))}));var n=e?_[t.id]/100:0;t.setOpacity(n),e&&t.setEntries&&(q((function(e){return S(S({},e),{},(0,u.Z)({},t.id,t.entries))})),t.setEntries(t.entries)),!e&&t.setEntries&&(q((function(e){return S(S({},e),{},(0,u.Z)({},t.id,[]))})),t.setEntries([]))}(t.target.checked,e)}})})]}),P[e.id].map((function(t,n){var a,i,o,c,s;return(0,y.jsxs)("div",{children:[t.legend&&(0,y.jsxs)("div",{className:ne.legendSubLayerGroup,children:[(0,y.jsx)("div",{className:ne.layerItemText,title:t.layerName,children:t.layerName}),(0,y.jsx)(H,{title:ee[r].visibility,children:(0,y.jsx)(Q,{checked:X[e.id].includes(t.layerId),onChange:function(n){return r=n.target.checked,a=e,i=t.layerId,o=X[a.id],c=r?(0,b.Z)(new Set([].concat((0,b.Z)(o),[i]))):o.filter((function(e){return e!==i})),0===o.length&&(J((function(e){return S(S({},e),{},(0,u.Z)({},a.id,!0))})),a.setOpacity(_[a.id]/100)),0===c.length&&(J((function(e){return S(S({},e),{},(0,u.Z)({},a.id,!1))})),a.setOpacity(0)),q((function(e){return S(S({},e),{},(0,u.Z)({},a.id,c))})),void(a.setEntries&&a.setEntries(c));var r,a,i,o,c}})})]}),"simple"===(null===(a=t.drawingInfo)||void 0===a?void 0:a.renderer.type)&&(null===(i=t.drawingInfo)||void 0===i?void 0:i.renderer.symbol.imageData)&&(0,y.jsxs)("div",{className:ne.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:"data:".concat(null===(o=t.drawingInfo)||void 0===o?void 0:o.renderer.symbol.contentType,";base64,").concat(null===(c=t.drawingInfo)||void 0===c?void 0:c.renderer.symbol.imageData)}),(null===(s=t.drawingInfo)||void 0===s?void 0:s.renderer.label)||t.name]}),"uniqueValue"===t.drawingInfo.renderer.type&&t.drawingInfo.renderer.uniqueValueInfos[0].symbol.imageData&&t.drawingInfo.renderer.uniqueValueInfos.map((function(e,t){return(0,y.jsxs)("div",{className:ne.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:"data:".concat(e.symbol.contentType,";base64,").concat(e.symbol.imageData)}),e.label]},t)})),t.legend&&t.legend.map((function(e,n){return(0,y.jsxs)("div",{className:ne.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:"data:".concat(e.contentType,";base64,").concat(e.imageData)}),e.label||t.layerName]},n)})),t.dataUrl&&(0,y.jsxs)("div",{className:ne.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:t.dataUrl}),t.name]})]},n)}))]})]},e.id)}))})};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=window;const k=function(e){var t=e.mapId,n=P.cgpv,r=n.api,a=n.react,i=n.ui,o=a.useState,c=a.useEffect,s=o(!1),u=(0,p.Z)(s,2),d=u[0],f=u[1],v=o({}),m=(0,p.Z)(v,2),h=m[0],x=m[1],b=i.elements.Button,j=r.map(t).language,O=(0,l.RF)({"en-CA":{addLayer:"Add Layer"},"fr-CA":{addLayer:"Ajouter Couche"}}),S=i.makeStyles((function(){return{mainContainer:{display:"flex",flexDirection:"row"},addLayerButton:{width:50,minWidth:50,"& > div":{textAlign:"center"}}}}))();return c((function(){return x((function(){return C({},r.map(t).layer.layers)})),r.event.on(r.eventNames.EVENT_LAYER_ADDED,(function(){return x((function(){return C({},r.map(t).layer.layers)}))}),t),r.event.on(r.eventNames.EVENT_REMOVE_LAYER,(function(){return x((function(){return C({},r.map(t).layer.layers)}))}),t),r.event.on(r.eventNames.EVENT_PANEL_CLOSE,(function(){f(!1)}),t),function(){r.event.off(r.eventNames.EVENT_LAYER_ADDED,t),r.event.off(r.eventNames.EVENT_REMOVE_LAYER,t),r.event.off(r.eventNames.EVENT_PANEL_CLOSE,t)}}),[r,t]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:S.mainContainer,children:(0,y.jsx)(b,{className:S.addLayerButton,tooltip:O[j].addLayer,tooltipPlacement:"right",variant:"contained",type:"icon",icon:'<i class="material-icons">add</i>',onClick:function(){return f((function(e){return!e}))}})}),d&&(0,y.jsx)(g,{mapId:t,setAddLayerVisible:f}),(0,y.jsx)("div",{style:{display:d?"none":"inherit"},children:(0,y.jsx)(E,{mapId:t,layers:h,language:j})})]})};function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var a=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var L=window,I=function(e){(0,o.Z)(n,e);var t=Z(n);function n(e,a){var o;return(0,r.Z)(this,n),o=t.call(this,e,a),(0,u.Z)((0,i.Z)(o),"translations",(0,l.RF)({"en-CA":{layersPanel:"Layers"},"fr-CA":{layersPanel:"Couches"}})),(0,u.Z)((0,i.Z)(o),"added",(function(){var e,t,n=o.LayersPanelPluginProps.mapId,r=L.cgpv.api,a=r.map(n).language,i={id:"layersPanelButton",tooltip:o.translations[a].layersPanel,tooltipPlacement:"right",icon:'<i class="material-icons">layers</i>',type:"textWithIcon"},c={title:o.translations[a].layersPanel,icon:'<i class="material-icons">layers</i>',width:200};o.buttonPanel=r.map(n).appBarButtons.createAppbarPanel(i,c,null),null===(e=o.buttonPanel)||void 0===e||null===(t=e.panel)||void 0===t||t.changeContent((0,y.jsx)(k,{buttonPanel:o.buttonPanel,mapId:n}))})),o.id=e,o.LayersPanelPluginProps=a,o.buttonPanel=null,o}return(0,a.Z)(n,[{key:"removed",value:function(){var e=this.LayersPanelPluginProps.mapId,t=L.cgpv.api;this.buttonPanel&&t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.id)}}]),n}(l.EV);L.plugins=L.plugins||{},L.plugins.layersPanel=(0,l.RF)(I)}},e=>{var t;t=7494,e(e.s=t)}]);
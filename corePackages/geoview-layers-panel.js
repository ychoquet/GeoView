"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[763],{9115:(e,t,n)=>{var r=n(1292),a=n(4702),i=n(19),o=n(9510),c=n(2746),s=n(7576),u=n(3110),l=n(2159),p=n(3457),d=n(6281),f=n(3688),v=n.n(f),y=n(5202);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=window;const x=function(e){var t=e.mapId,n=e.setAddLayerVisible,r=h.cgpv,a=r.api,i=r.react,o=r.ui,c=a.layerTypes,s=c.ESRI_DYNAMIC,u=c.ESRI_FEATURE,f=c.GEOJSON,m=c.WMS,x=c.WFS,b=c.OGC_FEATURE,j=c.XYZ_TILES,O=i.useState,E=o.elements,S=E.Select,w=E.Stepper,N=E.TextField,C=E.Button,Z=E.ButtonGroup,L=E.Typography,k=E.Autocomplete,P=O(0),I=(0,p.Z)(P,2),A=I[0],T=I[1],R=O(""),B=(0,p.Z)(R,2),D=B[0],G=B[1],F=O(""),_=(0,p.Z)(F,2),W=_[0],V=_[1],M=O([]),U=(0,p.Z)(M,2),Y=U[0],J=U[1],z=O(""),K=(0,p.Z)(z,2),Q=K[0],X=K[1],q=O([]),H=(0,p.Z)(q,2),$=H[0],ee=H[1],te=o.makeStyles((function(){return{buttonGroup:{paddingTop:12,gap:6}}}))(),ne=function(){return W===s},re=[[s,"ESRI Dynamic Service"],[u,"ESRI Feature Service"],[f,"GeoJSON"],[m,"OGC Web Map Service (WMS)"],[x,"OGC Web Feature Service (WFS)"],[b,"OGC API Features"],[j,"XYZ Raster Tiles"]],ae=function(e){switch(e){case s:return{err:"ESRI Map",capability:"Map"};case u:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},ie=function(e){a.event.emit((0,l.Zu)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"".concat(e," cannot be empty")}))},oe=function(e){a.event.emit((0,l.Zu)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"URL is not a valid ".concat(e," Server")}))},ce=function(e,n,r){a.event.emit((0,l.Zu)(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,{type:"string",value:"".concat(e," does not support current map projection ").concat(n,", only ").concat(r.join(", "))}))},se=function(){var e=(0,d.Z)(v().mark((function e(){var n,r,i,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.map(t).projection.getCRS().code,r=[],e.prev=2,e.next=5,a.geoUtilities.getWMSServiceMetadata(D,"");case 5:if(i=e.sent,(r=i.Capability.Layer.CRS).includes(n)){e.next=9;break}throw new Error("proj");case 9:1===(o=i.Capability.Layer.Layer.map((function(e){return[e.Name,e.Title]}))).length?(X(o[0][1]),ee([{id:o[0][0]}])):J(o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(2),"proj"===e.t0?ce("WMS",n,r):oe("WMS"),e.abrupt("return",!1);case 17:return e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,d.Z)(v().mark((function e(){var t,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(D);case 3:t=e.sent,1===(n=t.FeatureTypeList.FeatureType.map((function(e){return[(0,l.ZQ)(e.Name["#text"].split(":")[1]),e.Title["#text"]]}))).length?(X(n[0][1]),ee([{id:n[0][0]}])):J(n),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),oe("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=(0,d.Z)(v().mark((function e(){var t,n,r,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["collections","links"],e.prev=1,e.next=4,fetch("".concat(D,"/collections?f=json"));case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,t.every((function(e){return Object.keys(r).includes(e)}))){e.next=11;break}throw new Error("err");case 11:1===(a=r.collections.map((function(e){return[e.id,e.title]}))).length?(X(a[0][1]),ee([{id:a[0][0]}])):J(a),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(1),oe("OGC API Feature"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=(0,d.Z)(v().mark((function e(t){var n,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(D);case 3:if(!(n=e.sent).capabilities.includes(ae(t).capability)){e.next=8;break}"layers"in n?1===(r=n.layers.map((function(e){return[e.id,e.name]}))).length?(X(r[0][1]),ee([{index:r[0][0]}])):J(r):(X(n.name),ee([{index:n.id}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),oe(ae(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),de=function(){for(var e=a.map(t).projection.getCRS().code,n=["{x}","{y}","{z}"],r=0;r<n.length;r+=1)if(!D.includes(n[r]))return oe("XYZ Tile"),!1;return"EPSG:3857"===e||(ce("XYZ Tiles",e,["EPSG:3857"]),!1)},fe=function(){var e=(0,d.Z)(v().mark((function e(){var t,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(D);case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,["FeatureCollection","Feature"].includes(n.type)){e.next=9;break}throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),oe("GeoJSON"),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=(0,d.Z)(v().mark((function e(){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!0,void 0===W&&(t=!1,ie("Service Type")),W!==m){e.next=6;break}return e.next=5,se();case 5:t=e.sent;case 6:if(W!==x){e.next=10;break}return e.next=9,ue();case 9:t=e.sent;case 10:if(W!==b){e.next=16;break}return e.next=13,le();case 13:t=e.sent,e.next=36;break;case 16:if(W!==j){e.next=20;break}t=de(),e.next=36;break;case 20:if(W!==s){e.next=26;break}return e.next=23,pe(s);case 23:t=e.sent,e.next=36;break;case 26:if(W!==u){e.next=32;break}return e.next=29,pe(u);case 29:t=e.sent,e.next=36;break;case 32:if(W!==f){e.next=36;break}return e.next=35,fe();case 35:t=e.sent;case 36:t&&T(2);case 37:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=!0,r=Q,i=D,o=$;W===s?i=a.geoUtilities.getMapServerUrl(D):W===u&&(i="".concat(a.geoUtilities.getMapServerUrl(D),"/").concat($[0].index),o=[]),""===Q&&(e=!1,ie(ne()?"Name":"Layer"));var c={id:a.generateId(),name:{en:r,fr:r},layerType:W,url:{en:i,fr:i},layerEntries:o};e&&(a.map(t).layer.addLayer(c),n(!1))},me=function(){T((function(e){return e-1}))},ge=function(e){X(e.target.value)};function he(e){var t=e.isFirst,n=void 0!==t&&t,r=e.isLast,a=void 0!==r&&r,i=e.handleNext;return(0,y.jsxs)(Z,{className:te.buttonGroup,children:[(0,y.jsx)(C,{variant:"contained",type:"text",onClick:i,children:a?"Finish":"Continue"}),!n&&(0,y.jsx)(C,{variant:"contained",type:"text",onClick:me,children:"Back"})]})}return(0,y.jsx)(w,{activeStep:A,orientation:"vertical",steps:[{stepLabel:{children:"Enter URL"},stepContent:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(N,{sx:{width:"100%"},label:"URL",variant:"standard",value:D,onChange:function(e){G(e.target.value),V(""),J([]),X(""),ee([])}}),(0,y.jsx)("br",{}),(0,y.jsx)(he,{isFirst:!0,handleNext:function(){var e=!0;""===D.trim()&&(e=!1,ie("URL")),e&&T(1)}})]})}},{stepLabel:{children:"Select format"},stepContent:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S,{fullWidth:!0,labelId:"service-type-label",value:W,onChange:function(e){V(e.target.value),J([]),X(""),ee([])},label:"Service Type",inputLabel:{id:"service-type-label"},menuItems:re.map((function(e){var t=(0,p.Z)(e,2),n=t[0];return{key:n,item:{value:n,children:t[1]}}}))}),(0,y.jsx)(he,{handleNext:ve})]})}},{stepLabel:{children:"Configure layer"},stepContent:{children:(0,y.jsxs)(y.Fragment,{children:[0===Y.length&&0===$.length&&(0,y.jsx)(N,{label:"Name",variant:"standard",value:Q,onChange:ge}),0===Y.length&&$.length>0&&(0,y.jsx)(L,{children:Q}),Y.length>1&&(0,y.jsx)(k,{fullWidth:!0,multiple:ne(),disableCloseOnSelect:!0,disableClearable:!ne(),id:"service-layer-label",options:Y,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,y.jsx)("span",g(g({},e),{},{children:t[1]}))},onChange:function(e,t){ne()?(ee(t.map((function(e){return W===s?{index:parseInt(e[0],10)}:{id:e[0]}}))),X(t.map((function(e){return e[1]})).join(", "))):(ee(W===s?[{index:parseInt(t[0],10)}]:[{id:t[0]}]),X(t[1]))},renderInput:function(e){return(0,y.jsx)(N,g(g({},e),{},{label:"Select Layer"}))}}),(0,y.jsx)("br",{}),(0,y.jsx)(he,{isLast:!ne(),handleNext:ne()?function(){var e=!0;0===$.length&&(e=!1,ie("Layer")),e&&T(3)}:ye})]})}},ne()?{stepLabel:{children:"Enter Name"},stepContent:{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(N,{sx:{width:"100%"},label:"Name",variant:"standard",value:Q,onChange:ge}),(0,y.jsx)("br",{}),(0,y.jsx)(he,{isLast:!0,handleNext:ye})]})}}:null]})};var b=n(4201);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=window;const S=function(e){var t=e.mapId,n=e.layers,r=e.language,a=E.cgpv,i=a.ui,o=a.react,c=a.api,s=a.leaflet,f=o.useState,m=o.useEffect,g=f(""),h=(0,p.Z)(g,2),x=h[0],j=h[1],S=f({}),w=(0,p.Z)(S,2),N=w[0],C=w[1],Z=f({}),L=(0,p.Z)(Z,2),k=L[0],P=L[1],I=f(s.polygon([])),A=(0,p.Z)(I,2),T=A[0],R=A[1],B=f({}),D=(0,p.Z)(B,2),G=D[0],F=D[1],_=f({}),W=(0,p.Z)(_,2),V=W[0],M=W[1],U=f({}),Y=(0,p.Z)(U,2),J=Y[0],z=Y[1],K=i.elements,Q=K.Button,X=K.Slider,q=K.Tooltip,H=K.Checkbox,$=(0,l.ZQ)({"en-CA":{bounds:"Toggle Bounds",zoom:"Zoom to Layer",remove:"Remove Layer",opacity:"Adjust Opacity",visibility:"Toggle Visibility"},"fr-CA":{bounds:"Basculer la limite",zoom:"Zoom sur la Couche",remove:"Supprimer la Couche",opacity:"Ajuster l'opacité",visibility:"Basculer la Visibilité"}}),ee=i.makeStyles((function(){return{layersContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},layerItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3,border:"none",width:"100%"},layerParentText:{fontSize:"16px",fontWeight:"bold"},layerCountTextContainer:{display:"flex",alignItems:"center",width:"100%",height:"32px"},layerItemText:{fontSize:"14px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",marginLeft:"10px",display:"flex",alignItems:"center",gap:6},flexGroup:{display:"flex",justifyContent:"flex-end",alignItems:"baseline",gap:12},flexGroupButton:{height:38,minHeight:38,width:25,minWidth:25,"& > div":{textAlign:"center"}},slider:{width:"100%",paddingLeft:20,paddingRight:20},legendSubLayerGroup:{display:"flex",justifyContent:"space-between"}}}));m((function(){var e=Object.values(n).reduce((function(e,t){return O(O({},e),{},(0,u.Z)({},t.id,[]))}),{});C((function(t){return O(O({},e),t)})),Object.values(n).forEach(function(){var e=(0,d.Z)(v().mark((function e(t){var n,r,a,i,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,l.DR)(t)){e.next=9;break}return e.next=3,t.getLegendGraphic();case 3:n=e.sent,r=t.url.includes("/MapServer")?t.name:"",a=[{name:r,dataUrl:n}],C((function(e){return O(O({},e),{},(0,u.Z)({},t.id,a))})),e.next=15;break;case 9:if(!(0,l.mJ)(t)&&!(0,l.o1)(t)){e.next=15;break}return e.next=12,t.getLegendJson();case 12:i=e.sent,o=Array.isArray(i)?i:[i],C((function(e){return O(O({},e),{},(0,u.Z)({},t.id,o))}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var t=Object.values(n).reduce((function(e,t){return O(O({},e),{},(0,u.Z)({},t.id,s.latLngBounds([])))}),{});P((function(e){return O(O({},t),e)})),Object.values(n).forEach(function(){var e=(0,d.Z)(v().mark((function e(t){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBounds();case 2:n=e.sent,P((function(e){return O(O({},e),{},(0,u.Z)({},t.id,n))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var r=Object.values(n).reduce((function(e,t){return O(O({},e),{},(0,u.Z)({},t.id,100))}),{});F((function(e){return O(O({},r),e)}));var a=Object.values(n).reduce((function(e,t){return O(O({},e),{},(0,u.Z)({},t.id,!0))}),{});M((function(e){return O(O({},a),e)}));var i=Object.values(n).reduce((function(e,t){return O(O({},e),{},(0,u.Z)({},t.id,t.entries))}),{});z((function(e){return O(O({},i),e)}))}),[n,s]);var te=ee(),ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=e.getEast()-e.getWest(),r=[];r.push(e.getSouthWest());for(var a=1;a<=t;a+=1){var i=n*(a/(t+1)),o=e.getWest()+i;r.push({lat:e.getSouth(),lng:o})}r.push(e.getSouthEast()),r.push(e.getNorthEast());for(var u=1;u<=t;u+=1){var l=n*(u/(t+1)),p=e.getEast()-l;r.push({lat:e.getNorth(),lng:p})}return r.push(e.getNorthWest()),s.polygon(r,{id:c.generateId(),color:"red"})};return(0,y.jsx)("div",{className:te.layersContainer,children:Object.values(n).map((function(e){return(0,y.jsxs)("div",{children:[(0,y.jsx)("button",{type:"button",className:te.layerItem,onClick:function(){return t=e.id,void j(t!==x?t:"");var t},children:(0,y.jsx)("div",{className:te.layerCountTextContainer,children:(0,y.jsx)("div",{className:te.layerItemText,title:e.name,children:e.name})})}),x===e.id&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:te.flexGroup,children:[(0,y.jsx)(Q,{className:te.flexGroupButton,tooltip:$[r].zoom,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">zoom_in</i>',onClick:function(){return function(e){return c.map(t).fitBounds(k[e.id])}(e)}}),(0,y.jsx)(Q,{className:te.flexGroupButton,tooltip:$[r].bounds,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">crop_free</i>',onClick:function(){return function(e){var n=ne(k[e.id]);JSON.stringify(n.toGeoJSON())===JSON.stringify(T.toGeoJSON())?(T.remove(),R(s.polygon([]))):(T.remove(),n.addTo(c.map(t).map),R(n))}(e)}}),(0,y.jsx)(Q,{className:te.flexGroupButton,tooltip:$[r].remove,tooltipPlacement:"top",variant:"contained",type:"icon",icon:'<i class="material-icons">remove</i>',onClick:function(){return function(e){var n=ne(k[e.id]);JSON.stringify(n.toGeoJSON())===JSON.stringify(T.toGeoJSON())&&(T.remove(),R(s.polygon([]))),c.map(t).layer.removeLayer(e)}(e)}})]}),(0,y.jsxs)("div",{className:te.flexGroup,children:[(0,y.jsx)(q,{title:$[r].opacity,children:(0,y.jsx)("i",{className:"material-icons",children:"contrast"})}),(0,y.jsx)("div",{className:te.slider,children:(0,y.jsx)(X,{id:c.generateId(),min:0,max:100,size:"small",value:G[e.id],valueLabelDisplay:"auto",customOnChange:function(t){return function(e,t){F((function(n){return O(O({},n),{},(0,u.Z)({},t.id,e))}));var n=V[t.id]?e/100:0;t.setOpacity(n)}(t,e)}})}),(0,y.jsx)(q,{title:$[r].visibility,children:(0,y.jsx)(H,{checked:V[e.id],onChange:function(t){return function(e,t){M((function(n){return O(O({},n),{},(0,u.Z)({},t.id,e))}));var n=e?G[t.id]/100:0;t.setOpacity(n),e&&t.setEntries&&(z((function(e){return O(O({},e),{},(0,u.Z)({},t.id,t.entries))})),t.setEntries(t.entries)),!e&&t.setEntries&&(z((function(e){return O(O({},e),{},(0,u.Z)({},t.id,[]))})),t.setEntries([]))}(t.target.checked,e)}})})]}),N[e.id].map((function(t,n){var a,i,o,c,s,l;return(0,y.jsxs)("div",{children:[t.legend&&(0,y.jsxs)("div",{className:te.legendSubLayerGroup,children:[(0,y.jsx)("div",{className:te.layerItemText,title:t.layerName,children:t.layerName}),(0,y.jsx)(q,{title:$[r].visibility,children:(0,y.jsx)(H,{checked:J[e.id].includes(t.layerId),onChange:function(n){return r=n.target.checked,a=e,i=t.layerId,o=J[a.id],c=r?(0,b.Z)(new Set([].concat((0,b.Z)(o),[i]))):o.filter((function(e){return e!==i})),0===o.length&&(M((function(e){return O(O({},e),{},(0,u.Z)({},a.id,!0))})),a.setOpacity(G[a.id]/100)),0===c.length&&(M((function(e){return O(O({},e),{},(0,u.Z)({},a.id,!1))})),a.setOpacity(0)),z((function(e){return O(O({},e),{},(0,u.Z)({},a.id,c))})),void(a.setEntries&&a.setEntries(c));var r,a,i,o,c}})})]}),"simple"===(null===(a=t.drawingInfo)||void 0===a?void 0:a.renderer.type)&&(null===(i=t.drawingInfo)||void 0===i?void 0:i.renderer.symbol.imageData)&&(0,y.jsxs)("div",{className:te.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:"data:".concat(null===(o=t.drawingInfo)||void 0===o?void 0:o.renderer.symbol.contentType,";base64,").concat(null===(c=t.drawingInfo)||void 0===c?void 0:c.renderer.symbol.imageData)}),(null===(s=t.drawingInfo)||void 0===s?void 0:s.renderer.label)||t.name]}),"uniqueValue"===(null===(l=t.drawingInfo)||void 0===l?void 0:l.renderer.type)&&t.drawingInfo.renderer.uniqueValueInfos[0].symbol.imageData&&t.drawingInfo.renderer.uniqueValueInfos.map((function(e,t){return(0,y.jsxs)("div",{className:te.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:"data:".concat(e.symbol.contentType,";base64,").concat(e.symbol.imageData)}),e.label]},t)})),t.legend&&t.legend.map((function(e,n){return(0,y.jsxs)("div",{className:te.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:"data:".concat(e.contentType,";base64,").concat(e.imageData)}),e.label||t.layerName]},n)})),t.dataUrl&&(0,y.jsxs)("div",{className:te.layerItemText,children:[(0,y.jsx)("img",{alt:"Layer Legend",src:t.dataUrl}),t.name]})]},n)}))]})]},e.id)}))})};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=window;const Z=function(e){var t=e.mapId,n=e.buttonPanel,r=C.cgpv,a=r.api,i=r.react,o=r.ui,c=i.useState,s=i.useEffect,u=c(!1),d=(0,p.Z)(u,2),f=d[0],v=d[1],m=c({}),g=(0,p.Z)(m,2),h=g[0],b=g[1],j=o.elements.Button,O=a.map(t).language,E=(0,l.ZQ)({"en-CA":{addLayer:"Add Layer"},"fr-CA":{addLayer:"Ajouter Couche"}}),w=o.makeStyles((function(){return{mainContainer:{display:"flex",flexDirection:"row"},addLayerButton:{width:50,minWidth:50,"& > div":{textAlign:"center"}}}}))();return s((function(){return b((function(){return N({},a.map(t).layer.layers)})),a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){return b((function(){return N({},a.map(t).layer.layers)}))}),t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,(function(){return b((function(){return N({},a.map(t).layer.layers)}))}),t),a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,(function(){v(!1)}),t,n.id),function(){a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t),a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,t,n.id)}}),[a,n.id,t]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:w.mainContainer,children:(0,y.jsx)(j,{className:w.addLayerButton,tooltip:E[O].addLayer,tooltipPlacement:"right",variant:"contained",type:"icon",icon:'<i class="material-icons">add</i>',onClick:function(){return v((function(e){return!e}))}})}),f&&(0,y.jsx)(x,{mapId:t,setAddLayerVisible:v}),(0,y.jsx)("div",{style:{display:f?"none":"inherit"},children:(0,y.jsx)(S,{mapId:t,layers:h,language:O})})]})};function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var a=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var k=window,P=function(e){(0,o.Z)(n,e);var t=L(n);function n(e,a){var o;return(0,r.Z)(this,n),o=t.call(this,e,a),(0,u.Z)((0,i.Z)(o),"translations",(0,l.ZQ)({"en-CA":{layersPanel:"Layers"},"fr-CA":{layersPanel:"Couches"}})),(0,u.Z)((0,i.Z)(o),"added",(function(){var e,t,n=o.pluginProps.mapId,r=k.cgpv.api,a=r.map(n).language,i={id:"layersPanelButton",tooltip:o.translations[a].layersPanel,tooltipPlacement:"right",icon:'<i class="material-icons">layers</i>',type:"textWithIcon"},c={title:o.translations[a].layersPanel,icon:'<i class="material-icons">layers</i>',width:200};o.buttonPanel=r.map(n).appBarButtons.createAppbarPanel(i,c,null),null===(e=o.buttonPanel)||void 0===e||null===(t=e.panel)||void 0===t||t.changeContent((0,y.jsx)(Z,{buttonPanel:o.buttonPanel,mapId:n}))})),o.buttonPanel=null,o}return(0,a.Z)(n,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=k.cgpv.api;this.buttonPanel&&t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.id)}}]),n}(l.EV);k.plugins=k.plugins||{},k.plugins["layers-panel"]=(0,l.RF)(P)}},e=>{var t;t=9115,e(e.s=t)}]);
//# sourceMappingURL=geoview-layers-panel.js.map
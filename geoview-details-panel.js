"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[138],{8281:(e,t,n)=>{var a=n(1292),r=n(4702),i=n(19),s=n(9510),l=n(2746),o=n(7576),c=n(3110),u=n(7287),f=n(8663),d=n(4201),p=n(6281),y=n(3457),m=n(3688),x=n.n(m),b=n(2450),g=n(5202),h=window;const v=function(e){var t=e.layersData,n=e.selectFeature,a=e.selectLayer,r=e.getSymbol,i=e.clickPos,s=e.mapId,l=h.cgpv,o=l.api,c=l.ui,f=o.eventNames,d=c.makeStyles((function(){return{layersContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},layerItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3,border:"none",width:"100%"},layerParentText:{fontSize:"16px",fontWeight:"bold"},layerCountTextContainer:{display:"flex",alignItems:"center",width:"100%"},layerFeatureCount:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",minWidth:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)",marginRight:"10px",color:"black",fontSize:"16px",fontWeight:"bold"},layerItemText:{fontSize:"14px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}}}))(),p=function(e,t){var i=e.layers[t],s=i.layerData,l=i.displayField,o=i.fieldAliases,c=i.renderer;if(a(e.layers[t]),1===s.length){var f,d=null===(f=s[0])||void 0===f?void 0:f.attributes;n((0,u.ZQ)({attributes:d,displayField:l,fieldAliases:o,symbol:r(c,d),numOfEntries:1}))}};return(0,g.jsx)("div",{className:d.layersContainer,children:Object.keys(t).map((function(e){var n=t[e];return(0,g.jsx)("div",{children:Object.keys(n.layers).map((function(e,t){var a=n.layers[e],l=a.layer,c=a.layerData,u=a.groupLayer;return(0,g.jsx)("div",{tabIndex:c.length>0&&!u?0:-1,onKeyDown:function(t){"Enter"===t.key&&(u||(t.preventDefault(),p(n,e)))},role:"button",children:u?(0,g.jsx)("div",{className:d.layerParentText,title:l.name,children:l.name}):(0,g.jsx)("button",{type:"button",tabIndex:-1,className:d.layerItem,disabled:0===c.length,onClick:c.length>0?function(){p(n,e),o.event.emit((0,b.us)(f.MARKER_ICON.EVENT_MARKER_ICON_SHOW,s,i,r(n.layers[e].renderer,c[0].attributes)))}:void 0,children:(0,g.jsxs)("div",{className:d.layerCountTextContainer,children:[(0,g.jsx)("span",{className:d.layerFeatureCount,children:c.length}),(0,g.jsx)("div",{className:d.layerItemText,title:l.name,children:l.name})]})})},t)}))},n.id)}))})};var I=window;const k=function(e){var t=e.selectedLayer,n=e.selectLayer,a=e.selectFeature,r=e.setPanel,i=e.getSymbol,s=e.buttonPanel,l=I.cgpv,o=l.react,c=l.ui,f=l.useTranslation,d=o.useEffect,p=t,y=p.displayField,m=p.fieldAliases,x=p.layerData,b=p.renderer,h=c.makeStyles((function(){return{featuresContainer:{overflow:"hidden",overflowY:"auto",width:"100%"},featureItem:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"5px 0",padding:"10px 5px",boxSizing:"content-box","&:hover":{cursor:"pointer",backgroundColor:"#c9c9c9"},zIndex:1e3},featureIconTextContainer:{display:"flex",alignItems:"center",width:"100%"},featureItemIconContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",minWidth:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)"},featureItemIcon:{},featureItemText:{display:"inline-block",width:"100%",fontWeight:400,marginLeft:"10px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"16px"}}}))(),v=f().t,k=function(e,t){var i;null===(i=s.panel)||void 0===i||i.addActionButton("back",v("action_back"),'<i class="material-icons">keyboard_backspace</i>',(function(){1===x.length?r(!0,!1,!1):n()})),a((0,u.ZQ)({attributes:e,displayField:y,fieldAliases:m,symbol:t,numOfEntries:x.length}))};return d((function(){var e;null===(e=s.panel)||void 0===e||e.addActionButton("back",v("action_back"),'<i class="material-icons">keyboard_backspace</i>',(function(){r(!0,!1,!1)}))}),[]),x.length>0?(0,g.jsx)("div",{className:h.featuresContainer,children:x.map((function(e,t){var n=null==e?void 0:e.attributes,a=i(b,n),r=n[y],s=r&&r.length>0?"".concat(r):"".concat(n.OBJECTID);return(0,g.jsx)("div",{tabIndex:0,onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k(n,a))},role:"button",children:(0,g.jsx)("div",{className:h.featureItem,onClick:function(){k(n,a)},role:"button",children:(0,g.jsxs)("div",{className:h.featureIconTextContainer,children:[(0,g.jsx)("div",{className:h.featureItemIconContainer,children:a.imageData?(0,g.jsx)("img",{className:h.featureItemIcon,src:"data:".concat(a.contentType,";base64, ").concat(a.imageData),alt:""}):b.symbol.legendImageUrl?(0,g.jsx)("img",{className:h.featureItemIcon,src:b.symbol.legendImageUrl,alt:""}):(0,g.jsx)("div",{className:h.featureItemIcon})}),(0,g.jsx)("span",{className:h.featureItemText,title:s,children:s})]})})},t)}))}):(0,g.jsx)("div",{className:h.featureItemText,children:v("nothing_found")})};var w=window;const E=function(e){var t=e.buttonPanel,n=e.selectedFeature,a=e.setPanel,r=w.cgpv,i=r.react,s=r.ui,l=r.useTranslation,o=i.useEffect,c=n.displayField,u=n.fieldAliases,f=n.attributes,d=n.symbol,p=n.numOfEntries,y=s.makeStyles((function(){return{featureInfoContainer:{width:"100%"},featureInfoHeader:{display:"flex",alignItems:"center"},featureInfoHeaderIconContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"32px",minWidth:"32px",height:"32px",boxShadow:"0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)"},featureInfoHeaderIcon:{},featureInfoHeaderText:{marginLeft:"10px",width:"100%",fontSize:18},featureInfoItemsContainer:{display:"flex",flexDirection:"column",marginTop:20},featureInfoItem:{display:"flex",flexDirection:"column",margin:"5px 0"},featureInfoItemKey:{fontWeight:"bold",fontSize:16},featureInfoItemValue:{fontSize:16,backgroundColor:"#ddd"}}}))(),m=l().t;return o((function(){var e;null===(e=t.panel)||void 0===e||e.addActionButton("back",m("action_back"),'<i class="material-icons">keyboard_backspace</i>',(function(){1===p?a(!0,!1,!1):a(!1,!0,!1)}))}),[]),(0,g.jsxs)("div",{className:y.featureInfoContainer,children:[(0,g.jsxs)("div",{className:y.featureInfoHeader,children:[(0,g.jsx)("div",{className:y.featureInfoHeaderIconContainer,children:d.imageData?(0,g.jsx)("img",{className:y.featureInfoHeaderIcon,src:"data:".concat(d.contentType,";base64, ").concat(d.imageData),alt:""}):d.legendImageUrl?(0,g.jsx)("img",{className:y.featureInfoHeaderIcon,src:d.legendImageUrl,alt:""}):(0,g.jsx)("div",{className:y.featureInfoHeaderIcon})}),(0,g.jsx)("span",{className:y.featureInfoHeaderText,children:f[c]&&f[c].length>0?"".concat(f[c]):"".concat(f.OBJECTID)})]}),(0,g.jsx)("div",{className:y.featureInfoItemsContainer,children:Object.keys(f).map((function(e){var t=u[e],n=f[e];return t||(t=e),n.length>0&&"OBJECTID"!==t&&"SHAPE"!==t&&"SHAPE_Length"!==t&&"SHAPE_Area"!==t&&(0,g.jsxs)("div",{className:y.featureInfoItem,tabIndex:0,children:[(0,g.jsx)("span",{className:y.featureInfoItemKey,children:t}),(0,g.jsx)("span",{className:y.featureInfoItemValue,children:n})]},e)}))})]})};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=window;const S=function(e){var t=e.buttonPanel,n=e.mapId,a=C.cgpv,r=a.api,i=a.react,s=a.ui,l=a.useTranslation,o=r.eventNames,f=i.useState,m=i.useCallback,b=i.useEffect,h=f({}),I=(0,y.Z)(h,2),w=I[0],j=I[1],S=f({}),P=(0,y.Z)(S,2),_=P[0],O=P[1],A=f({}),R=(0,y.Z)(A,2),T=R[0],D=R[1],F=f(!1),Z=(0,y.Z)(F,2),L=Z[0],H=Z[1],B=f(!1),z=(0,y.Z)(B,2),W=z[0],V=z[1],K=f(!1),M=(0,y.Z)(K,2),U=M[0],Q=M[1],q=f(),Y=(0,y.Z)(q,2),G=Y[0],J=Y[1],X=s.makeStyles((function(){return{mainContainer:{display:"flex",flexDirection:"row"}}}))(),$=l().t,ee=r.map(n).map,te=m((function(e,t){var n=null;return e&&e.symbol?n=(0,u.ZQ)(e.symbol):e&&e.uniqueValueInfos&&e.uniqueValueInfos.length>0&&(n=e.uniqueValueInfos.filter((function(n){return n.value===(t[e.field1]||t[e.field2]||t[e.field3])}))[0].symbol),n}),[]),ne=function(){var e=(0,p.Z)(x().mark((function e(t){var n,a;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"?f=json"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=m((function(e,a,i){var s;null===(s=t.panel)||void 0===s||s.removeActionButton("back"),H(e),V(a),Q(i),r.event.emit((0,u.pn)(o.PANEL.EVENT_PANEL_CHANGE_CONTENT,n),t.id)}),[t.panel,n]),re=m((function(){ae(!0,!1,!1)}),[ae]),ie=m((function(e){O(e||{}),ae(!1,!0,!1)}),[O,ae]),se=m((function(e){D((0,u.RF)(e)),ae(!1,!1,!0)}),[D,ae]),le=function(e,t,n,a){var r,i,s=t[e.id].layers;s["".concat(n.id,"-").concat(n.name.replace(/\s+/g,"-").toLowerCase())]=(0,u.RF)({layer:n,groupLayer:a,layerData:[],displayField:n.displayField||n.displayFieldName||"",fieldAliases:(r=n.fields,i={},r&&r.forEach((function(e){var t=e.name,n=e.alias;i[t]=n})),i),renderer:n.drawingInfo&&n.drawingInfo.renderer}),t[e.id].layers=s},oe=m((function(e,t){var n=w[e].layers;n[t].layerData=[],j((function(t){return N(N({},t),{},(0,c.Z)({},e,N(N({},t[e]),{},{layers:n})))}))}),[w]),ce=m(function(){var e=(0,p.Z)(x().mark((function e(a){var i,s,l,f,p,y,m;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[],l=x().mark((function e(t){var n,r,i,l,o,f,p,y,m,b,g,h,v,I,k,E,C,S;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object.keys(w)[t],r=w[n],i=r.layer,l=r.layers,o=0;case 4:if(!(o<Object.keys(l).length)){e.next=34;break}if(f=Object.keys(l)[o],l[f].groupLayer){e.next=31;break}if(oe(n,f),p=(0,u.RF)((0,u.ZQ)(i).layer)._map,y=p.getSize(),m=p.getBounds(),b={xmin:m.getSouthWest().lng,ymin:m.getSouthWest().lat,xmax:m.getNorthEast().lng,ymax:m.getNorthEast().lat,spatialReference:{wkid:4326}},i.type!==u.bs.WMS){e.next=21;break}return g=(0,u.RF)(i),h=null,e.next=17,g.getFeatureInfo(a,p);case 17:(h=e.sent)&&h.length>0&&(s.push((0,u.RF)({layer:l[f],entries:h})),(v=l[f].layerData).push.apply(v,(0,d.Z)(h)),j((function(e){return N(N({},e),{},(0,c.Z)({},n,N(N({},e[n]),{},{layers:l})))}))),e.next=31;break;case 21:if(i.type!==u.bs.ESRI_FEATURE&&i.type!==u.bs.ESRI_DYNAMIC){e.next=31;break}return I=(0,u.RF)(i),k="".concat(I.mapService.options.url,"identify?")+"f=json&tolerance=7"+"&mapExtent=".concat(b.xmin,",").concat(b.ymin,",").concat(b.xmax,",").concat(b.ymax)+"&imageDisplay=".concat(y.x,",").concat(y.y,",96")+"&layers=visible:".concat(l[f].layer.id)+"&returnFieldName=true&sr=4326&returnGeometry=true"+"&geometryType=esriGeometryPoint&geometry=".concat(a.lng,",").concat(a.lat),e.next=26,fetch(k);case 26:return E=e.sent,e.next=29,E.json();case 29:(C=e.sent)&&C.results&&C.results.length>0&&(s.push((0,u.RF)({layer:l[f],entries:C.results})),(S=l[f].layerData).push.apply(S,(0,d.Z)(C.results)),j((function(e){return N(N({},e),{},(0,c.Z)({},n,N(N({},e[n]),{},{layers:l})))})));case 31:o++,e.next=4;break;case 34:case"end":return e.stop()}}),e)})),f=0;case 3:if(!(f<Object.keys(w).length)){e.next=8;break}return e.delegateYield(l(f),"t0",5);case 5:f++,e.next=3;break;case 8:p=null,1===s.length?(ie(s[0].layer),s[0]&&(p=te(s[0].layer.renderer,s[0].entries[0].attributes)),1===s[0].entries.length&&se((0,u.ZQ)({attributes:s[0].entries[0].attributes,displayField:s[0].layer.displayField,fieldAliases:s[0].layer.fieldAliases,symbol:te(s[0].layer.renderer,s[0].entries[0].attributes),numOfEntries:1}))):(s.length>0&&(p=te(s[0].layer.renderer,s[0].entries[0].attributes)),re()),J(a),null===(i=t.panel)||void 0===i||i.open(),y=document.querySelectorAll("[data-id=".concat(t.id,"]"))[0],r.event.emit((0,u.us)(o.MARKER_ICON.EVENT_MARKER_ICON_SHOW,n,a,p)),y&&(m=y.querySelectorAll(".cgpv-panel-close")[0])&&m.focus();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,t.panel,t.id,w,oe,ie,te,se,re]);return b((function(){var e=r.map(n).layer.layers,t={};Object.keys(e).forEach(function(){var n=(0,p.Z)(x().mark((function n(a){var r,i,s,l,o,c,f,d,y,m,b,g;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e[a],t[r.id]=(0,u.RF)({id:r.id,name:r.name,type:r.type,layer:r,layers:{}}),r.type!==u.bs.WMS){n.next=20;break}if(i=(0,u.RF)(r),!(s=i.entries)){n.next=18;break}l=0;case 7:if(!(l<s.length)){n.next=18;break}return o=s[l],n.next=11,ne(i.mapService.options.url+o);case 11:c=n.sent,f=i.getLegendGraphic(),c.drawingInfo&&c.drawingInfo.renderer&&c.drawingInfo.renderer.symbol&&Object.defineProperties(c.drawingInfo.renderer.symbol,{legendImageUrl:{value:f}}),le(r,t,c,!1);case 15:l++,n.next=7;break;case 18:n.next=29;break;case 20:if(r.type!==u.bs.ESRI_FEATURE){n.next=28;break}return d=(0,u.RF)(r),n.next=24,ne(d.url);case 24:y=n.sent,le(r,t,y,!1),n.next=29;break;case 28:r.type===u.bs.ESRI_DYNAMIC&&(m=(0,u.RF)(r),b=m.layer.getLayers(),g={},b.forEach((function(e){g[e]=e})),m.layer.metadata(function(){var e=(0,p.Z)(x().mark((function e(n,a){var i,s,l,o,c,u;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:if(!a.layers){e.next=25;break}i=0;case 4:if(!(i<a.layers.length)){e.next=25;break}if(!((s=a.layers[i]).id in g)){e.next=22;break}return e.next=9,ne(r.layer.options.url+s.id);case 9:if(l=e.sent,le(r,t,l,null!==s.subLayerIds&&void 0!==s.subLayerIds),!s.subLayerIds){e.next=22;break}o=0;case 13:if(!(o<s.subLayerIds.length)){e.next=22;break}return c=s.subLayerIds[o],e.next=17,ne(r.layer.options.url+c);case 17:u=e.sent,le(r,t,u,!1);case 19:o++,e.next=13;break;case 22:i++,e.next=4;break;case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 29:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),j(t)}),[]),b((function(){return ee.on("click",function(){var e=(0,p.Z)(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.originalEvent.shiftKey||ce(t.latlng);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.event.on(o.DETAILS_PANEL.EVENT_DETAILS_PANEL_CROSSHAIR_ENTER,(function(e){(0,u.FM)(e)&&e.handlerName===n&&ce(e.latLng)}),n),function(){ee.off("click"),r.event.off(o.DETAILS_PANEL.EVENT_DETAILS_PANEL_CROSSHAIR_ENTER,n)}}),[ce,n,ee]),(0,g.jsxs)("div",{className:X.mainContainer,children:[!L&&!W&&!U&&(0,g.jsx)("div",{children:$("click_map")}),L&&(0,g.jsx)(v,{clickPos:G,layersData:w,selectFeature:se,selectLayer:ie,getSymbol:te,mapId:n}),W&&(0,g.jsx)(k,{getSymbol:te,buttonPanel:t,selectLayer:ie,selectedLayer:_,selectFeature:se,setPanel:ae}),U&&(0,g.jsx)(E,{buttonPanel:t,selectedFeature:T,setPanel:ae})]})};function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,o.Z)(e);if(t){var r=(0,o.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,l.Z)(this,n)}}var _=window,O=function(e){(0,s.Z)(n,e);var t=P(n);function n(e,r){var s;return(0,a.Z)(this,n),s=t.call(this,e,r),(0,c.Z)((0,i.Z)(s),"translations",(0,u.ZQ)({"en-CA":{detailsPanel:"Details",nothing_found:"Nothing found",click_map:"Choose a point on the map to start",action_back:"Back"},"fr-CA":{detailsPanel:"Détails",nothing_found:"Aucun résultat",click_map:"Choisissez un point sur la carte pour commencer",action_back:"Retour"}})),(0,c.Z)((0,i.Z)(s),"added",(function(){var e,t,n=s.pluginProps.mapId,a=_.cgpv.api,r=a.map(n).language,i={id:"detailsPanelButton",tooltip:s.translations[r].detailsPanel,tooltipPlacement:"right",icon:'<i class="material-icons">details</i>',visible:!0,type:"icon"},l={title:s.translations[r].detailsPanel,icon:'<i class="material-icons">details</i>',width:300};s.buttonPanel=a.map(n).appBarButtons.createAppbarPanel(i,l,null),null===(e=s.buttonPanel)||void 0===e||null===(t=e.panel)||void 0===t||t.changeContent((0,g.jsx)(S,{buttonPanel:s.buttonPanel,mapId:n}))})),s.buttonPanel=null,s}return(0,r.Z)(n,[{key:"removed",value:function(){var e=this.pluginProps.mapId,t=_.cgpv.api;this.buttonPanel&&(t.map(e).appBarButtons.removeAppbarPanel(this.buttonPanel.id),t.event.emit((0,f.p)(t.eventNames.MARKER_ICON.EVENT_MARKER_ICON_HIDE,e)))}}]),n}(u.EV);_.plugins=_.plugins||{},_.plugins["details-panel"]=(0,u.RF)(O)}},e=>{var t;t=8281,e(e.s=t)}]);
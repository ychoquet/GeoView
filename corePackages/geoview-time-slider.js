/*! Package:geoview-time-slider: 0.1.0 - "a40017e8d8b106f7213838522f2de342d3b6d30f" - 2024-04-16T23:40:02.780Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{96026:(e,t,i)=>{i.d(t,{b:()=>f});var r=i(21137),n=i(80473),l=i(99906),o=i(32222),a=i(10705),s=i(4031),c=i(39933),u=i(16028);function d(e,t,i){return t=(0,o.A)(t),(0,l.A)(e,p()?Reflect.construct(t,i||[],(0,o.A)(e).constructor):t.apply(e,i))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var f=function(e){function t(){var e;(0,r.A)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return e=d(this,t,[].concat(n)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,a.A)(t,e),(0,n.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBarApi.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(c.G)},32169:(e,t,i)=>{var r=i(80473),n=i(21137),l=i(99906),o=i(32222),a=i(10705),s=i(4031),c=i(82069),u=i(3008),d=i(3799),p=i(96026),f=i(12612),m=i(75530),g=i(74871),h=i(3384),v=i(62541),y=i(16028),x=i(81997),w=i(74538),S=i(33728),b=i(97258),j=i(23652),A=i(37431),D=i(26166),P=i(20027),L=i(41288),T=i(64616),I=i(6865),k=i(89771),O=i(24937),E=i(46774),C=i(84494),F=i(59796),R=i(80678);const M=["className","children","classes","IconComponent","input","inputProps","variant"],V=["root"],N=(0,R.jsx)(E.A,{}),z=D.forwardRef((function(e,t){const i=(0,C.A)({name:"MuiNativeSelect",props:e}),{className:r,children:n,classes:l={},IconComponent:o=O.A,input:a=N,inputProps:s}=i,c=(0,A.A)(i,M),u=(0,k.A)(),d=(0,I.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,L.A)({root:["root"]},F.w,t)})((0,j.A)({},i,{classes:l})),f=(0,A.A)(l,V);return(0,R.jsx)(D.Fragment,{children:D.cloneElement(a,(0,j.A)({inputComponent:T.Ay,inputProps:(0,j.A)({children:n,classes:f,IconComponent:o,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,P.A)(p.root,a.props.className,r)}))})}));z.muiName="Select";const B=z;var H=i(85632),U=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function G(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function Q(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?G(Object(i),!0).forEach((function(t){(0,s.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):G(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function q(e){y.vF.logTraceRender("geoview-time-slider/time-slider",e);var t=window.cgpv,i=e.config,r=e.layerPath,n=e.mapId,l=t.api,o=t.react,a=t.ui,s=o.useState,c=o.useRef,u=o.useEffect,d=o.useCallback,p=a.elements,m=p.Grid,h=p.Slider,x=p.Typography,j=p.Checkbox,A=p.Tooltip,D=p.IconButton,P=p.LockIcon,L=p.LockOpenIcon,T=p.ArrowLeftIcon,I=p.PlayArrowIcon,k=p.PauseIcon,O=p.ArrowRightIcon,E=p.SwitchRightIcon,C=p.SwitchLeftIcon,F=(0,w.A)(),M=U(F),V=s(!1),N=(0,f.A)(V,2),z=N[0],G=N[1],q=c(),J=c(),K=c(),Y=(0,g.Gg)(),W=Y.setTitle,_=Y.setDefaultValue,X=Y.setDescription,$=Y.setValues,Z=Y.setLocked,ee=Y.setReversed,te=Y.setDelay,ie=Y.setFiltering,re=(0,v.t)(),ne=(0,g.ky)()[r],le=ne.title,oe=ne.description,ae=ne.name,se=ne.defaultValue,ce=ne.discreteValues,ue=ne.range,de=ne.minAndMax,pe=ne.field,fe=ne.fieldAlias,me=ne.filtering,ge=ne.singleHandle,he=ne.values,ve=ne.delay,ye=ne.locked,xe=ne.reversed;u((function(){var e;y.vF.logTraceUseEffect("TIME-SLIDER - mount");var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===le&&W(r,(0,H.getLocalizedValue)(null==t?void 0:t.title,re)||""),void 0===oe&&X(r,(0,H.getLocalizedValue)(null==t?void 0:t.description,re)||""),void 0===ye&&Z(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===xe&&ee(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===se&&_(r,(null==t?void 0:t.defaultValue)||"")}),[]),u((function(){var e;y.vF.logTraceUseEffect("TIME-SLIDER - config layerPath",i,r);var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?$(r,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):ue.includes(null==t?void 0:t.defaultValue)?$(r,[new Date(null==t?void 0:t.defaultValue).getTime()]):$(r,[new Date(ue[0]).getTime()]))}),[i,r,ue,ie,$]);var we,Se=ue.map((function(e){return new Date(e).getTime()})),be=de[1]-de[0],je=new Date(de[1]).getDate()-new Date(de[0]).getDate(),Ae=new Date(de[1]).getFullYear()-new Date(de[0]).getFullYear();0===je&&be<864e5?we="day":0===Ae&&(we="year");var De=[];if(ue.length<4&&ce){var Pe=(new Date(ue[ue.length-1]).getTime()-new Date(ue[0]).getTime())/4;De=[de[0],de[0]+Pe,de[0]+2*Pe,de[0]+3*Pe,de[1]]}else De=ue.length<6||ge?Se:[de[0],new Date(ue[Math.round(ue.length/4)]).getTime(),new Date(ue[Math.round(ue.length/2)]).getTime(),new Date(ue[Math.round(3*ue.length/4)]).getTime(),de[1]];for(var Le=[],Te=0;Te<De.length;Te++)Le.push({value:De[Te],label:we?"".concat("day"===we?new Date(De[Te]).toTimeString().split(" ")[0]:new Date(De[Te]).toISOString().slice(5,10)):new Date(De[Te]).toISOString().slice(0,10)});function Ie(){if(ge&&!ce){var e,t=Se.indexOf(he[0]);e=Se[t]===de[0]?Se.length-1:t-1,$(r,[Se[e]])}else if(ge){var i=(de[1]-de[0])/20,n=he[0]-i<de[0]?de[1]:he[0]-i;$(r,[n])}else{var l=(0,f.A)(he,2),o=l[0],a=l[1];if(!K.current){if(a-o>(de[1]-de[0])/5)return K.current=(de[1]-de[0])/5,void $(r,[a-K.current,a]);K.current=a-o}if(ye&&xe){if(o===de[0]&&(o=a),(o-=K.current)<de[0])o=(0,f.A)(de,1)[0]}else if(ye){if((a-=K.current)<o&&(a=o),a===o)a=(0,f.A)(de,2)[1]}else{if(a>J.current&&o===J.current?a=J.current:a-=K.current,a<=de[0])a=(0,f.A)(de,2)[1];if((o=a-K.current)<de[0])o=(0,f.A)(de,1)[0];o<J.current&&a>J.current&&(o=J.current)}$(r,[o,a])}}function ke(){if(ge&&!ce){var e,t=Se.indexOf(he[0]);e=Se[t]===de[1]?0:t+1,$(r,[Se[e]])}else if(ge){var i=(de[1]-de[0])/20,n=he[0]+i>de[1]?de[0]:he[0]+i;$(r,[n])}else{var l=(0,f.A)(he,2),o=l[0],a=l[1];if(!K.current){if(a-o>(de[1]-de[0])/5)return K.current=(de[1]-de[0])/5,void $(r,[o,o+K.current]);K.current=a-o}if(ye&&xe){if((o+=K.current)>=a)o=(0,f.A)(de,1)[0]}else if(ye){if(a===de[1]&&(a=o),(a+=K.current)>de[1])a=(0,f.A)(de,2)[1]}else{if(o<J.current&&a===J.current?o=J.current:o+=K.current,o>=de[1])o=(0,f.A)(de,1)[0];if((a=o+K.current)>de[1])a=(0,f.A)(de,2)[1];a>J.current&&o<J.current&&(a=J.current)}$(r,[o,a])}}function Oe(){return xe?ye?l.utilities.core.getLocalizedMessage("timeSlider.slider.unlockRight",re):l.utilities.core.getLocalizedMessage("timeSlider.slider.lockRight",re):ye?l.utilities.core.getLocalizedMessage("timeSlider.slider.unlockLeft",re):l.utilities.core.getLocalizedMessage("timeSlider.slider.lockLeft",re)}u((function(){y.vF.logTraceUseEffect("TIME-SLIDER - values filtering",he,me),z&&(q.current=xe?window.setTimeout((function(){return Ie()}),ve):window.setTimeout((function(){return ke()}),ve))}),[he,me,xe,ye]),u((function(){y.vF.logTraceUseEffect("TIME-SLIDER - isPlaying",z),z&&(xe?Ie():ke())}),[z]);var Ee=d((function(e){y.vF.logTraceUseCallback("TIME-SLIDER - handleSliderChange",r),clearTimeout(q.current),G(!1),K.current=void 0,$(r,e)}),[r,$]),Ce=d((function(e){return y.vF.logTraceUseCallback("TIME-SLIDER - handleLabelFormat",we),"day"===we?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===we?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}),[we]);return(0,R.jsx)(m,{children:(0,R.jsxs)("div",{style:M.rightPanelContainer,children:[(0,R.jsxs)(m,{container:!0,sx:M.rightPanelBtnHolder,children:[(0,R.jsx)(m,{item:!0,xs:9,children:(0,R.jsxs)(x,{component:"div",sx:Q(Q({},M.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(le||ae),void 0!==we&&" (".concat("day"===we?new Date(se).toLocaleDateString():new Date(se).getFullYear(),")")]})}),(0,R.jsx)(m,{item:!0,xs:3,children:(0,R.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,R.jsx)(A,{title:me?l.utilities.core.getLocalizedMessage("timeSlider.slider.disableFilter",re):l.utilities.core.getLocalizedMessage("timeSlider.slider.enableFilter",re),placement:"top",enterDelay:1e3,children:(0,R.jsx)(j,{checked:me,onChange:function(e,t){return ie(r,i=t),void(i||(clearInterval(q.current),G(!1)));var i}})})})})]}),(0,R.jsx)(m,{item:!0,xs:12,children:(0,R.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,R.jsx)(h,{sliderId:r,mapId:n,style:{width:"80%",color:"primary"},min:de[0],max:de[1],value:he,marks:Le,step:ce?.1:null,onChangeCommitted:Ee,onValueDisplay:Ce},he[1]?he[1]+he[0]:he[0])})}),(0,R.jsx)(m,{item:!0,xs:12,children:(0,R.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!ge&&(0,R.jsx)(D,{className:"style1","aria-label":Oe(),tooltip:Oe(),tooltipPlacement:"top",onClick:function(){return clearTimeout(q.current),void Z(r,!ye)},children:ye?(0,R.jsx)(P,{}):(0,R.jsx)(L,{})}),(0,R.jsx)(D,{className:"style1","aria-label":l.utilities.core.getLocalizedMessage("timeSlider.slider.back",re),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:z||!me,onClick:function(){return J.current=xe?he[1]:he[0],void Ie()},children:(0,R.jsx)(T,{})}),(0,R.jsx)(D,{className:"style1","aria-label":z?l.utilities.core.getLocalizedMessage("timeSlider.slider.pauseAnimation",re):l.utilities.core.getLocalizedMessage("timeSlider.slider.playAnimation",re),tooltip:z?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!me,onClick:function(){return clearTimeout(q.current),J.current=xe?he[1]:he[0],void G(!z)},children:z?(0,R.jsx)(k,{}):(0,R.jsx)(I,{})}),(0,R.jsx)(D,{className:"style1","aria-label":l.utilities.core.getLocalizedMessage("timeSlider.slider.forward",re),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:z||!me,onClick:function(){return e=(0,f.A)(he,1),J.current=e[0],void ke();var e},children:(0,R.jsx)(O,{})}),(0,R.jsx)(D,{className:"style1","aria-label":l.utilities.core.getLocalizedMessage("timeSlider.slider.changeDirection",re),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(q.current),ee(r,!xe),void(z&&(xe?Ie():ke()))},children:xe?(0,R.jsx)(E,{}):(0,R.jsx)(C,{})}),(0,R.jsxs)(S.A,{sx:{width:"150px"},children:[(0,R.jsx)(b.A,{variant:"standard",children:l.utilities.core.getLocalizedMessage("timeSlider.slider.timeDelay",re)}),(0,R.jsxs)(B,{defaultValue:ve,inputProps:{name:"timeDelay",onChange:function(e){return function(e){te(r,e.target.value)}(e)}},children:[(0,R.jsx)("option",{value:500,children:"0.5s"}),(0,R.jsx)("option",{value:750,children:"0.75s"}),(0,R.jsx)("option",{value:1e3,children:"1.0s"}),(0,R.jsx)("option",{value:1500,children:"1.5s"}),(0,R.jsx)("option",{value:2e3,children:"2.0s"}),(0,R.jsx)("option",{value:3e3,children:"3.0s"}),(0,R.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),oe&&(0,R.jsx)(m,{item:!0,xs:12,children:(0,R.jsx)(x,{component:"div",sx:{px:"20px",py:"5px"},children:oe})}),fe&&(0,R.jsx)(m,{item:!0,xs:12,children:(0,R.jsx)(x,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(fe," (").concat(pe,")")})})]})})}function J(e){var t=e.mapId,i=e.configObj,r=window.cgpv.react,n=r.useState,l=r.useCallback,o=r.useMemo,a=r.useEffect,s=n(),c=(0,f.A)(s,2),u=c[0],p=c[1],w=(0,h.wE)(),S=(0,g.ky)(),b=(0,v.DR)(),j=l((function(e){y.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),p(e.layerPath)}),[]),A=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},D=o((function(){y.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",S);return w.map((function(e){return{layerPath:e,timeSliderLayerInfo:S[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,layerFeatures:A(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,(0,R.jsxs)(d.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[t.name,t.filtering&&": ".concat(A(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t}))}),[S,w]);return a((function(){y.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",D,u),u&&!D.map((function(e){return e.layerPath})).includes(u)&&p("")}),[D,u]),(0,R.jsxs)(m.PE,{selectedLayerPath:u,onLayerListClicked:j,layerList:D,children:[u&&(0,R.jsx)(q,{mapId:t,config:i,layerPath:u},u),!u&&(0,R.jsx)(d.Paper,{sx:{padding:"2rem"},children:(0,R.jsx)(d.Box,{className:"guideBox",children:(0,R.jsx)(x.Ay,{options:{wrapper:"article"},children:b.footerPanel.children.timeSlider.content})})})]})}const K=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),Y=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function W(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?W(Object(i),!0).forEach((function(t){(0,s.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):W(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function X(e,t,i){return t=(0,o.A)(t),(0,l.A)(e,$()?Reflect.construct(t,i||[],(0,o.A)(e).constructor):t.apply(e,i))}function $(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return($=function(){return!!e})()}var Z=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return e=X(this,t,[].concat(r)),(0,s.A)(e,"schema",(function(){return K})),(0,s.A)(e,"defaultConfig",(function(){return(0,c.NK)(Y)})),(0,s.A)(e,"translations",(0,c.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"}}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"}}}})),(0,s.A)(e,"onCreateContentProps",(function(){return e.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:u.FHQ.utilities.date.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var r=t.layerPaths[0],n=u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(r).layerTemporalDimension[r];u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(r).setTemporalDimension(r,_(_({},n),{},{default:t.defaultValue}))}})),{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,R.jsx)(d.TimeSliderIcon,{}),content:(0,R.jsx)(J,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,a.A)(t,e),(0,r.A)(t)}(p.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,c.KX)(Z)}},e=>{var t;t=32169,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map
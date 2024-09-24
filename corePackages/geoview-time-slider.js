/*! Package:geoview-time-slider: 1.0.0 - "8a6e0969e4d75f5961ee93083f5542f88febcf2c" - 2024-09-24T13:59:49.725Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{3416:(e,t,i)=>{i.d(t,{b:()=>p});var r=i(13718),n=i(47280),a=i(75583),l=i(96645),o=i(94270),s=i(42432),c=i(87139),u=i(25822);function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}var p=function(e){function t(){var e,i,n,o;(0,r.A)(this,t);for(var c=arguments.length,u=new Array(c),p=0;p<c;p++)u[p]=arguments[p];return i=this,n=t,o=[].concat(u),n=(0,l.A)(n),e=(0,a.A)(i,d()?Reflect.construct(n,o||[],(0,l.A)(i).constructor):n.apply(i,o)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,o.A)(t,e),(0,n.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){this.value=this.mapViewer().footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),this.mapViewer().footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&null!==(e=this.mapViewer())&&void 0!==e&&e.footerBarApi&&this.mapViewer().footerBarApi.removeTab(this.footerProps.id)}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(c.G)},93689:(e,t,i)=>{var r=i(13718),n=i(47280),a=i(75583),l=i(96645),o=i(6620),s=i(94270),c=i(42432),u=i(48407),d=i(65933),p=i(20642),f=i(3416),m=i(55251),g=i(7994),h=i(90937),v=i(77994),y=i(43057),w=i(10297),x=i(25822),b=i(47920),S=i(55907),j=i(53458),P=i(51144),L=i(78962),D=i(30538),A=i(87286),T=i(94329),k=i(93856),I=i(13897),O=i(60899),E=i(33393),C=i(98174),F=i(8438),V=i(11388),R=i(97282);const M=(0,R.jsx)(C.A,{}),N=D.forwardRef((function(e,t){const i=(0,F.A)({name:"MuiNativeSelect",props:e}),{className:r,children:n,classes:a={},IconComponent:l=E.A,input:o=M,inputProps:s,variant:c,...u}=i,d=(0,O.A)(),p=(0,I.A)({props:i,muiFormControl:d,states:["variant"]}),f=(e=>{const{classes:t}=e;return(0,T.A)({root:["root"]},V.w,t)})({...i,classes:a}),{root:m,...g}=a;return(0,R.jsx)(D.Fragment,{children:D.cloneElement(o,{inputComponent:k.Ay,inputProps:{children:n,classes:g,IconComponent:l,variant:p.variant,type:void 0,...s,...o?o.props.inputProps:{}},ref:t,...u,className:(0,A.A)(f.root,o.props.className,r)})})}));N.muiName="Select";const B=N;var z=i(73914),G=i(53223);function U(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function H(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?U(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):U(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function K(e){x.vF.logTraceRender("geoview-time-slider/time-slider",e);var t=window.cgpv,i=e.config,r=e.layerPath,n=e.mapId,a=t.react,l=t.ui,o=a.useState,s=a.useRef,c=a.useEffect,u=a.useCallback,d=l.elements,f=d.Grid,m=d.Slider,g=d.Typography,v=d.Checkbox,b=d.Tooltip,D=d.IconButton,A=d.LockIcon,T=d.LockOpenIcon,k=d.ArrowLeftIcon,I=d.PlayArrowIcon,O=d.PauseIcon,E=d.ArrowRightIcon,C=d.SwitchRightIcon,F=d.SwitchLeftIcon,V=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"}}}((0,j.A)()),M=o(!1),N=(0,S.A)(M,2),U=N[0],K=N[1],Y=s(),q=s(),_=s(),J=(0,h.Gg)(),W=J.setTitle,X=J.setDefaultValue,$=J.setDescription,Q=J.setValues,Z=J.setLocked,ee=J.setReversed,te=J.setDelay,ie=J.setFiltering,re=(0,G.t)(),ne=(0,h.ky)()[r],ae=ne.title,le=ne.description,oe=ne.defaultValue,se=ne.discreteValues,ce=ne.range,ue=ne.minAndMax,de=ne.field,pe=ne.fieldAlias,fe=ne.filtering,me=ne.singleHandle,ge=ne.values,he=ne.delay,ve=ne.locked,ye=ne.reversed,we=(0,y.Yo)(),xe=w.K.findLayerByPath(we,r).layerName;c((function(){var e;x.vF.logTraceUseEffect("TIME-SLIDER - mount");var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===ae&&W(r,(0,z.getLocalizedValue)(null==t?void 0:t.title,re)||""),void 0===le&&$(r,(0,z.getLocalizedValue)(null==t?void 0:t.description,re)||""),void 0===ve&&Z(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===ye&&ee(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===oe&&X(r,(null==t?void 0:t.defaultValue)||"")}),[]),c((function(){var e;x.vF.logTraceUseEffect("TIME-SLIDER - config layerPath",i,r);var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?Q(r,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):ce.includes(null==t?void 0:t.defaultValue)?Q(r,[new Date(null==t?void 0:t.defaultValue).getTime()]):Q(r,[new Date(ce[0]).getTime()]))}),[i,r,ce,ie,Q]);var be,Se=ce.map((function(e){return new Date(e).getTime()})),je=ue[1]-ue[0],Pe=new Date(ue[1]).getDate()-new Date(ue[0]).getDate(),Le=new Date(ue[1]).getFullYear()-new Date(ue[0]).getFullYear();0===Pe&&je<864e5?be="day":0===Le&&(be="year");var De=[];if(ce.length<4&&se){var Ae=(new Date(ce[ce.length-1]).getTime()-new Date(ce[0]).getTime())/4;De=[ue[0],ue[0]+Ae,ue[0]+2*Ae,ue[0]+3*Ae,ue[1]]}else De=ce.length<6||me?Se:[ue[0],new Date(ce[Math.round(ce.length/4)]).getTime(),new Date(ce[Math.round(ce.length/2)]).getTime(),new Date(ce[Math.round(3*ce.length/4)]).getTime(),ue[1]];for(var Te=[],ke=0;ke<De.length;ke++)Te.push({value:De[ke],label:be?"".concat("day"===be?new Date(De[ke]).toTimeString().split(" ")[0]:new Date(De[ke]).toISOString().slice(5,10)):new Date(De[ke]).toISOString().slice(0,10)});function Ie(){if(me&&!se){var e,t=Se.indexOf(ge[0]);e=Se[t]===ue[0]?Se.length-1:t-1,Q(r,[Se[e]])}else if(me){var i=(ue[1]-ue[0])/20,n=ge[0]-i<ue[0]?ue[1]:ge[0]-i;Q(r,[n])}else{var a=(0,S.A)(ge,2),l=a[0],o=a[1];if(o-l==ue[1]-ue[0])return _.current=(ue[1]-ue[0])/10,void Q(r,[o-_.current,o]);if(_.current||(_.current=o-l),ve&&ye){if(l===ue[0]&&(l=o),(l-=_.current)<ue[0])l=(0,S.A)(ue,1)[0]}else if(ve){if((o-=_.current)<l&&(o=l),o===l)o=(0,S.A)(ue,2)[1]}else{if(o>q.current&&l===q.current?o=q.current:o-=_.current,o<=ue[0])o=(0,S.A)(ue,2)[1];if((l=o-_.current)<ue[0])l=(0,S.A)(ue,1)[0];l<q.current&&o>q.current&&(l=q.current)}Q(r,[l,o])}}function Oe(){if(me&&!se){var e,t=Se.indexOf(ge[0]);e=Se[t]===ue[1]?0:t+1,Q(r,[Se[e]])}else if(me){var i=(ue[1]-ue[0])/20,n=ge[0]+i>ue[1]?ue[0]:ge[0]+i;Q(r,[n])}else{var a=(0,S.A)(ge,2),l=a[0],o=a[1];if(o-l==ue[1]-ue[0])return _.current=(ue[1]-ue[0])/10,void Q(r,[l,l+_.current]);if(_.current||(_.current=o-l),ve&&ye){if((l+=_.current)>=o)l=(0,S.A)(ue,1)[0]}else if(ve){if(o===ue[1]&&(o=l),(o+=_.current)>ue[1])o=(0,S.A)(ue,2)[1]}else{if(l<q.current&&o===q.current?l=q.current:l+=_.current,l>=ue[1])l=(0,S.A)(ue,1)[0];if((o=l+_.current)>ue[1])o=(0,S.A)(ue,2)[1];o>q.current&&l<q.current&&(o=q.current)}Q(r,[l,o])}}function Ee(){return ye?ve?(0,z.getLocalizedMessage)("timeSlider.slider.unlockRight",re):(0,z.getLocalizedMessage)("timeSlider.slider.lockRight",re):ve?(0,z.getLocalizedMessage)("timeSlider.slider.unlockLeft",re):(0,z.getLocalizedMessage)("timeSlider.slider.lockLeft",re)}c((function(){x.vF.logTraceUseEffect("TIME-SLIDER - values filtering",ge,fe),U&&(Y.current=ye?window.setTimeout((function(){return Ie()}),he):window.setTimeout((function(){return Oe()}),he))}),[ge,fe,ye,ve]),c((function(){x.vF.logTraceUseEffect("TIME-SLIDER - isPlaying",U),U&&(ye?Ie():Oe())}),[U]);var Ce=u((function(e){x.vF.logTraceUseCallback("TIME-SLIDER - handleSliderChange",r),clearTimeout(Y.current),K(!1),_.current=void 0,Q(r,e)}),[r,Q]),Fe=u((function(e){return x.vF.logTraceUseCallback("TIME-SLIDER - handleLabelFormat",be),"day"===be?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===be?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}),[be]);return(0,R.jsx)(f,{children:(0,R.jsxs)("div",{children:[(0,R.jsxs)(f,{container:!0,sx:V.rightPanelBtnHolder,children:[(0,R.jsx)(f,{item:!0,xs:9,children:(0,R.jsxs)(g,{component:"div",sx:H(H({},V.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(ae||xe),void 0!==be&&" (".concat("day"===be?new Date(oe).toLocaleDateString():new Date(oe).getFullYear(),")")]})}),(0,R.jsx)(f,{item:!0,xs:3,children:(0,R.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,R.jsx)(b,{title:fe?(0,z.getLocalizedMessage)("timeSlider.slider.disableFilter",re):(0,z.getLocalizedMessage)("timeSlider.slider.enableFilter",re),placement:"top",enterDelay:1e3,children:(0,R.jsx)(v,{checked:fe,onChange:function(e,t){return ie(r,i=t),void(i||(clearInterval(Y.current),K(!1)));var i}})})})})]}),(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,R.jsx)(m,{sliderId:r,mapId:n,style:{width:"80%",color:"primary"},min:ue[0],max:ue[1],value:ge,marks:Te,step:se?.1:null,onChangeCommitted:Ce,onValueDisplay:Fe},ge[1]?ge[1]+ge[0]:ge[0])})}),(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!me&&(0,R.jsx)(D,{className:"buttonOutline","aria-label":Ee(),tooltip:Ee(),tooltipPlacement:"top",onClick:function(){return clearTimeout(Y.current),void Z(r,!ve)},children:ve?(0,R.jsx)(A,{}):(0,R.jsx)(T,{})}),(0,R.jsx)(D,{className:"buttonOutline","aria-label":(0,z.getLocalizedMessage)("timeSlider.slider.back",re),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:U||!fe,onClick:function(){return q.current=ye?ge[1]:ge[0],void Ie()},children:(0,R.jsx)(k,{})}),(0,R.jsx)(D,{className:"buttonOutline","aria-label":U?(0,z.getLocalizedMessage)("timeSlider.slider.pauseAnimation",re):(0,z.getLocalizedMessage)("timeSlider.slider.playAnimation",re),tooltip:U?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!fe,onClick:function(){return clearTimeout(Y.current),q.current=ye?ge[1]:ge[0],void K(!U)},children:U?(0,R.jsx)(O,{}):(0,R.jsx)(I,{})}),(0,R.jsx)(D,{className:"buttonOutline","aria-label":(0,z.getLocalizedMessage)("timeSlider.slider.forward",re),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:U||!fe,onClick:function(){return e=(0,S.A)(ge,1),q.current=e[0],void Oe();var e},children:(0,R.jsx)(E,{})}),(0,R.jsx)(D,{className:"buttonOutline","aria-label":(0,z.getLocalizedMessage)("timeSlider.slider.changeDirection",re),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(Y.current),ee(r,!ye),void(U&&(ye?Ie():Oe()))},children:ye?(0,R.jsx)(C,{}):(0,R.jsx)(F,{})}),(0,R.jsx)(p.Box,{component:"span",sx:{paddingLeft:"10px"},children:(0,R.jsxs)(P.A,{sx:{width:"150px"},children:[(0,R.jsx)(L.A,{variant:"standard",children:(0,z.getLocalizedMessage)("timeSlider.slider.timeDelay",re)}),(0,R.jsxs)(B,{defaultValue:he,inputProps:{name:"timeDelay",onChange:function(e){return function(e){te(r,e.target.value)}(e)}},children:[(0,R.jsx)("option",{value:500,children:"0.5s"}),(0,R.jsx)("option",{value:750,children:"0.75s"}),(0,R.jsx)("option",{value:1e3,children:"1.0s"}),(0,R.jsx)("option",{value:1500,children:"1.5s"}),(0,R.jsx)("option",{value:2e3,children:"2.0s"}),(0,R.jsx)("option",{value:3e3,children:"3.0s"}),(0,R.jsx)("option",{value:5e3,children:"5.0s"})]})]})})]})}),le&&(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:le})}),pe&&(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat((0,z.getLocalizedMessage)("timeSlider.slider.temporalField",re)).concat(pe," (").concat(de,")")})})]})})}function Y(e){var t=e.mapId,i=e.configObj,r=window.cgpv.react,n=r.useCallback,a=r.useMemo,l=r.useEffect,o=(0,v.wE)(),s=(0,h.ky)(),c=(0,h.h4)(),u=(0,h.Gg)().setSelectedLayerPath,d=(0,y.Yo)(),f=n((function(e){x.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),u(e.layerPath)}),[u]),m=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},S=a((function(){x.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",s);return o.map((function(e){return{layerPath:e,timeSliderLayerInfo:s[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:w.K.findLayerByPath(d,e.layerPath).layerName,layerPath:e.layerPath,layerFeatures:m(e.timeSliderLayerInfo),tooltip:(i=e.timeSliderLayerInfo,r=w.K.findLayerByPath(d,e.layerPath).layerName,(0,R.jsxs)(p.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[r,i.filtering&&": ".concat(m(i))]})),layerStatus:"loaded",queryStatus:"processed",layerUniqueId:"".concat(t,"-").concat(b.DF.TIME_SLIDER,"-").concat(e.layerPath)};var i,r}))}),[d,s,o,t]);l((function(){x.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",S,c),c&&!S.map((function(e){return e.layerPath})).includes(c)&&u("")}),[S,c,u]);var j=n((function(e){e&&u("")}),[u]);return(0,R.jsx)(g.PE,{selectedLayerPath:c,onLayerListClicked:f,layerList:S,onGuideIsOpen:j,guideContentIds:["timeSlider"],children:c?(0,R.jsx)(K,{mapId:t,config:i,layerPath:c},c):null})}const q=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}}},"required":["sliders"]}'),_={sliders:[]};function J(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function W(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?J(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):J(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function X(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(X=function(){return!!e})()}function $(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.add(e)}var Q=new WeakSet,Z=function(e){function t(){var e,i,n,o;(0,r.A)(this,t);for(var s=arguments.length,d=new Array(s),p=0;p<s;p++)d[p]=arguments[p];return i=this,n=t,o=[].concat(d),n=(0,l.A)(n),$(e=(0,a.A)(i,X()?Reflect.construct(n,o||[],(0,l.A)(i).constructor):n.apply(i,o)),Q),(0,c.A)(e,"translations",(0,u.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay",temporalField:"Temporal Field: "}}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation",temporalField:"Champ temporel: "}}}})),e}return(0,s.A)(t,e),(0,n.A)(t,[{key:"schema",value:function(){return q}},{key:"defaultConfig",value:function(){return(0,u.NK)(_)}},{key:"onCreateContentProps",value:function(){var e=this;return this.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i,r={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:d.P.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};null===(i=e.mapViewer().layer.getGeoviewLayerHybrid(t.layerPaths[0]))||void 0===i||i.setTemporalDimension(t.layerPaths[0],r)}if(t.defaultValue){var n,a,l=t.layerPaths[0],o=null===(n=e.mapViewer().layer.getGeoviewLayerHybrid(l))||void 0===n?void 0:n.getTemporalDimension(l);if(o)null===(a=e.mapViewer().layer.getGeoviewLayerHybrid(l))||void 0===a||a.setTemporalDimension(l,W(W({},o),{},{default:t.defaultValue}))}})),{id:"time-slider",value:this.value,label:"timeSlider.title",icon:(0,R.jsx)(p.TimeSliderIcon,{}),content:(0,R.jsx)(Y,{mapId:this.pluginProps.mapId,configObj:this.configObj})}}},{key:"onAdd",value:function(){var e,i,r,n,a,s=this;this.mapViewer().mapLayersLoaded?this.initTimeSliderPlugin():this.mapViewer().onMapLayersLoaded((function(){s.initTimeSliderPlugin()})),(e=t,i="onAdd",r=this,n=3,a=(0,o.A)((0,l.A)(1&n?e.prototype:e),i,r),2&n&&"function"==typeof a?function(e){return a.apply(r,e)}:a)([])}},{key:"initTimeSliderPlugin",value:function(){var e=this,t=this.mapViewer().layer.getLayerEntryConfigIds(),i=function(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i;throw new TypeError("Private element is not present on this object")}(Q,this,ee).call(this,t);i&&i.forEach((function(t){var i=e.mapViewer().layer.getLayerEntryConfig(t);m.t.checkInitTimeSliderLayerAndApplyFilters(e.pluginProps.mapId,i)}))}}])}(f.b);function ee(e){var t=this;return e.filter((function(e){var i;return null===(i=t.mapViewer().layer.getGeoviewLayerHybrid(e))||void 0===i?void 0:i.getTemporalDimension(e)}))}window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KX)(Z)}},e=>{var t;t=93689,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map
function getMapElement(e){const t=document.getElementsByClassName("geoview-map");for(let l=0;l<t.length;l+=1)if(t[l].getAttribute("id")===e)return t[l]}function listenToLegendLayerSetChanges(e,t){const l=t.split("/")[0];cgpv.api.maps[l].layer.legendsLayerSet.onLayerSetUpdated(((t,l)=>{const{resultSet:a}=l,n='<table class="state"><tr class="state"><th class="state">Name</th><th class="state">Status</th></tr>',d=document.getElementById(e),i=Object.keys(a).reduce(((e,t)=>{const l=a[t]?.layerName||"",{layerStatus:n}=a[t];return`${e}<tr class="state"><td class="state">${l}</td><td class="state">${n}</td></tr>`}),n);d.innerHTML=i&&i!==n?`${i}</table>`:""}))}const addBoundsPolygon=(e,t)=>{const l=cgpv.api.projection.transformAndDensifyExtent(t,`EPSG:${cgpv.api.maps[e].getMapState().currentProjection}`,"EPSG:4326"),{geometry:a}=cgpv.api.maps[e].layer;a.setActiveGeometryGroup(),a.deleteGeometriesFromGroup(0);cgpv.api.maps[e].layer.geometry.addPolygon([l],{style:{strokeColor:"#000",strokeWidth:5,strokeOpacity:.8}})},createInfoTable=(e,t,l,a)=>{if(!["click","all-features"].includes(a))return;const n=document.getElementById(`${t}-${a}`);n.textContent="";const d=document.getElementById(`layer${e.slice(-1)}-${a}-info`);d&&d.remove();const i=document.createElement("div");i.id=`layer${e.slice(-1)}-${a}-info`,n.appendChild(i),Object.keys(l).forEach((t=>{const a=l[t].data.features,n=document.createElement("h1");if(n.innerText=a?a?.length?t:`${t} (empty)`:`${t} (error)`,i.appendChild(n),a?.length){let t=document.createElement("h2");t.innerText="Aliases and types",i.appendChild(t);let l=document.createElement("table");l.classList.add("info"),i.appendChild(l);let n=document.createElement("tr");n.classList.add("info"),l.appendChild(n);let d=document.createElement("th");d.classList.add("infoCol1"),n.appendChild(d),Object.keys(a[0].fieldInfo).forEach((e=>{d=document.createElement("th"),d.classList.add("info"),d.innerText=e,n.appendChild(d)})),n=document.createElement("tr"),n.classList.add("info"),l.appendChild(n),d=document.createElement("td"),d.classList.add("infoCol1"),d.innerText="Aliases =>",n.appendChild(d),Object.keys(a[0].fieldInfo).forEach((e=>{d=document.createElement("td"),d.classList.add("info"),d.innerText=a[0].fieldInfo[e].alias,n.appendChild(d)})),n=document.createElement("tr"),n.classList.add("infoCol1"),l.appendChild(n),d=document.createElement("td"),d.classList.add("infoCol1"),d.innerText="Types =>",n.appendChild(d),Object.keys(a[0].fieldInfo).forEach((e=>{d=document.createElement("td"),d.classList.add("info"),d.innerText=a[0].fieldInfo[e].dataType,n.appendChild(d)})),t=document.createElement("h2"),t.innerText="Data",i.appendChild(t),l=document.createElement("table"),l.classList.add("info"),i.appendChild(l);let s=!0;a.forEach((t=>{s&&(n=document.createElement("tr"),n.classList.add("info"),l.appendChild(n),d=document.createElement("th"),d.classList.add("infoCol1"),d.innerText="Symbology",n.appendChild(d),d=document.createElement("th"),d.classList.add("infoCol1"),d.innerText="Zoom To",n.appendChild(d),Object.keys(t.fieldInfo).forEach((e=>{d=document.createElement("th"),d.classList.add("info"),d.innerText=e,n.appendChild(d)})),s=!1),n=document.createElement("tr"),n.classList.add("info"),l.appendChild(n),d=document.createElement("td"),d.classList.add("info"),d.appendChild(t.featureIcon),n.appendChild(d),d=document.createElement("td"),d.classList.add("info"),n.appendChild(d);const a=document.createElement("button");a.innerText="Zoom To Feature",a.addEventListener("click",(l=>{cgpv.api.maps[e].zoomToExtent(t.extent),addBoundsPolygon(e,t.extent)})),d.appendChild(a),Object.keys(t.fieldInfo).forEach((e=>{if(d=document.createElement("td"),d.classList.add("info"),"date"===t.fieldInfo[e].dataType){const{dateUtilities:l}=cgpv.api;d.innerText=t.fieldInfo[e].value}else d.innerText=t.fieldInfo[e].value;n.appendChild(d)}))}))}i.appendChild(document.createElement("br")),i.appendChild(document.createElement("hr"))}))},createTableOfFilter=e=>{let t=document.getElementById(`layer${e.slice(-1)}-buttons-pre`);const l=document.getElementById(`layer${e.slice(-1)}-buttons-table`);l&&l.remove();const a=document.createElement("table");a.id=`layer${e.slice(-1)}-buttons-table`,a.style.width="100%",a.border="1px solid black",t.appendChild(a),cgpv.api.maps?.[e]?.layer?.geoviewLayers&&Object.keys(cgpv.api.maps[e].layer.geoviewLayers).forEach((l=>{const n=cgpv.api.maps[e].layer.geoviewLayers[l];Object.keys(cgpv.api.maps[e].layer.registeredLayers).forEach((d=>{if(d.startsWith(l)){const l=cgpv.api.maps[e].layer.registeredLayers[d],{geoviewRenderer:i}=cgpv.api.maps[e];i.getLegendStyles(l).then((i=>{t=document.createElement("td"),t.border="1px solid black",a.appendChild(t);const s=document.createElement("h1");s.innerText=n.geoviewLayerName.en,t.appendChild(s);const o=document.createElement("h2");o.innerText=`${l?.layerName?.en}`,o.style.height="15px",t.appendChild(o);const r=document.createElement("button");let c=n.getVisible(d);r.innerText=c?void 0===l?.source?.style?"Hide":`Hide style ${l.source.style}`:void 0===l?.source?.style?"Show":`Show style ${l.source.style}`,r.addEventListener("click",(e=>{c=!n.getVisible(d),r.innerText=c?void 0===l?.source?.style?"Hide":`Hide style ${l.source.style}`:void 0===l?.source?.style?"Show":`Show style ${l.source.style}`,n.setVisible(c,d)})),o.appendChild(r),l.style&&Object.keys(l.style).forEach((a=>{const s=document.createElement("p");if(s.innerText=`Geometry = ${a}`,s.style.height="15px",t.appendChild(s),"uniqueValue"===l.style[a].styleType){if(l.style[a].defaultSettings){const s=document.createElement("button");!0===l.style[a].defaultVisible?s.innerText=`Hide ${l.style[a].defaultLabel}`:!1===l.style[a].defaultVisible&&(s.innerText=`Show ${l.style[a].defaultLabel}`),s.addEventListener("click",(t=>{!0===l.style[a].defaultVisible?(l.style[a].defaultVisible=!1,s.innerText=`Show ${l.style[a].defaultLabel}`):!1===l.style[a].defaultVisible&&(l.style[a].defaultVisible=!0,s.innerText=`Hide ${l.style[a].defaultLabel}`);const i=document.getElementById(`checkbox-${e}-${n.geoviewLayerId}`),o=document.getElementById(`filter-input-${e}-${n.geoviewLayerId}`),r="true"===i.value?o.value:n.getLayerFilter(d);n.applyViewFilter(d,r,"true"!==i.value)})),t.appendChild(s),t.appendChild(i[a].defaultCanvas);const o=document.createElement("br");o.style.height="1px",t.appendChild(o)}for(let s=0;s<l.style[a].uniqueValueStyleInfo.length;s++){const o=document.createElement("button");!0===l.style[a].uniqueValueStyleInfo[s].visible?o.innerText=`Hide ${l.style[a].uniqueValueStyleInfo[s].label}`:!1===l.style[a].uniqueValueStyleInfo[s].visible&&(o.innerText=`Show ${l.style[a].uniqueValueStyleInfo[s].label}`),o.addEventListener("click",(t=>{const i=l.style[a].uniqueValueStyleInfo[s];!0===i.visible?(i.visible=!1,o.innerText=`Show ${i.label}`):!1===i.visible&&(i.visible=!0,o.innerText=`Hide ${i.label}`);const r=document.getElementById(`checkbox-${e}-${n.geoviewLayerId}`),c=document.getElementById(`filter-input-${e}-${n.geoviewLayerId}`),p="true"===r.value?c.value:n.getLayerFilter(d);n.applyViewFilter(d,p,"true"!==r.value)})),t.appendChild(o),t.appendChild(i[a].arrayOfCanvas[s]);const r=document.createElement("br");r.style.height="1px",t.appendChild(r)}}else if("classBreaks"===l.style[a].styleType){if(l.style[a].defaultSettings){const i=document.createElement("button");!0===l.style[a].defaultVisible?i.innerText=`Hide ${l.style[a].defaultLabel}`:!1===l.style[a].defaultVisible&&(i.innerText=`Show ${l.style[a].defaultLabel}`),i.addEventListener("click",(t=>{!0===l.style[a].defaultVisible?(l.style[a].defaultVisible=!1,i.innerText=`Show ${l.style[a].defaultLabel}`):!1===l.style[a].defaultVisible&&(l.style[a].defaultVisible=!0,i.innerText=`Hide ${l.style[a].defaultLabel}`);const s=document.getElementById(`checkbox-${e}-${n.geoviewLayerId}`),o=document.getElementById(`filter-input-${e}-${n.geoviewLayerId}`),r="true"===s.value?o.value:n.getLayerFilter(d);n.applyViewFilter(d,r,"true"!==s.value)})),t.appendChild(i);const s=document.createElement("br");s.style.height="1px",t.appendChild(s)}for(let s=0;s<l.style[a].classBreakStyleInfo.length;s++){const o=document.createElement("button");!0===l.style[a].classBreakStyleInfo[s].visible?o.innerText=`Hide ${l.style[a].classBreakStyleInfo[s].label}`:!1===l.style[a].classBreakStyleInfo[s].visible&&(o.innerText=`Show ${l.style[a].classBreakStyleInfo[s].label}`),o.addEventListener("click",(t=>{const i=l.style[a].classBreakStyleInfo[s];!0===i.visible?(i.visible=!1,o.innerText=`Show ${i.label}`):!1===i.visible&&(i.visible=!0,o.innerText=`Hide ${i.label}`);const r=document.getElementById(`checkbox-${e}-${n.geoviewLayerId}`),c=document.getElementById(`filter-input-${e}-${n.geoviewLayerId}`),p="true"===r.value?c.value:n.getLayerFilter(d);n.applyViewFilter(d,p,"true"!==r.value)})),t.appendChild(o),t.appendChild(i[a].arrayOfCanvas[s]);const r=document.createElement("br");r.style.height="1px",t.appendChild(r)}}if(n.getLayerFilter(d)){const l=document.createElement("p");l.innerText="Extra filter: ",t.appendChild(l);const a=document.createElement("input");a.id=`filter-input-${e}-${n.geoviewLayerId}`,a.style.width="50%",l.appendChild(a),a.value=n.getLayerFilter(d)||"";const i=document.createElement("button");i.addEventListener("click",(t=>{const l=document.getElementById(`checkbox-${e}-${n.geoviewLayerId}`);n.applyViewFilter(d,a.value,"true"!==l.value)})),i.innerText="Apply",l.style.width="max-content",l.appendChild(i);const s=document.createElement("input");s.type="checkbox",s.value="false",s.id=`checkbox-${e}-${n.geoviewLayerId}`,s.addEventListener("click",(e=>{s.value="true"===s.value?"false":"true",n.applyViewFilter(d,a.value,"true"!==s.value)})),t.appendChild(s);const o=document.createElement("label");o.innerText="apply only the extra filter",t.appendChild(o)}}))}))}}))}))};function displayLegend(e,t){const l=(e,t)=>{const l=document.createElement("th");l.style="text-align: center; vertical-align: middle;",l.innerHTML=e,t.appendChild(l)},a=(e,t)=>{const l=document.createElement("td");l.style.verticalAlign="middle",l.style.textAlign="center",e?"string"==typeof e?l.innerHTML=e.replaceAll("<","&lt;").replaceAll(">","&gt;"):l.appendChild(e):l.innerHTML="NO LEGEND",t.appendChild(l)},n=document.getElementById(`${e}-table`);n&&n.parentNode.removeChild(n);const d=document.getElementById(`${e}-table-pre`),i=document.createElement("table");i.id=`${e}-table`,i.border="1",i.style="width:50%",d.appendChild(i);let s=!0;Object.keys(t).forEach((e=>{const n=t[e];if(s){s=!1;const e=document.createElement("tr");i.appendChild(e),l("Layer Path",e),l("Status/Label",e),l("Symbology",e)}if(n?.data?.legend)if("ogcWms"===n.data?.type||"imageStatic"===n.data?.type){const e=document.createElement("tr");a(n.data.layerPath,e),a(n.layerStatus,e),a(n.data.legend,e),i.appendChild(e)}else{const t=(e,t,l)=>{const n=document.createElement("tr");a(e,n),a(t,n),a(l,n),i.appendChild(n)};n.data?.legend&&Object.keys(n.data.legend).forEach((l=>{if(l)if("uniqueValue"===n.data.styleConfig[l].styleType){n.data.legend[l].defaultCanvas&&t(e,n.data.styleConfig[l].defaultLabel,n.data.legend[l].defaultCanvas);for(let a=0;a<n.data.legend[l].arrayOfCanvas.length;a++)t(e,n.data.styleConfig[l].uniqueValueStyleInfo[a].label,n.data.legend[l].arrayOfCanvas[a])}else if("classBreaks"===n.data.styleConfig[l].styleType){n.data.legend[l].defaultCanvas&&t(e,n.data.styleConfig[l].defaultLabel,n.data.legend[l].defaultCanvas);for(let a=0;a<n.data.legend[l].arrayOfCanvas.length;a++)t(e,n.data.styleConfig[l].classBreakStyleInfo[a].label,n.data.legend[l].arrayOfCanvas[a])}else"simple"===n.data.styleConfig[l].styleType&&t(e,n.data.styleConfig[l].label,n.data.legend[l].defaultCanvas)}))}else{const t=document.createElement("tr");a(e,t);let l="";void 0===n.data&&(l="(waiting for legend)"),null===n.data&&(l="(legend fetch error)"),n.data&&!n.data.legend&&"loaded"===n.layerStatus&&(l="(no legend)"),a(n.layerStatus,t),a(l,t),i.appendChild(t)}}))}
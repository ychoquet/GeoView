function createCodeSnippet(){const e=document.getElementsByTagName("script")[document.getElementsByTagName("script").length-1];document.getElementById("codeSnippet").innerHTML=`<pre>${e.textContent.replace("//create snippets\n","").replace("createConfigSnippet();\n","").replace("createCodeSnippet();\n","")}</pre>`}function createConfigSnippet(){let e=0,t=0;for(e=0;e<document.getElementsByClassName("llwp-map").length;e++){let n="";const m=document.getElementsByClassName("llwp-map")[e].id;for(t=0;t<document.getElementById(m).attributes.length;t++)n+=`${document.getElementById(m).attributes[t].nodeName}: "${document.getElementById(m).attributes[t].nodeValue}" `;document.getElementById(`${m}CS`).innerHTML=n}}
function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")},{btnStart:n,btnStop:o}=e;o.disabled=!0;let d=null;n.addEventListener("click",(function(){document.body.style.backgroundColor=t(),d=setInterval((()=>{document.body.style.backgroundColor=t()}),1e3),n.disabled=!0,o.disabled=!1})),o.addEventListener("click",(function(){clearTimeout(d),n.disabled=!1,o.disabled=!0}));
//# sourceMappingURL=01-color-switcher.6f7043a2.js.map
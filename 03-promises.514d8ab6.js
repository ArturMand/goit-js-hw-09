!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t);var i=t("h6c0i");function r(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}function a(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))}function u(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}({form:document.querySelector("form")}).form.addEventListener("submit",(function(e){e.preventDefault();for(var n=e.target.elements,o=n.delay,t=n.step,i=n.amount,l=Number(o.value),c=Number(t.value),f=Number(i.value),s=1;s<=f;s+=1)r(s,l).then(a).catch(u),l+=c}))}();
//# sourceMappingURL=03-promises.514d8ab6.js.map

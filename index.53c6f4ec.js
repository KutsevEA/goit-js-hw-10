var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=l||u||Function("return this")(),a=Object.prototype.toString,i=Math.max,s=Math.min,b=function(){return f.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==a.call(e)}(e))return NaN;if(p(e)){var l="function"==typeof e.valueOf?e.valueOf():e;e=p(l)?l+"":l}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?c(e.slice(2),u?2:8):n.test(e)?NaN:+e}document.querySelector(".country-info"),document.querySelector(".country-list");document.querySelector("#search-box").addEventListener("input",_.debounce((function(e){console.log(e.currentTarget.value),t=e.currentTarget.value,fetch(`https://restcountries.com/v3.1/name/${t}?fields=name,capital,population,flags,languages`).then((e=>e.json())).then((e=>(console.log(e),e))).catch((e=>{console.log(e)}));var t}),300));console.log("jhlkjb");
//# sourceMappingURL=index.53c6f4ec.js.map

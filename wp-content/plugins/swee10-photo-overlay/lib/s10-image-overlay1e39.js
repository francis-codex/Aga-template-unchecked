!(function(){'use strict';Array.from=Array.from||function from(arr){var result=[],mapFn=arguments[1]||function(a,i,t){return a;},thisArg=arguments[2]||null;if(arr.length!==undefined){for(var i=0;i<arr.length;i++){result[i]=mapFn.call(thisArg,arr[i],i,arr);}}
return result.length?result:[undefined];}}());!(function(){'use strict';function getImgs(){var imgs=Array.from(document.querySelectorAll('[data-overlay-text]'));return imgs;}
function processElements(imgs){return imgs.filter(needsOverlay).forEach(setOverlay);}
function needsOverlay(imgEl){return!imgEl.hasAttribute('data-overlay-text-loaded');}
function setOverlay(imgEl){addOverlay(imgEl);applyMetadata(imgEl);}
function addOverlay(imgEl){var parent=imgEl.parentElement,prevEl=parent.querySelector('.s10_overlay-text.preview'),overlay=makeOverlayElement(imgEl.dataset);parent.style.position='relative';if(prevEl)parent.replaceChild(prevEl,overlay);else parent.insertBefore(overlay,imgEl);}
function applyMetadata(imgEl){imgEl.classList.add('s10-has-overlay');imgEl.setAttribute('data-overlay-text-loaded','');}
function makeOverlayElement(dataset){var el=document.createElement('span');el.classList.add('s10_overlay-text');el.textContent=dataset.overlayText;el.style.color=dataset.overlayColor;return el;}
window.addEventListener('load',function(){var imgs=getImgs();processElements(imgs);});}());
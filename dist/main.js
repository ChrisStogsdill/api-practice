(()=>{const e=document.getElementById("update-image"),t=document.getElementById("search-text");function n(t){fetch(`https://api.giphy.com/v1/gifs/translate?api_key=iBwgR73ftQriwkNWYpchMJu2xCFI2sog&s=${t}`,{mode:"cors"}).then((e=>e.json())).then((t=>{console.log(t.data.images.original.url),e.src=t.data.images.original.url}))}document.getElementById("update-button").addEventListener("click",(()=>{n(t.value)})),t.addEventListener("keydown",(e=>{"Enter"===e.key&&n(t.value)}))})();
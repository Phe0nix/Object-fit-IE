!function(){var e={ieImg:function(e,n,o,t){if(-1!==navigator.appVersion.search("Trident"))for(var i=document.querySelectorAll(e),r=0;r<i.length;r++)if(i[r].querySelector("img")){var l=i[r].querySelector("img"),c=l.getAttribute("src");void 0!==n&&""!==n||(n="center"),void 0!==o&&""!==o||(o="center"),void 0===t||""===t||"cover"===t?(t="cover",l.style.display="none"):"scale-down"===t||"contain"===t?(t="contain",l.style.display="none"):"none"===t?(t="auto",i[0].querySelector("img").style.display="none",i[1].querySelector("img").style.display="none"):l.style.display="fill"===t?"inline":"none",i[r].style.background="url("+c+") "+n+" "+o+"/"+t+" no-repeat"}}};window.objectFitIE=e}();
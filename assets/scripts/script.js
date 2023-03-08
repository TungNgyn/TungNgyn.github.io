window.addEventListener("load", event => {
    // Translations  
    function fadeTo(element, toValue = 0, duration = 200) {
        const fromValue = parseFloat(element.style.opacity) || 1;
        const startTime = Date.now();
        const framerate = 1000 / 60; // 60fps
        
        let interval = setInterval(() => {
            const currentTime = Date.now();
            const timeDiff = (currentTime - startTime) / duration;
            const value = fromValue - (fromValue - toValue) * timeDiff;
            
            if (timeDiff >= 1) {
                clearInterval(interval);
                interval = 0;
            }
            
            element.style.opacity = value.toString();
        }, framerate)
    }
    
    let deTranslate, enTranslate;
    deTranslate = event => {
        document.querySelectorAll('[data-translatekey], div.icons img, div.shortcuts, section.field div').forEach(el => fadeTo(el, 0, 500));
        
        setTimeout(() => {            
            document.querySelector("#enTranslator").style = "display: inherit;";
            document.querySelector("#deTranslator").style = "display: none;";
            tinyi18n.setLang('de');     
            document.querySelectorAll('[data-translatekey], div.icons img, div.shortcuts, section.field div').forEach(el => fadeTo(el, 1, 1000));
            }, 1000);
    };

    enTranslate = event => {
        document.querySelectorAll('[data-translatekey], div.icons img, div.shortcuts, section.field div').forEach(el => fadeTo(el, 0, 500));
        
        setTimeout(() => {            
            document.querySelector("#deTranslator").style = "display: inherit;";
            document.querySelector("#enTranslator").style = "display: none;";
            tinyi18n.setLang('en');
            document.querySelectorAll('[data-translatekey], div.icons img, div.shortcuts, section.field div').forEach(el => fadeTo(el, 1, 1000));
    }, 1000);
    }

    document.querySelector('#deTranslator').addEventListener("click", deTranslate);
    
    document.querySelector('#enTranslator').addEventListener("click", enTranslate);

});


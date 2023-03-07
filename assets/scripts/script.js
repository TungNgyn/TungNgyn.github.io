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
    // Element reference
    // const element = document.querySelector('#deTranslator');

    // // Fade in and out on click
    // element.addEventListener('click', e => {
    //     fadeTo(document.querySelector('*'), 0, 1000);
        
    //     setTimeout(() => {
    //         fadeTo(document.querySelector('*'), 1.0, 500);
    //     }, 1000);
    // });
    document.querySelector('#deTranslator').addEventListener("click", event => {
        document.querySelectorAll('[data-translatekey], div.icons img, div.shortcuts').forEach(el => fadeTo(el, 0, 500));
        
        
        setTimeout(() => {            
            document.querySelector("#enTranslator").style = "display: inherit;";
            document.querySelector("#deTranslator").style = "display: none;";
            tinyi18n.getLang() == 'en' ? tinyi18n.setLang('de') : tinyi18n.setLang('en')       
            document.querySelectorAll('[data-translatekey], div.icons img, div.shortcuts').forEach(el => fadeTo(el, 1, 500));
            }, 1000);
    });

    
    document.querySelector('#enTranslator').addEventListener("click", event => {
        document.querySelectorAll('[data-translatekey], div.icons img, div.shortcuts').forEach(el => fadeTo(el, 0, 500));

        
        setTimeout(() => {            
            document.querySelector("#deTranslator").style = "display: inherit;";
            document.querySelector("#enTranslator").style = "display: none;";
            tinyi18n.getLang() == 'en' ? tinyi18n.setLang('de') : tinyi18n.setLang('en')
         document.querySelectorAll('[data-translatekey], div.icons img, div.shortcuts, div.icons img, div.shortcuts').forEach(el => fadeTo(el, 1, 500));
    }, 1000);
    });

});


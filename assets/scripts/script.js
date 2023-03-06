window.addEventListener("load", event => {
    // Translations  
    document.querySelector('#deTranslator').addEventListener("click", event => {
        document.querySelector("#enTranslator").style = "display: inherit;";
        document.querySelector("#deTranslator").style = "display: none;";
        tinyi18n.getLang() == 'en' ? tinyi18n.setLang('de') : tinyi18n.setLang('en')
    });

    document.querySelector('#enTranslator').addEventListener("click", event => {
        document.querySelector("#deTranslator").style = "display: inherit;";
        document.querySelector("#enTranslator").style = "display: none;";
        tinyi18n.getLang() == 'en' ? tinyi18n.setLang('de') : tinyi18n.setLang('en')
    });
});


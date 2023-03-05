window.addEventListener("load", event => {
    // document.querySelector("a.home").addEventListener("click", event => {
    //     showHome();
    // });

    // document.querySelector("a.projects").addEventListener("click", event => {
    //     showProjects();
    // });
    
    // document.querySelector("a.contact").addEventListener("click", event => {
    //     showContact();
    // });
    
});

// function showHome() {
//     document.querySelector("article.home").style.display = 'flex';
//     document.querySelector("article.projects").style.display = 'none';
//     document.querySelector("article.contact").style.display = 'none';
// };

// function showProjects() {
//     document.querySelector("article.home").style.display = 'none';
//     document.querySelector("article.projects").style.display = 'flex';
//     document.querySelector("article.contact").style.display = 'none';
// };

// function showContact() {
//     document.querySelector("article.home").style.display = 'none';
//     document.querySelector("article.projects").style.display = 'none';
//     document.querySelector("article.contact").style.display = 'flex';
// };

// Translations  
var lng = 'en';
function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();

    if (lng == 'en') {
        document.querySelector("#deTranslator").addEventListener("click", event => {
            this.translate('de', 'lng-tag');
            document.querySelector("#enTranslator").style = "display: inherit;";
            document.querySelector("#deTranslator").style = "display: none;";
        })
    }
    if (lng == 'de') {
        document.querySelector("#enTranslator").addEventListener("click", event => {
            this.translate('en', 'lng-tag');
            document.querySelector("#enTranslator").style = "display: none;";
            document.querySelector("#deTranslator").style = "display: inherit;";
        })
    }   
}

function Translate() {
    // initialization
    this.init = function(attribute, lng) {
        this.attribute = attribute;
        this.lng = lng;
    }

    // translate
    this.process = function() {
        _self = this;
        var xrhFile = new XMLHttpRequest();
        // loading file
        xrhFile.open("GET", "assets/translations/"+this.lng+".json", false);
        xrhFile.onreadystatechange = function () {
            if(xrhFile.readyState === 4) {
                if(xrhFile.status === 200 || xrhFile.status == 0) {
                    var LngObject = JSON.parse(xrhFile.responseText);
                    var allDom = document.getElementsByTagName("*");
                    for(var i =0; i < allDom.length; i++){
                        var elem = allDom[i];
                        var key = elem.getAttribute(_self.attribute);
                        if(key != null) {
                            elem.innerHTML = LngObject[key]  ;
                        }
                    }
                
                }
            }
        }
        xrhFile.send();
    }
}
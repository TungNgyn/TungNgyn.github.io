var lng = 'en';
// Code text
const java = 
'public class ShowcaseApp {\n'+
    '    public static void main(String[] args) {\n' +
    '        system.out.println("Hello");\n' +
    '    }\n' +
'}';

window.addEventListener("load", event => {
    // Code Typing
    var options = {
        strings: [java],
        typeSpeed: 100
    };
    var typed = new Typed('article.code output', options);
   
  
    //   This is id of HTML element (English) with attribute lng-tag
    // document.querySelector("#enTranslator").addEventListener("click", event => {
    //     translate('en', 'lng-tag');
    // })
    //This is id of HTML element (Khmer) with attribute lng-tag

    
});

// Translations  
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
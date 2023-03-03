
const java = 
'public class ShowcaseApp {\n'+
    '    public static void main(String[] args) {\n' +
    '        system.out.println("Hello");\n' +
    '    }\n' +
'}';

window.addEventListener("load", event => {
    var options = {
        strings: [java],
        typeSpeed: 100
    };

    var typed = new Typed('article.code output', options);
   
    let button, eventListener;

			
    button = document.querySelector("div.shortcuts button.english");
    eventListener = event => showEnglish();
    

    // function showEnglish() {
        const englishTemplate = document.querySelector("template.english").content.firstElementChild.cloneNode(true);
        document.body.appendChild(englishTemplate);
        document.querySelector("fi fi-gb");
        console.log(true);
    // }

});


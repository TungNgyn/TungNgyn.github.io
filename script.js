
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
    // const code = document.querySelector("article.code output");
    // code.textContent = typed;
});
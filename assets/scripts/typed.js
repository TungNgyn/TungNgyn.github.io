window.addEventListener("load", event => {
    // Code text
    const java1 = ('public class ShowcaseApp {\n   ^1000 public static void main (String[] args) {\n      ^1000  system.out.println("Hello, World");\n    }\n }');
    // const java2 = ('public class ApplicationContainer {\n    public static void main (final String[] args) { \n        help');

    const kotlin1 = ('fun main() {\n  ^1000  println("Hello, World")\n }');

    const csharp1 = ('class ShowcaseApp {\n   ^1000 Console.WriteLine("Hello, World");\n }');

    const js1 = ('window.addEventListener("load", event => {\n   ^1000  console.log("Hello, World");\n });');

    const dart1 = ('void main() {\n   ^1000 print("Hello, World");\n }');
    
    const flutter1 = ('void main() {\n   ^1000 runApp(MainApp());\n }\n\n class MainApp extends StatelessWidget {\n   ^1000 const MainApp({super.key});\n\n  ^1000  @override\n  ^1000  Widget build(BuildContext context) {\n      ^1000  return Scaffold();\n    }\n }');
    
    // Code Typing
    var code = [java1];
    var options = {
        strings: code,
        backSpeed: 100,
        shuffle:true,
        loop: true,
        smartBackspace: true,
        typeSpeed: 100
    };
    var typed = new Typed('article.code output', options);

    
    // Skillchange
    document.querySelector("img.java").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [java1];
        options = {
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed('article.code output', options);
    });
    document.querySelector("img.kotlin").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [kotlin1];
        options = {
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed('article.code output', options);
    });
    document.querySelector("img.csharp").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [csharp1];
        options = {
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed('article.code output', options);
    });
    document.querySelector("img.js").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [js1];
        options = {
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed('article.code output', options);
    });
    document.querySelector("img.dart").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [dart1];
        options = {
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed('article.code output', options);
    });
    document.querySelector("img.flutter").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [flutter1];
        options = {
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed('article.code output', options);
    });

});
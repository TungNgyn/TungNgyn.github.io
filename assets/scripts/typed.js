window.addEventListener("load", event => {
    // Code text
    let window = 'article.code output';
    const java1 = ('public class ShowcaseApp {\n   ^1000 public static void main (String[] args) {\n      ^1000  system.out.println("Hello, World");\n    }\n}');
    // const java2 = ('public class ApplicationContainer {\n    public static void main (final String[] args) { \n        help');

    const kotlin1 = ('fun main() {\n  ^1000  println("Hello, World")\n}');

    const csharp1 = ('class ShowcaseApp {\n   ^1000 Console.WriteLine("Hello, World");\n}');

    const js1 = ('window.addEventListener("load", event => {\n   ^1000  console.log("Hello, World");\n});');

    const dart1 = ('void main() {\n   ^1000 print("Hello, World");\n}');
    
    const flutter1 = ('void main() {\n   ^1000 runApp(MainApp());\n}\n\n class MainApp extends StatelessWidget {\n   ^1000 const MainApp({super.key});\n\n  ^1000  @override\n  ^1000  Widget build(BuildContext context) {\n      ^1000  return Scaffold();\n    }\n}');
    

    const html1 = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>");

    const css1 = ("header {\n    display: flex;\n    align-items: center;\n    padding-left: 5em;\n    box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);\n}\n\nheader img {\n    width: 5em;\n}\n\ndiv.shortcuts {\n    margin-left: auto;\n    padding-right: 5em;\n    display: flex;\n    align-items: center;\n}");
    
    const bash1 = ("`root@tung:~#` mkdir greetings\n`root@tung:~#` cd greetings\n`root@tung:~/greetings#` echo 'Hello, World' > greeting.txt\n`root@tung:~/greetings#` cat greetings.txt\n`Hello, World`");
    
    const docker1 = ("`root@tung:~#` docker image ls ^500 \n`REPOSITORY   TAG     IMAGE ID       CREATED       SIZE\ncentos       latest  5d0da3dc9764   17 months ago 231MB`\n`root@tung:~#`^2000 docker container run -it centos /bin/bash\n`[root@f65ffdb000ab /]#`^2000 ls\n`bin dev etc home lib media root sbin sys usr var\n[root@f65ffdb000ab /]# `^2000 ");

    const git1 = ("`root@tung:~#` mkdir git_repo\n`root@tung:~#` ^500cd git_repo\n`root@tung:~/git_repo#` ^500git init\n`Initialized empty Git repository in /root/git_repo/.git/`\n`root@tung:~/git_repo#` ^1000echo '# Hello, World' >> README.md\n`root@tung:~/git_repo#` ^500git add README.md\n`root@tung:~/git_repo#` ^500git commit -m \"initial commit\"\n`1 file changed, 1 insertion(+)\ncreate mode 100644 README.me\nroot@tung:~/git_repo`# ^500git status\n`On branch master\nnothing to commit, working tree clean\nroot@tung:~/git_repo#`");

    const mysql1 = ("`Enter password:` ^1000**^200****^300***\n`Welcome to the MySQL monitor, Commands end with ; or \\g.\nYour MySQL connection id is 8\nServer version: 8.0.32 MySQL Community Server - GPL\n\nCopyright (c) 2000, 2023, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation\nand/or its affiliates. Other names may be trademarks\nof their respective owners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the\ncurrent input statement.\n\nmysql> `^1000USE showcase;\n`Database changed\nmysql> `");

    const postgresql1 = ("`Server [localhost]: `^500\n`Database [postgres]: `^500\n`Port [5432]: ` ^500\n`Username [postgres]: `^500\n`Password for user postgres: `^1000\n`psql (15.2)\nType \"help\" for help.\n\ntung=# :` ^1000\\dt`\n\n Schema |  Name   |  Type  | Owner\n----------------------------------\n public | profile | table  | postgres`");

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
    var typed = new Typed(window, options);

    
    // Language change
    document.querySelector("img.java").addEventListener("click", event => {
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
        typed = new Typed(window, options);
    });
    document.querySelector("img.kotlin").addEventListener("click", event => {
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
        typed = new Typed(window, options);
    });
    document.querySelector("img.csharp").addEventListener("click", event => {
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
        typed = new Typed(window, options);
    });
    document.querySelector("img.js").addEventListener("click", event => {
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
        typed = new Typed(window, options);
    });
    document.querySelector("img.dart").addEventListener("click", event => {
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
        typed = new Typed(window, options);
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
        typed = new Typed(window, options);
    });

    document.querySelector("img.html").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [html1];
        options = {
            contentType: 'null',
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed(window, options);
    });

    document.querySelector("img.css").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [css1];
        options = {
            contentType: 'null',
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed(window, options);
    });

    document.querySelector("img.bash").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [bash1];
        options = {
            contentType: 'null',
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed(window, options);
    });

    document.querySelector("img.docker").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [docker1];
        options = {
            contentType: 'null',
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed(window, options);
    });

    document.querySelector("img.git").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [git1];
        options = {
            contentType: 'null',
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed(window, options);
    });

    document.querySelector("img.mysql").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [mysql1];
        options = {
            contentType: 'null',
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed(window, options);
    });

    document.querySelector("img.postgresql").addEventListener("click", event => {
        typed.stop();
        typed.destroy();
        code = [postgresql1];
        options = {
            contentType: 'null',
            strings: code,
            backSpeed: 100,
            shuffle:true,
            loop: true,
            smartBackspace: true,
            typeSpeed: 100
        };
        typed = new Typed(window, options);
    });

    // Window change
    document.querySelector("img.windows").addEventListener("click", event => {
        document.querySelector("#terminal").classList = "window-windows";
        document.querySelector("#titlebar").classList = "titlebar-windows";
        document.querySelector("#minimize").classList = "maximize";
    });

    document.querySelector("img.mac").addEventListener("click", event => {
        document.querySelector("#terminal").classList = "window-mac";
        document.querySelector("#titlebar").classList = "titlebar-mac";
        document.querySelector("#minimize").classList = "minimize";
    });

    document.querySelector("img.linux").addEventListener("click", event => {
        document.querySelector("#terminal").classList = "window-linux";
        document.querySelector("#titlebar").classList = "titlebar-linux";
    });




});
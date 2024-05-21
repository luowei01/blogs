// str += '\n\n<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">' +
//     '\n\n<script src="https://unpkg.com/gitalk@latest/dist/gitalk.min.js"></script>' +
//     '\n\n<div id="gitalk-container"></div>' +
//     '\n\n<script src="https://luowei01.github.io/blogs/gitalk-config.js"></script>';手动加在某个插件中运行
var gitalk = new Gitalk({
    "clientID": "Ov23liXJ47TD4diLy6Z5",
    "clientSecret": "00f665c53d4f4f4ef1a0c8b86a918636233b54c5",
    "repo": "blogs",
    "owner": "luowei01",
    "admin": ["luowei01"],
    "id": window.location.pathname,
    "distractionFreeMode": false
});
gitalk.render("gitalk-container");
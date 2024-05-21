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
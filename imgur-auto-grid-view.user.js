// ==UserScript==
// @name        ImgurAutoGrid-View
// @namespace   https://github.com/frnprt/ImgurAutoGrid-View
// @description Automatically show albums in grid view
// @match       http://imgur.com/a/*
// @match       https://imgur.com/a/*
// @version     1.0
// @updateURL   https://github.com/frnprt/ImgurAutoGrid-View/raw/main/imgur-auto-grid-view.user.js
// dowloadURL   https://github.com/frnprt/ImgurAutoGrid-View/raw/main/imgur-auto-grid-view.user.js
// @author      frnprt
// @grant       none
// ==/UserScript==

(function(){
    var current_location = location.href;
    if (!current_location.includes("grid")) {
        var new_location = location.href.concat("/layout/grid");
    location.href = new_location;
    }
})();

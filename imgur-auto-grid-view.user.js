// ==UserScript==
// @name		ImgurAutoGrid-View
// @namespace	None
// @description	Automatically show albums in grid view
// @match		http://imgur.com/a/*
// @match		https://imgur.com/a/*
// @version		1.0
// @author		frnprt
// @grant		none
// ==/UserScript==

(function(){
    var current_location = location.href;
    if (!current_location.includes("grid")) {
        var new_location = location.href.concat("/layout/grid");
    location.href = new_location;
}
 })();

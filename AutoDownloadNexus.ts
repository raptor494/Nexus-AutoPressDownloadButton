// ==UserScript==
// @name         Auto-Download Nexus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.nexusmods.com/*/mods/*?tab=files&file_id=*&nmm=1
// @require     http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(function() {
    $('#slowDownloadButton').trigger('click')
})
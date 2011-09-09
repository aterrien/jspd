/**
 * Load dependencies
 * @param String filename
 * @filetype String filetype "js", "css"
 */
function load(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}

/**
 * jspd Loader
 */
var $jspd = Object();
$jspd.start=function(){
    if(!$jspd.started){
        load("/jspd/css/screen.css","css");
        load("/jspd/js/jspd-a1.0-core.js","js");
        load("/jspd/js/jspd-a1.0-externals.js?sqsd","js");
        $jspd.started=true;
    }
    return void(0);
}
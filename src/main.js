var body = document.querySelector('body');
var delete_popular_buss = function(){
    var nodes = document.querySelectorAll("popular_buss");
    if(nodes && nodes.length){
        console.log("delete_popular_buss");
        for(var i in nodes){
            nodes[i].remove();
        }
    }
}
var display_allmsg = function (){
    var lev2s = document.getElementsByClassName("lev2");
    var tag = 1;
    if(lev2s && lev2s.length){
        for(var i = 0; i < lev2s.length; ++i){
            if(lev2s[i].style.display && lev2s[i].style.display == "none"){
                lev2s[i].style.display="";
                console.log("display_allmsg");
            }
        }
    }
}
var unfold_group = function(){
    var moregroup = document.getElementsByClassName("levmore")[0];
    if(moregroup && moregroup.previousSibling && moregroup.previousSibling.previousSibling){
        console.log("unfold_group");
        moregroup.previousSibling.previousSibling.style.display="";
    }
}
var hide_ads = function(){
    var ads_id = ["pl_rightmod_ads35", "pl_rightmod_ads36"];
    var tag = 1;
    for(var i = 0; i < ads_id.length; ++i){
        var ad = document.getElementById(ads_id[i]);
        if(ad){
            console.log("hide_ads");
            ad.remove();
        }
    }
}

var hide_member_zone = function(){
    var member = document.getElementById("trustPagelet_recom_memberv5");
    if(member){
        console.log("hide_member_zone");
        member.remove();
    }
}

var hide_recent_app = function(){
    var recent_app_line = document.getElementsByClassName('left_nav_line')[4];
    //console.log(recent_app_line);
    if(recent_app_line && recent_app_line.nextSibling){
        for(var e=recent_app_line.nextSibling; e!=null;){
        //console.log(e);
        var d = e.nextSibling;
        if(e.nodeType==1)
            e.remove();
            e = d;
        }
        recent_app_line.remove();
    }
}

var hide_bottom_ads = function(){
    var main = document.getElementsByClassName("W_main")[0];
    if(main && main.nextElementSibling){
        var ad = main.nextElementSibling;
        var attr = ad.getAttribute("ad-data");
        if(attr){
            console.log("hide bottom ads");
            ad.remove();
        }
    }
}

var hide_biztips = function(){
    var biztips = document.getElementById("pl_content_biztips");
    if(biztips){
        console.log("hide biztips");
        biztips.remove();
    }
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log(mutation.type);
        delete_popular_buss();
        display_allmsg();
        unfold_group();
        hide_ads();
        hide_member_zone();
        hide_recent_app();
        hide_bottom_ads();
        hide_biztips();
    });    
});
var config = { attributes: true, childList: true, characterData: true };
observer.observe(body, config);
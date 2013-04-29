var body = document.querySelector('body');

var delete_popular_buss = function(){
    var nodes = document.querySelectorAll(".popular_buss");
    if(nodes && nodes.length){
        console.log("delete popular buss");
        for(var i in nodes){
            nodes[i].remove();
        }
    }
}

var display_allmsg = function (){
    var lev2s = document.querySelectorAll(".lev2");
    if(lev2s && lev2s.length){
        for(var i = 0; i < lev2s.length; ++i){
            if(lev2s[i].style.display && lev2s[i].style.display == "none"){
                lev2s[i].style.display="";
                console.log("display all message");
            }
        }
    }
}

var unfold_group = function(){
    var more_list = document.querySelector("div[node-type=moreList]");
    if(more_list){
        console.log("unfold more group list");
        more_list.style.display = "";
    }
}

var hide_ads = function(){
    var ads_id = ["#pl_rightmod_ads35", "#pl_rightmod_ads36"];
    for(var i = 0; i < ads_id.length; ++i){
        var ad = document.querySelector(ads_id[i]);
        if(ad){
            console.log("hide_ads");
            ad.remove();
        }
    }
}

var hide_vip_zone = function(){
    var vip_zone = document.querySelector("#trustPagelet_recom_memberv5");
    if(vip_zone){
        console.log("hide vip zone");
        vip_zone.remove();
    }
}

var hide_recent_app = function(){
    var recent_app_seperator = document.querySelector(".left_nav_line[node-type=fenge]");
    if(recent_app_seperator && recent_app_seperator.nextSibling){
        for(var e=recent_app_seperator.nextSibling; e!=null;){
            var d = e.nextSibling;
            if(e.nodeType==1) e.remove();
            e = d;
        }
        console.log("hide recent app");
        recent_app_seperator.remove();
    }
}

var hide_bottom_ads = function(){
    var main = document.querySelector(".W_main");
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
    var biztips = document.querySelector("#pl_content_biztips");
    if(biztips){
        console.log("hide biztips");
        biztips.remove();
    }
}

var hide_recommend_topic= function(){
    var topic = document.querySelector("[node-type=recommendTopic]");
    if(topic){
        console.log("hide recommend topic");
        topic.remove();
    }
}

var hide_vip_recom = function(){
    var recom = document.querySelector("#trustPagelet_recom_allinonev5");
    if(recom){
        console.log("hide vip recommend");
        recom.remove();
    }
}

var main = function(mutation) {
    console.log(mutation.type);
    delete_popular_buss();
    display_allmsg();
    unfold_group();
    hide_ads();
    hide_vip_zone();
    hide_recent_app();
    hide_bottom_ads();
    hide_biztips();
    hide_vip_recom();
    hide_recommend_topic();
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(main);    
});

var config = {
    attributes: true,
    childList: true,
    characterData: true
};

observer.observe(body, config);
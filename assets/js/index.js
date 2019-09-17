$(document).ready(function() {

    doSomething();
    doLogined();
    
});

function doLogined() {

    var myCookie = getCookie("user_id");
    var myCookieName = getCookie("name");

    if (myCookie == null) {
        //null
    }
    else {        
        $('.user_block').append(myCookieName);
    }

}

function doSomething() {

    var myCookie = getCookie("user_id");

    if (myCookie == null) {
        $(".page").removeClass("logined");
    }
    else {
        $(".page").addClass("logined");
    }

}

function dropLastMenu() {
    $('.drop_top_menu_index_block').toggleClass("drop_last_menu_on");
}


    
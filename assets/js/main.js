//========= Cookies ===================================================================

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    location.reload();
}

function delCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getCookie(name) {

    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));

}

function setCookie(name, value, days, path) {
    
    path = path || '/';
    days = days || 10;

    var last_date = new Date();
    last_date.setDate(last_date.getDate() + days);
    var value = escape(value) + ((days==null) ? "" : "; expires="+last_date.toUTCString());
    document.cookie = name + "=" + value + "; path=" + path; // вешаем куки
}

function $_GET(key) {

    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;

}


//======== mains ======================================================================

function openDefence(e) {

    var myCookie = getCookie("user_id");

    if (myCookie == null) {
        openLoginFormSocial();
    }
    else {
        e;
    }
}

function myAlert(e) {
    var templateText = function(){/*
            <div class="my_alert">
                <div class="my_alert_block">
                    <span>%error%</span>
                </div>
            </div>
        */}.toString().slice(15,-3);

        templateText = templateText.replace(new RegExp("%error%", 'g'), e);

    $('body').append(templateText);

    setTimeout( "$('.my_alert').fadeOut('slow')", 2000);

}

function error_log() {

    var err = getCookie('error');

    if(err) {
        
        var error = errors_log[err];

        myAlert(error);

        delCookie("error");
    }


}
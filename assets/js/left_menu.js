$(document).ready(function() {
    dropLeftMenu();
});

function leftMenu() {

    var cookie = getCookie('user_id');

    if(cookie) {
        $(".left_drop_menu").toggleClass("open_left_menu");
        $(".button_for_drop_left_menu").toggleClass("open_left_menu");
    }
}

function dropLeftMenu() {

    var cookie = getCookie('user_id');
    if(cookie) {
        $(".left_drop_menu").remove();

        var templateText = function(){/*
            <div class="left_drop_menu">

                <div class="left_drop_menu_page">
                    <div class="black_bg_reg_block" onclick="leftMenu()"></div>


                    <div class="mini_height_block_left_menu">

                    </div> 



                </div>

            </div>
            */}.toString().slice(15,-3);
        $('body').append(templateText);
    }
}
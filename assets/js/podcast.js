function openCreateAirPodcast() {

    clearLoginBox();

    var templateText = function(){/*
        <div class="logined_box">
            <div class="black_bg_reg_block" onclick="clearLoginBox()"></div>
            <div class="window_create_air_podcast">
                <div class="txt_wtcp_v2">
                    <h1>Creating podcast</h1>
                    <span>Create your own podcast adn share them with whole the world!</span>
                </div>
                <div class="block_head_creating_air_podcast">
                    <div class="add_img_redacting_air_podcast">
                        
                    </div>
                    <div class="block_with_inputs_for_creating_podcast">
                        <input class="mini_cr_podcast" type="text" placeholder="Name your podcast...">
                        <textarea class="big_cr_podcast" placeholder="Description you podcast..."></textarea>
                        <div class="buttons_vibor_cr_podcasts">
                            <select name="select" class="mini_cr_podcast_select">
                                    <option value disabled selected>Default</option>
                                    <option value="s1">Закрытый подкаст</option>
                                    <option value="s2">Открытый</option>
                            </select>
                            <select name="select" class="mini_cr_podcast_select">
                                    <option value disabled selected>Default</option>
                                    <option value="s1">Закрытый подкаст</option>
                                    <option value="s2">Открытый</option>
                            </select>
                        </div>
                    </div>
                </div>
                <h1 class="h_span_cr_podcast">URL link on your podcast</h1>
                <a href="/">https://grotesk.org</a>
                <h1 class="h_span_cr_podcast">Notice people in social media</h1>
                <div class="social_media_for_create_podcast">
                    <div class="soc_mini_box_cr_podcast_menu">
                        <span>Ok</span>
                        <label class="ios7-switch">
                            <input type="checkbox">
                            <span></span>
                        </label>
                    </div>
                    <div class="soc_mini_box_cr_podcast_menu">
                        <span>Ok</span>
                        <label class="ios7-switch">
                            <input type="checkbox">
                            <span></span>
                        </label>
                    </div>
                    <div class="soc_mini_box_cr_podcast_menu">
                        <span>Ok</span>
                        <label class="ios7-switch">
                            <input type="checkbox">
                            <span></span>
                        </label>
                    </div>
                    <div class="soc_mini_box_cr_podcast_menu">
                        <span>Ok</span>
                        <label class="ios7-switch">
                            <input type="checkbox">
                            <span></span>
                        </label>
                    </div>
                    <div class="soc_mini_box_cr_podcast_menu">
                        <span>Ok</span>
                        <label class="ios7-switch">
                            <input type="checkbox">
                            <span></span>
                        </label>
                    </div>
                    <div class="soc_mini_box_cr_podcast_menu">
                        <span>Ok</span>
                        <label class="ios7-switch">
                            <input type="checkbox">
                            <span></span>
                        </label>
                    </div>
                </div>
                <button class="go_podcast" onclick="goPodcast()">Go!</button>

                <!-- <div class="advancid_setings">
                    <span>Advanced setings</span>
                    <img src="assets/img/down-arrow.svg">
                </div> -->
            </div>
        </div>
        */}.toString().slice(15,-3);
    $('body').append(templateText);

}


function goPodcast() {
    var templateText = function(){/*
        <div class="animation_cr_podcast">
            <div class="old_bg_black"></div>
            <div class="loader">
                <div class="l_main">
                    <div class="l_square"><span></span><span></span><span></span></div>
                    <div class="l_square"><span></span><span></span><span></span></div>
                    <div class="l_square"><span></span><span></span><span></span></div>
                    <div class="l_square"><span></span><span></span><span></span></div>
                </div>
            </div>
        </div>

        */}.toString().slice(15,-3);
    $('body').append(templateText);

    $('.old_bg_black').fadeIn("slow");

    setTimeout(() => {
        location.href = 'http://grotesk.org/room/';
    }, 3000);
}
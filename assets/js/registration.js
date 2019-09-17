function clearLoginBox() {
    $(".logined_box").remove();
}

function toggleRegistrationBlock() {
    $(".content_login_box").toggleClass("close_login_box");
}

function openLoginFormSocial() {

    clearLoginBox();

    var templateText = function(){/*
        <div class="logined_box absolut">
            <div class="black_bg_reg_block" onclick="clearLoginBox()"></div>
            <div class="soc_login_block">
                <div class="out_login_reg_blocks_menu">
                    <img src="">
                </div>
                <div class="socila_block_registration">
                    <div class="first_block_social_block_reg">
                        <div class="img_socail_block"></div>
                        <div class="scblock_text">
                            <span>Alredy a member?</span>
                            <span class="span_sign_in" onclick="openLoginFormSocial()">Sign in</span>
                        </div>
                    </div>
                    <div class="second_block_social_block_reg">
                        <div class="in_second_block_scblreg">
                            <div class="txt_scl_block">
                                <h1>Sign Up</h1>
                                <span>Join the voices of thousands of people with Grotesk!</span>
                            </div>
                            <a class="social_login_on_bauttons google_login_on_btn">
                                <span>Google</span>
                            </a>
                            <a class="social_login_on_bauttons facebook_login_on_btn">
                                <span>Facebook</span>
                            </a>
                            <a href="https://oauth.vk.com/authorize?client_id=7106285&display=page&redirect_uri=https://grotesk.org/registration/vk/vk.php&scope=audio,wall,info,pages,offline,photos,email&response_type=code" class="social_login_on_bauttons vk_login_on_btn">
                                <span>VK</span>
                            </a>
                            <a class="social_login_on_bauttons twitter_login_on_btn">
                                <span>Twitter</span>
                            </a>
                            <a class="social_login_on_bauttons ok_login_on_btn">
                                <span>Ok</span>
                            </a>
                            <a class="social_login_on_bauttons linkedin_login_on_btn">
                                <span>LinkedIn</span>
                            </a>
                            <div class="box_btn_open_login_block_blue">
                                <div class="btn_open_login_block_blue" onclick="openRegistrationFormJoob()">
                                    <span>Or you can register with e-mail</span>
                                </div>
                                <div class="cheack_box_with_btn_social_reg">
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="first_login_form">
                <div class="socila_block_registration">
                    <div class="first_block_social_block_reg">
                        <div class="img_socail_block_1"></div>
                        <div class="scblock_text">
                            <span>Alredy a member?</span>
                            <span class="span_sign_in" onclick="openRegistrationForm()">Sign Up</span>
                        </div>
                    </div>
                    <div class="second_block_social_block_reg">
                        <div class="in_second_block_scblreg">
                            <div class="txt_scl_block">
                                <h1>Sign In</h1>
                                <span>Wellcome to Grotesk!</span>
                            </div>
                            <input type="text" id="auth_login" placeholder="login...">
                            <input type="password" id="auth_pass" placeholder="Pass...">
                            <button class="mt-4 blue_btn_for_reg_forms" type="button" onclick="goLogined()">Enter</button>
                        </div>  
                    </div>
                    <div class="third_block_social_block_reg">
                        <div class="mini_blocks_soc_registration">
                            <a href="/" class="mini_block_reg_soc">
                                <img src="/assets/img/search.png">
                            </a>
                            <a href="/" class="mini_block_reg_soc">
                                <img src="/assets/img/facebook.png">
                            </a>
                            <a href="https://oauth.vk.com/authorize?client_id=7106285&display=page&redirect_uri=https://grotesk.org/registration/vk/vk.php&scope=audio,wall,info,pages,offline,photos,email&response_type=code" class="mini_block_reg_soc">
                                <img src="/assets/img/vk.png">
                            </a>
                            <a href="/" class="mini_block_reg_soc">
                                <img src="/assets/img/twitter.png">
                            </a>
                            <a href="/" class="mini_block_reg_soc">
                                <img src="/assets/img/odnoklassniki.png">
                            </a>
                            <a href="/" class="mini_block_reg_soc">
                                <img src="/assets/img/linkedin.png">
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="registr_block_index">
                <div class="socila_block_registration">
                    <div class="first_block_social_block_reg">
                        <div class="img_socail_block_1"></div>
                        <div class="scblock_text">
                            <span>Alredy a member?</span>
                            <span class="span_sign_in" onclick="openLoginFormSocial()">Sign In</span>
                        </div>
                    </div>
                    <div class="second_block_social_block_reg">
                        <div class="in_second_block_scblreg">
                            <div class="txt_scl_block mt-5">
                                <h1>Sign Up</h1>
                                <span>Join the voices of thousands of people with Grotesk!</span>
                            </div>
                            <input type="text" id="register_name" placeholder="Name">
                            <input type="text" id="register_mail" placeholder="E-mail">
                            <input type="password" id="register_password" placeholder="Password">
                            <input type="password" name="register_password_confirmation" id="register_password_confirmation" placeholder="Password again">
                            <button class="mt-4 blue_btn_for_reg_forms" type="button" onclick="goRegistration()">Enter</button>
                        </div>  
                    </div>
                    <div class="third_block_social_block_reg">
                        <div class="mini_blocks_soc_registration">
                            <a href="/" class="mini_block_reg_soc">
                                <img src="/assets/img/search.png">
                            </a>
                            <a href="/" class="mini_block_reg_soc">
                                <img src="/assets/img/facebook.png">
                            </a>
                            <a href="https://oauth.vk.com/authorize?client_id=7106285&display=page&redirect_uri=https://grotesk.org/registration/vk/vk.php&scope=audio,wall,info,pages,offline,photos,email&response_type=code" class="mini_block_reg_soc">
                                <img src="/assets/img/vk.png">
                            </a>
                            <a href="/" class="mini_block_reg_soc">
                                <img src="/assets/img/twitter.png">
                            </a>
                            <a href="/" class="mini_block_reg_soc">
                                <img src="/assets/img/odnoklassniki.png">
                            </a>
                            <a href="/" class="mini_block_reg_soc">
                                <img src="/assets/img/linkedin.png">
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
        */}.toString().slice(15,-3);
    $('body').append(templateText);

    $('.first_login_form').fadeIn("100");


}

function openRegistrationForm() {
    $('.first_login_form').fadeOut('100', function() {
        $('.soc_login_block').fadeIn();
    });
}

function openRegistrationFormJoob() {
    $('.soc_login_block').fadeOut('100', function() {
        $('.registr_block_index').fadeIn();
    });
}








function goRegistration() {

    var name         = $('#register_name').val().trim();
    var mail         = $('#register_mail').val().trim();
    var password     = $('#register_password').val();
    var password_conf= $('#register_password_confirmation').val();



    var has_error = false;

    if(name.length === 0)
    {
        has_error = true;
        $('#register_name').css('border', '1.5px solid #D93025');
    }
    
    if(mail.length === 0)
    {
        has_error = true;
        $('#register_mail').css('border', '1.5px solid #D93025');
    }
    
    if(password.length === 0)
    {
        has_error = true;
        $('#register_password').css('border', '1.5px solid #D93025');
    }
    
    if(password_conf.length === 0)
    {
        has_error = true;
        $('#register_password_confirmation').css('border', '1.5px solid #D93025');
    }
    
    if(password !== password_conf)
    {
        has_error = true;
        $('#register_password').css('border', '1.5px solid #D93025');
        $('#register_password_confirmation').css('border', '1.5px solid #D93025');
    }

    if(!has_error) {
        
        $.post('https://grotesk.org/registration/registration.php',
        {
            name: name,
            mail : mail,
            password : password

        }, function() {

            var cookie = getCookie('error');
            error_log();
            if(cookie == 3) {
                setTimeout( function() {
                    location.reload();
                }, 2000);
            }
            
        });

    }
}

function goLogined() {

    var mail     = $('#auth_login').val().trim();
    var password  = $('#auth_pass').val();

    var has_error = false;

    if(mail.length === 0)
    {
        has_error = true;
        $('#auth_login').css('border', '1.5px solid #D93025');
    }

    if(password.length === 0)
    {
        has_error = true;
        $('#auth_pass').css('border', '1.5px solid #D93025');
    }

    if(!has_error) {
        $.post('/registration/autorisation.php', 
            {
                mail: mail,
                password: password

            }, function() {

                var cookie = getCookie('error');
                error_log();

                if(cookie == null) {
                    location.reload();
                }
                
            });

        
    }

}
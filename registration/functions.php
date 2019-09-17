<?php

function randomKey($key) {

    $alfa = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFJHIJKLMNOPQRSTUWXYZ";
    $token = "";

    for($i = 1; $i <= $key; $i ++) {

        $token .= $alfa[rand(1, strlen($alfa))];

    }    

    return $token;

}

function error_cookie($error) {
    setcookie("error", $error, time()+3600, '/');
}

function get_user_info($link) {

    $user_id = $_COOKIE['user_id'];

    $sql = "SELECT * FROM `users` WHERE `user_id`= '$user_id'";

    $result = mysqli_query($link, $sql);

    $get_user_info = mysqli_fetch_assoc($result);

    return $get_user_info;
}   

function add_vk_user($link, $first_name, $id_vk, $last_name, $photo, $email, $phone, $ip_user) {

    $sql = "INSERT INTO `users_vk` (`mail`, `name`, `last_name`, `private_id`, `photo`, `phone`, `ip_user`) VALUES ('$email', '$first_name', '$last_name', '$id_vk', '$photo', '$phone', '$ip_user')";

    $result = mysqli_query($link, $sql);

    if($result) {

        setcookie("user_id", $id_vk, time()+3600, '/');
        setcookie("name", $first_name, time()+3600, '/');


    }else {

        $sql = "UPDATE `users_vk` SET `ip_user`='$ip_user' `name`='$first_name', `last_name`='$last_name', `photo`='$photo' WHERE `private_id`='$id_vk'";
        $result = mysqli_query($link, $sql);

        setcookie("user_id", $id_vk, time()+3600, '/');
        setcookie("name", $first_name, time()+3600, '/');

    }

}

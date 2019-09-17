<?php

require_once 'config.php';
require_once '../db.php';
require_once '../functions.php';


if (!$_GET['code']) {
	exit('
		<a href="/">Error code перезайдите</a>
	');
}

$token = json_decode(file_get_contents('https://oauth.vk.com/access_token?client_id='.$code.'&client_secret='.$secret.'&redirect_uri='.$url.'&code='.$_GET['code']), true);

if (!$token) {
	exit('
		<a href="/">Error token перезайдите</a>
	');
}

$data = json_decode(file_get_contents('https://api.vk.com/method/users.get?user_id='.$token['user_id'].'&access_token='.$token['access_token'].'&fields=uid,first_name,contacts,last_name,photo_big&v=5.2'), true);

if (!$data) {
	exit('
		<a href="/">Error data перезайдите</a>
	');
}

$data = $data['response'][0];

print_r($data);
print_r($token['email']);

//====================USERS====================

$first_name = $data['first_name'];
$id_vk = $data['id'];
$last_name = $data['last_name'];
$photo = $data['photo_big'];
$phone = $data['home_phone'];
$email = $token['email'];
$ip_user = $_SERVER['REMOTE_ADDR'];


add_vk_user($link, $first_name, $id_vk, $last_name, $photo, $email, $phone, $ip_user);


	header("Location: /");
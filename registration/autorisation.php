<?php

require_once "db.php";
require_once "functions.php";

$mail = filter_var(trim($_POST['mail']), FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);

$sql = "SELECT * FROM `users` WHERE `mail`= '$mail' AND `password` = '$password'";

$result = mysqli_query($link, $sql);

$get_users = mysqli_fetch_assoc($result);

if($get_users) {

    setcookie("user_id", $get_users['private_id'], time()+3600, '/');
    setcookie("name", $get_users['name'], time()+3600, '/');

}else {

    $error = 2;
    error_cookie($error);
    
}
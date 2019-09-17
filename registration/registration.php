<?php
require_once "db.php";
require_once "functions.php";
require_once "../users.php";

$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$mail = filter_var(trim($_POST['mail']), FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);


$randomKey = randomKey(50);

$sql = "INSERT INTO `users` (`mail`, `name`, `password`, `private_id`) VALUES ( '$mail', '$name', '$password', '$randomKey')";

$result = mysqli_query($link, $sql);

$response = [];

if($result) {

    $res = get_dir_user($randomKey);

    if($res === true)
    {
        $qery = "SELECT * FROM `users` WHERE `mail`= '$mail' AND `password` = '$password'";

        $resulti = mysqli_query($link, $qery);

        $get_user = mysqli_fetch_assoc($resulti);

        if($get_user) {

            setcookie("user_id", $get_user['private_id'], time()+3600, '/');
            setcookie("name", $get_user['name'], time()+3600, '/');

            //$error = 3;
            //error_cookie($error);
            $response = (object)array(
                "result"=>true
            );
        }else {

            //$error = 2;
            //error_cookie($error);
            
            $response = (object)array(
                "code"=>5,
                "description"=>"xxx"
            );
        
        }
    }else
    {
        $response =$res;
    }
} else {

    $response = (object)array(
                "code"=>6,
                "description"=>"xxx"
            );
}




$jsonresponse = json_encode($response);
$error_message = json_last_error_msg();
echo $jsonresponse;

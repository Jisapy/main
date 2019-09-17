<?php

function get_dir_user($randomKey) {

    $structure = dirname(__FILE__).'/users/'.$randomKey;

    if (file_exists($structure)) {

        //$error = 1;
        //error_cookie($error);
        //exit();
        return (object)array(
            "code"=>1,
            "description"=>"xxx"
        );
    } else {
        $res = mkdir($structure);
        
        if ($res) {
            return true;
        }else{
            ///die('Не удалось создать директории...');
            return (object)array(
                "code"=>2,
                "description"=>"xxxfhfh",
                "str"=>$structure,
                "hh"=>$res
            );
        }
    }

}

<?php

define("FILE_PATH","/callback/payment"); //文件目录
require_once '../../system/system_init.php';

require_once APP_ROOT_PATH."system/payment/JubaoAlisdk_payment.php";
$o = new JubaoAlisdk_payment();
$o->notify($_POST);

?>
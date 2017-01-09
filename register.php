<?php
/**
 * Created by PhpStorm.
 * User: user-pc
 * Date: 2016/12/29
 * Time: 23:31
 */
/*注册*/
$u = $_GET['user'];
$p = $_GET['password'];
$t = $_GET['telPhone'];

include("connect.php");

$sq= "select user,telphone from tb where user='$u' or telphone='$t'";
$retval = mysql_query( $sq, $conn );
if(! $retval )
{
    echo "查询不到数据".mysql_error();
}else{
    $row=mysql_fetch_row($retval);
    if(!$row){
        $sql1 = "INSERT INTO tb".
            "(user,password, telphone)".
            "VALUES ".
            "('$u','$p','$t')";
        $retval = mysql_query( $sql1, $conn );
        if(!$retval){
            echo "插入数据失败".mysql_error();
        }
        echo 'ok';
    }
}

mysql_close($conn);
?>
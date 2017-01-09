<?php
/**
 * Created by PhpStorm.
 * User: user-pc
 * Date: 2017/1/7
 * Time: 16:39
 */

$conn=@mysql_connect('localhost','root','nie520nie') or die ('连接失败');
mysql_select_db('test',$conn);
mysql_query("set names 'GBK'");

/*$sql1 = 'CREATE DATABASE TEST';
$retval = mysql_query( $sql1, $conn )*/

/*$sql = "CREATE TABLE tb( ".
    "user VARCHAR(40) NOT NULL, ".
    "password VARCHAR(40) NOT NULL , ".
    "telphone VARCHAR(11) NOT NULL, ".
    "PRIMARY KEY ( user )); ";
mysql_select_db('TEST');
$retval = mysql_query( $sql, $conn );
if(! $retval){
    die('数据表创建失败： ' . mysql_error());
}*/
?>



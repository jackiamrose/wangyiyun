<?php
/**
 * Created by PhpStorm.
 * User: user-pc
 * Date: 2017/1/2
 * Time: 22:39
 */
/*登录*/

$u=$_GET['user'];
$p=$_GET['password'];
//echo $u;
//echo $p;
include("connect.php");
$yz="no";

$sql1 = "SELECT * FROM tb WHERE user='" . $u . "' AND password='" . $p . "'";
//echo $sql1;
$query = mysql_query($sql1, $conn);
if (!$query) {
echo "查询不到数据！" . mysql_error();
}
$row = mysql_fetch_array($query);
//print_r($row);
if ($row) {
    $yz='ok';

}
echo $yz;



mysql_close($conn);
?>


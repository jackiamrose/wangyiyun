<?php
/**
 * Created by PhpStorm.
 * User: user-pc
 * Date: 2017/1/7
 * Time: 14:55
 */

$a=1;
$b=2;

function test($a,&$b){
  $b=3;
  echo $a.'<br>'.$b;
  return $b;
}

$c=test($a,$b);


echo '<br>'.$a.'<br>'.$b;

echo $c;
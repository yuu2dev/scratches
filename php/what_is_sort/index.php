<?php

include "Sort.php";

/** @var array */
$args = [4,3,2,1];
/*
for ($i=1; $i<=100; $i++) {
    $args[] = $i;
}
shuffle($args);
print_r($args); exit;
*/
$sort = new Sort;

/* 버블정렬
$results = $sort->bubble($args);
print_r($results); 
*/

/* 선택정렬 */
$results = $sort->selection($args, Sort::ASD);
print_r($results);

<?php

header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header("Content-type:application/json");

include("connection.php");


$query = $mysqli->prepare("SELECT id,title,image,breif,date_time from news order by id desc limit 3");
$query->execute();
$array = $query->get_result();

$response = [];

while($info = $array->fetch_assoc()){
    $response[] = $info;
}

$json = json_encode($response);
echo $json;

?>
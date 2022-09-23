<?php
//get the sports news from the table news
header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header("Content-type:application/json");

include("connection.php");


$query = $mysqli->prepare("SELECT id,title,image,breif,date_time from news where category='sports'");
$query->execute();
$array = $query->get_result();

$response = [];

while($info = $array->fetch_assoc()){
    $response[] = $info;
}

$json = json_encode($response);
echo $json;

?>
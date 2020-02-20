<?php



var_dump($_SERVER);


// prend une string en parametre
function sanitize($data){

 $data = trim($data);
 $data = htmlentities($data);
 $data = htmlspecialchars($data);

 return $data;

};

$string = date('r');
$host = sanitize($_SERVER['HTTP_HOST']);



sanitize($string);

file_put_contents('fichier.txt', 'Date du jour: '.$string. "\n".'nom du serveur: '.$host . "\n", FILE_APPEND);
readfile('fichier.txt');






















 ?>

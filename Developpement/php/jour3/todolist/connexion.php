<?php

function connexion(){
  try {
    $pdo = new PDO('mysql:host=127.0.0.1;dbname=todolist','root', 'troiswa');
    $pdo->exec('SET NAMES utf8');
    return $pdo;
  } catch (PDOException $erreur) {
      die($erreur-> getMessage());
  }


}



function sanitize($data) {
  $data = trim($data);
  $data = htmlentities($data);
  $data = htmlspecialchars($data);

  return $data;

}


?>

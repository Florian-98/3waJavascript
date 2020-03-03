<?php
function connexion() {
  if ($_SERVER['REQUEST_URI'] == '/Developpement/php/jour4/classicmodels/'){
    include('config/dbconfig.php');
  } else {
    include('config/dbconfig.php');
  }


  $host = $config['host'];
  $dbname = $config['dbname'];

  try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname",$config['dbuser'], $config['passwd']);
    $pdo->exec('SET NAMES utf8');
    return $pdo;
  } catch (PDOException $erreur) {
      die($erreur-> getMessage());
  }
}
?>

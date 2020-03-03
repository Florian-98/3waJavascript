<?php

include('database/connexion.php');

$pdo =  connexion();

$query = $pdo->prepare('SELECT * FROM tasks');
$query->execute();
//$results = $query->fetch();

// while($result = $query->fetch(PDO:: FETCH_ASSOC)) {
//   // var_dump($result);
// }

$result1 = $query->fetchAll(PDO::FETCH_ASSOC);
$pdo = null; ?>

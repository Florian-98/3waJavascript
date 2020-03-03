<?php

include('database/connection.php');

$pdo =  connexion();

$query = $pdo->prepare('SELECT * FROM orders');
$query->execute();

$result1 = $query->fetchAll(PDO::FETCH_ASSOC);
$pdo = null; ?>

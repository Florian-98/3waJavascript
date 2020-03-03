<?php

$task_id = $_GET['task_id'];

$task_id = sanitize($task_id);
$pdo = connexion();
$requete = $pdo->prepare('SELECT * FROM tasks WHERE id = ' . $task_id);
$requete->execute();
$task = $requete->fetch(PDO::FETCH_ASSOC);
$pdo = null;

?>

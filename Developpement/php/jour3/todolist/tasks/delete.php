<?php

include("../todolist.php");

if(isset($_POST) && !empty($_POST)) {
    $task_id = sanitize($_POST['task_id']);

    $query = $pdo->prepare('DELETE FROM tasks WHERE id = ' . $task_id);
    $query->execute();

    header('Location: http://localhost/Developpement/php/jour3/todolist/');
}
 ?>

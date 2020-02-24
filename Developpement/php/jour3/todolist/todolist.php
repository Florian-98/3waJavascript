<?php

include('connexion.php');

$pdo =  connexion();

$query = $pdo->prepare('SELECT * FROM tasks');
$query->execute();
//$results = $query->fetch();

// while($result = $query->fetch(PDO:: FETCH_ASSOC)) {
//   // var_dump($result);
// }

$result1 = $query->fetchAll(PDO::FETCH_ASSOC);




 if(isset($_POST['titre']) && !empty($_POST['titre'])) {
    $titre = sanitize($_POST['titre']);
 }



if(isset($_POST['priorite']) && !empty($_POST['priorite'])) {
  $priorite = sanitize($_POST['priorite']);

}


 if(isset($_POST['date']) && !empty($_POST['date'])) {
   $date = sanitize($_POST['date']);
 }


 if(isset($_POST['description']) && !empty($_POST['description'])) {
   $description = sanitize($_POST['description']);
 }

 if(isset($_POST['titre']) && !empty($_POST['titre'])) {
  $dataTasks = [
    $titre,
    $priorite,
    $date,
    $description,
  ];


  $stmt = $pdo->prepare("INSERT INTO tasks (deadline, titre, description, priorite) VALUES (:deadline, :titre, :description, :priorite)");

  $stmt->bindparam(':deadline', $date);
  $stmt->bindparam(':titre', $titre);
  $stmt->bindparam(':description', $description);
  $stmt->bindparam(':priorite', $priorite);

  $stmt->execute();
  unset($date);
  unset($titre);
  unset($description);
  unset($priorite);

  header('Location: http://localhost/Developpement/php/jour3/todolist/');

}

//}
//




// $csv = fopen('todolist.csv', 'r');
//

// while($task = fgetcsv($csv)) {
//   $tasks[] = $task;
// }

// fclose($csv);

































 ?>

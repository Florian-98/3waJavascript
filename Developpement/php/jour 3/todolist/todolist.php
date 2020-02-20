<?php



function sanitize($data) {
  $data = trim($data);
  $data = htmlentities($data);
  $data = htmlspecialchars($data);

  return $data;

}

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

  $csv = fopen('todolist.csv', 'a');
  fputcsv($csv, $dataTasks);
  fclose($csv);
}





$csv = fopen('todolist.csv', 'r');

$tasks = [];

while($task = fgetcsv($csv)) {
  $tasks[] = $task;
}

fclose($csv);

































 ?>

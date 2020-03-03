<?php

include('../database/connexion.php');
include('../helpers/helpers.php');
include('../tasks/gettask.php');
include('../tasks/deletetask.php');
include('../requests/posttasks.php');


 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="../css/bootstrap.min.css" media="screen">
    <link rel="stylesheet" href="stylesheet.css">
  </head>
  <body>

    <h1 class="text-center"><div class="spinner-grow text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div><div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>ToDoList
    </h1>
    <main>
      <div class="shadow-lg p-5 mb-5 bg-white rounded">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titre</th>
              <th scope="col">Priorité</th>
              <th scope="col">Date limite</th>
              <th scope="col">Description</th>
              <th scope="col">Supprimer la tache</th>
            </tr>
          </thead>
          <tbody>
              <tr>
            <th scope="row"></th>
                <td><?= $task['titre'] ?></td>
                <td><?= $task['priorite'] ?></td>
                <td><?= $task['deadline'] ?></td>
                <td><?= $task['description'] ?></td>
                <td>
                  <form action="delete.php" method="POST">
                  <button
                   class="btn btn-outline-danger"
                   type="submit"
                   title="Annuler"
                   name="task_id"
                   value="<?php echo $task['id'] ?>">Supprimer</i>
                 </button>
                 </form
               </td>
            </tr>
          </tbody>
        </table>
        </div>

    </main>


  </body>
</html>

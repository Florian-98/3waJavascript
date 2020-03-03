<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css" media="screen">
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
    <main class="d-flex justify-content-center">
    <?php include('tasks/deletetask.php') ?>
    <?php include('tasks/gettasks.php') ?>
    <?php include('views/forms/createtask.php') ?>

      <?php if(array_key_exists('task_id', $_GET)) : ?>
        <p>Tache</p>
      <?php else : ?>
      <div class="shadow-lg p-5 mb-5 bg-white rounded">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titre</th>
              <th scope="col">Priorité</th>
              <th scope="col">Date limite</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach($result1 as $task) : ?>
              <tr>
            <th scope="row"></th>
                <td><a href="?task_id=<?= $task['id'] ?>"><?= $task['titre'] ?></a></td>
                <td><?= $task['priorite'] ?></td>
                <td><?= $task['deadline'] ?></td>

            </tr>
            <?php endforeach ?>


          </tbody>
        </table>
        </div>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titre</th>
              <th scope="col">Priorite</th>
              <th scope="col">Date limite</th>
              <th scope="col"> Description</th>
            </tr>
          </thead>
          <tbody>


          <?php foreach($result1 as $task) : ?>
            <tr>
              <th scope="row"></th>
              <td><?= $task['titre'] ?></td>
              <td><?= $task['priorite'] ?></td>
              <td><?= $task['deadline'] ?></td>
              <td><?= $task['description'] ?></td>
            </tr>
          <?php endforeach ?>


          </tbody>
        </table>
        <?php endif ?>
    </main>
  </body>
</html>

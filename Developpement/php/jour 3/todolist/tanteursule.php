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
    <?php include('todolist.php') ?>

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
      <div class="shadow-lg p-5 mb-5 bg-white rounded">
        <form class="w-100 " method="post" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>">
          <div class="form-group">
            <label for="FormControlInput1">Titre de la tache</label>
            <input type="text" class="form-control" id="FormControlInput1" name="titre" placeholder="Entrez votre titre ici">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Selectionnez l'importance de la tache</label>
            <select class="form-control" name="priorite" id="exampleFormControlSelect1">
              <option value="forte" class="btn btn-outline-danger">Forte</option>
              <option value="normal">Normal</option>
              <option value="faible" class="btn btn-outline-success">Faible</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Date limite</label>
            <input type="date" name="date" value="date">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description de la tache</label>
            <input type="text" name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></input>
          </div>
          <a href="./"><input type="submit" class="btn btn-outline-success m-3"></input></a>  
          <input type="reset" class="btn btn-outline-danger"></input>
        </form>
      </div>
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
                <td><?= $task['titre'] ?></td>
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
    </main>

    <script type="text/javascript" src="fonctions.js"></script>
  </body>
</html>

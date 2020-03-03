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
</div>Classic Models
</h1>
<main class="d-flex justify-content-center">

  </tbody>
    </table>
    </div>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">numero de commande</th>
          <th scope="col">date de commande</th>
          <th scope="col">Date requise</th>
          <th scope="col"> Date d'envoi</th>
          <th scope="col"> Statut</th>
          <th scope="col"> Commentaire </th>
          <?php if($_SERVER['QUERY_STRING']) : ?>
            <th scope="col"> nom du client </th>
          <?php endif ?>

          <?php if(!$_SERVER['QUERY_STRING']) : ?>
            <th scope="col"> Voir plus </th>
          <?php endif ?>
        </tr>
      </thead>
    <tbody>

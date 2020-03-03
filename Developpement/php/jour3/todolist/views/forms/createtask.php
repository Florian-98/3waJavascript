<div class="shadow-lg p-5 mb-5 bg-white rounded">
  <form class="w-100 " method="post" action="requests/posttasks.php">
    <div class="form-group">
      <label for="FormControlInput1">Titre de la tache</label>
      <input type="text" class="form-control" id="FormControlInput1" name="titre" placeholder="Entrez votre titre ici" required>
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

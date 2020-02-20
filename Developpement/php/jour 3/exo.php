<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Traducteur</title>
    <link rel="stylesheet" href="stylesheet.css" media="screen">
  </head>
  <body>
    <main>
      <h1>Traducteur</h1>
      <form class="traducteur" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post">
        <fieldset>
          
          <p>

            <label for="Traducteur"></label>
            <input type="text" name="mot" placeholder="Entrez votre mot ici">
            <select name="chooselanguage">
              <option value="FrtoEn">Francais vers Anglais</option>
              <option value="EntoFr">Anglais vers Francais</option>

            </select>
            <input type="submit" value="GO !">
          </p>
        </fieldset>
      </form>


    </main>
<?php include('traducteur.php'); ?>
  </body>

</html>

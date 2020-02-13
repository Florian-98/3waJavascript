<?php    //on ecris du php//
include('include.php');   // on relis notre fichier php include;
//include_once 'file';

//require('include.php');                    // une autre maniere d'inclure le fichier include dans l'index php//
//require_once('include.php');
//on arrete d'ecrire du php
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <p>
    <?php echo $test; ?>    <!-- on affiche du php dans du html en ouvrant et fermant le language -->
    </p>
    <p>
      <?php
      echo '<ul>';                                      //integrer tableau dans html//
      foreach ($array as $element)
       {
        echo '<li>' . $element . '</li>' ;
      }
      echo '</ul>';

      print
      '<script>
         let test;
         test = "'. $test . '";
         console.log(test);
      </script>';
      ?>
    </p>
  </body>
</html>

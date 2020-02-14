  <?php include('head.php') ?>
  <?php include('header.php') ?>


<?php
var_dump($_POST);
$data = $_POST;


var_dump($_POST['email']);
 ?>


 <?php

$handle = fopen("burger.txt", "w");

$fp = fopen('burger.txt', 'w');
fwrite($fp, 'pain');
fwrite($fp, 'salade');
fwrite($fp, 'steak');
fwrite($fp, 'tomate');
fwrite($fp, 'fromage');
fwrite($fp, 'pain');
fclose($fp);

$filename = "burger.txt";
$handle = fopen($filename, "r");
$contents = fread($handle, 5000);

var_dump($contents);

fclose($handle);



 ?>

<form method="post" action="contact.php">
  <fieldset>
    <legend>Vos coordonnées</legend>
    <p>
      <label for="firstname">Votre prénom</label>
      <input type="text" id="firstname" name="prenom" value="">


      <label for="la">Votre nom</label>
      <input type="text" id="lastname" name="lastname">


      <label for="email">Votre email</label>
      <input type="email" id="email" name="email" placeholder="exemple.prenom@domaine.com" required>
    </p>
    <p> <input type="submit" name="" value="Envoyer"> </p>
  </fieldset>




<?php include('footer.php')  ?>

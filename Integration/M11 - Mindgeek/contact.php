  <?php include('head.php') ?>
  <?php include('header.php') ?>






<form method="post"input action="contact.html">
  <fieldset>
    <legend>Vos coordonnées</legend>
    <p>
      <label for="firstname">Votre prénom</label>
      <input type="text" id="firstname" name="prenom" value="">


      <label for="la">Votre nom</label>
      <input type="text" id="lastname" name="lastname">


      <label for="email">Votre email</label>
      <input type="email" id="email" name="mail" placeholder="exemple.prenom@domaine.com" required>
    </p>
  </fieldset>

  

<?php include('footer.php')  ?>

<?php include('head.php') ?>

<header class="banner">
  <a href="./">
    <img src="img/logo.png" alt="logo mindgeek">
  </a>

  <label for="mobile"><i class="fas fa-bars" id="burger"></i></label>
  <input type="checkbox" id="mobile" role="menubar">
  <nav class="banner-nav" id="wrap">

    <?php
      $nav = [
        "mutualise.html" => "Serveur Mutualisé",
        "a" => "Serveur Dédié",
        "b" => "Solution 'cloud'",
        "contact.php" => "contact"
      ];

      foreach ($nav as $key => $element)
      {
        echo '<a href="' . $key . '">' . $element . '</a>' ;
      }
    ?>
    <!-- <a href="mutualise.html"><i aria-hidden="true" class="fas fa-users"></i></a>
    <a href="#"><i aria-hidden="true" class="fas fa-user-tie"></i></a>
    <a href="#"><i aria-hidden="true" class="fas fa-cloud-upload-alt"></i></a>
    <a href="#"><i aria-hidden="true" class="far fa-paper-plane"></i></a> -->
  </nav>
</header>

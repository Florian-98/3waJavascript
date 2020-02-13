<header class="banner">
  <a href="./">
    <img src="img/logo.png" alt="logo mindgeek">
  </a>
  <nav class="banner-nav">
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

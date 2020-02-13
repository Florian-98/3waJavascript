<footer>
  <nav>
    <?php

      $navfooter = [
        "a" => "Accueil",
        "b" => "Serveur Mutualisé",
        "c" => "Serveur dédié",
        "d" => "Solution 'cloud'",
        "e" => "Contact",
        "f" => "Se connecter",
      ];

      foreach ($navfooter as $key => $element)
      {
        echo '<a href="' . $key . '">' . $element . '</a>' ;
      }

    ?>

  </nav>
  <p>
    <a rel="license" href="https://3wa.fr/propriete-materiel-pedagogique/">
    <img alt="Propriété de la 3W Academy" style="border-width:0" height="40" width="40" src="https://3wa.fr/wp-content/themes/3wa2015/img/logos/big.png" />
    </a><br/>
    <span>Cet exercice</span> de <a href="https://3wa.fr">3W Academy</a> est mis à disposition <a rel="license" href="https://3wa.fr/propriete-materiel-pedagogique/">pour l'usage personnel des étudiants, Pas de Rediffusion - Attribution - Pas d'Utilisation Commerciale - Pas de Modification - International</a>.<br />Les autorisations au-delà du champ de cette licence peuvent être obtenues auprès de <a href="mailto:contact@3wa.fr" rel="cc:morePermissions">contact@3wa.fr</a>. Les maquettes ont été réalisées par <a href="http://www.justine-muller.fr">Justine Muller</a>.
  </p>
</footer>

<?php

function traducteur($mot, $sensDeTraduction){


}
//EN ====> FR
$dictionnaire = [
  'ball' => 'ballon',
  'pitch' => 'gazon',
  'goalkeeper' => 'gardien de but',
  'referee' => 'arbitre',
  'offside' => 'hors jeu',

];

$post = $_POST;

function sanitize($data){
  $data = trim($data);
  $data = htmlentities($data);
  $data = htmlspecialchars($data);

  return $data;

}

if (isset($post['mot']) && !empty($post['mot']) ) {
  // code...
  $mot = strtolower(sanitize($post['mot']));
}



if (isset($post['chooselanguage']) && !empty($post['chooselanguage']) ) {
  // code...
  $direction = (sanitize($post['chooselanguage']));
}


if ($direction == 'EntoFr'){
  if(array_key_exists($mot, $dictionnaire)) {
    $motTraduit = $dictionnaire[$mot];

    $notification = "Le mot '$mot' se traduit par '$motTraduit'.";

    } else {

    $notification = "Je ne connais pas le mot '$mot'.";

  }
} else {

  if(in_array($mot, $dictionnaire)) {

    $motTraduit = array_search($mot, $dictionnaire);

    $notification = "Le mot '$mot' se traduit par '$motTraduit'.";

    } else {

     $notification = "Je ne connais pas le mot '$mot'.";
  }
}


echo('<h3>'.$notification.'</h3>');






  // FR ===> EN


  /*if(in_array($post['mot'], $dictionnaire)) {

    $motTraduit = array_search($mot, $dictionnaire);

    $notification = "Le mot '$mot' se traduit par '$motTraduit'.";

    } else {

     $notification = "Je ne connais pas le mot '$mot'.";
  }



  $sensDeTraduction = 'versFrancais';

  if(array_key_exists('sensDeTraduction', $post['chooselanguage']))
  {

      $direction = $_POST['chooselanguage'];
  }


include('footer.php');*/















 ?>

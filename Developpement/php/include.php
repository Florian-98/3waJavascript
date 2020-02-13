<?php

$test = 'test';  //variable//

define('CAR', 'ford');                        // declarer une constante//
const CAR2 = 'citroen';

echo $test;      //echo pour afficher variable;//

echo CAR;        // sans dollar pour afficher constante//

$array = ['test', 'test2', true, 1, 1.5];     // un tableau//
$array2 = array('test', 20, 'test2');  // un tableau aussi//

var_dump($array); //afficher un tableau//
echo '<pre>'; //afficher un tableau aussi//


echo '<p>' . $test . '</p>' ; //afficher du html, on  concatene avec les points//

for ($i = 0; $i < 10; $i++) {   // faire une boucle
 echo '<p>'.$i.'</p>';              //afficher une boucle

};

$i = 0;
while($i < 10) {
  echo $i;
  $i++;
}

$i = 0;
do {
    echo $i;
    $i++;
} while ($i < 10);

$couleur = array(
  "arbre" => "vert",
  "pomme" => "rouge",
  "citron" => "jaune",
  "ocean" => "bleu",
  1,

);

echo '<ul>';                                      //integrer tableau dans html//
foreach ($couleur as $element)
 {
  echo '<li>' . $element . '</li>' ;
}
echo '</ul>';


$ligue1 = array(
  "psg" => "first",
  "om" => "second",
  "rennes" => "third",
  "lille" => "fourth",
);

foreach ($ligue1 as $key => $value) {

    echo "{$key} => {$value} ";
    
}


?>

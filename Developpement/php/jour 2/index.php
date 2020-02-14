<?php

$numbers = [];
$numero = false;

$i = 1;
do {
    $chiffres = rand(1, 49);

    if (in_array($chiffres, $numbers)) {
      do {
        $chiffres = rand(1, 49);
      } while (in_array($chiffres, $numbers));

    };

    array_push ( $numbers, $chiffres );
    $i++;
} while ($i < 7);
sort($numbers);
print_r($numbers) ;





//deuxieme methode;

/*$numbers = [];
$numero = false;

function tirage() {
  return rand(1, 49);
}

for ($i=0; $i <= 6; $i++) {
  $number = tirage();


  if () {
    //
  }
}



print_r($numbers) ;*/
















































 ?>

<?php

$person = [
  "firstname" => "Cindy",
  "lastname" => "OLIVIER",
  "email" => "cindylartillot@gmail.com",
  "number" => "0628025502",
  "address" => "110 Rue Marcel Bellon"
];

header("Content-type: application/json; charset=utf-8");

echo json_encode($person);

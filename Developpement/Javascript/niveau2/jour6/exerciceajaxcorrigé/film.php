<?php

$films = [
  ["title" => "Qu'est ce qu'on a fais au bon Dieu ?",  "image" => "img/bon-dieu.jpg"],
  ["title" => "The grand Budapest Hotel", "image" => "img/budapest-hotel.jpg"],
  ["title" => "Captain America 2", "image" => "img/captain-america-2.jpg"],
  ["title" => "Xmen", "image" => "img/xmen.jpg"],
  ["title" => "Rio 2", "image" => "img/rio-2.jpg"],
  ["title" => "Spiderman", "image" => "img/spiderman.jpg"],
  ["title" => "Les yeux jaunes de crocodiles", "image" => "img/yeux-jaunes.jpg"],

];

header("Content-type: application/json; charset=utf-8");

echo json_encode($films);

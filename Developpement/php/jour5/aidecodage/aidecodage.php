<?php
​
class Animal {
  public $voice;
​
  function __construct($voice) {
    $this->voice = $voice;
​
  }
}
​
class chien extends Animal {
​
}
​
​
​
class chat extends Animal {
​
}
​
​
$chien1 = new chien('wouaf-wouaf');
$chat1 = new chat('miaou-miaou');
var_dump($chien1);
var_dump($chat1);
​
​

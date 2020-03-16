<?php

//
// $passwd = password_hash('passwd', PASSWORD_DEFAULT);
// var_dump($passwd);
//
//
// var_dump(password_verify('passwd', $passwd))

//////////////////////////////////////////////////////////


// $passwdChiffrer = password_hash('passwd', PASSWORD_DEFAULT);
//
//
// var_dump($passwdChiffrer);
// $test = password_verify('passwd', $passwdChiffrer);
// var_dump($test);
//

////////////////////////////////////////////////////////

session_start();

$_SESSION['id'] = hash('sha256', session_id());
$_SESSION['user'] = 'flo';



class Product
{
  public $name;
  public $description;
  public $price;

public function __construct($name, $description, $price)
{
  $this->name = $name;
  $this->description = $description;
  $this->price = $price;
  }
}



class Cart
{
  public $owner;
  public $products;
  public $total;

  public function __construct($user)
  {
    $this->owner = $user;
    $_SESSION['cart'] = $this;

  }
  public function add($product)
  {
    $this->products[$product->name] = $product;


  }
  private function total()
  {
    $this->total= 0;
    foreach($this->products as $product){
      $this->total += $product->price;
    }
    return $_SESSION['cart']->total = $this->total;

  }

  public function getTotal()
  {
    return $_SESSION['cart']->total = money_format('%i€', $this->total() /100);

  }

}



$product = new Product('Shoes', 'Super Shoes', 5500);
$product2 = new Product ('Sopalin', 'Super Absorbant', 500);
$cart = new Cart($_SESSION['user']);
$cart->add($product);
$cart->add($product2);
// $cart->total();
$cart->getTotal();
//
// var_dump($cart->getTotal());
// var_dump($cart->total());

unset($cart);
session_unset();
session_destroy();
var_dump($_SESSION['user']);

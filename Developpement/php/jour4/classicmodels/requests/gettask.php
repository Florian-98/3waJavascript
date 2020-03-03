<?php

include('database/connection.php');
include('helper/helper_functions.php');

$pdo =  connexion();

$tva = 20;


$order = sanitizeGet($_GET);
$stmt = $pdo->prepare('SELECT * FROM orders WHERE orderNumber = :orderNumber');
$stmt2 = $pdo->prepare('SELECT *, (quantityOrdered * priceEach) AS TotalHT, ((quantityOrdered * priceEach) * (' . $tva . ' /100)) AS MontantTVA
  FROM orders
  INNER JOIN customers ON orders.customerNumber = customers.customerNumber
  INNER JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber
  WHERE orders.orderNumber = :orderNumber');

$order_id = $order['orderNumber'];

$stmt->bindParam(':orderNumber', $order_id);
$stmt2->bindParam(':orderNumber', $order_id);

try {
    $stmt->execute();
    $stmt2->execute();
    $order = $stmt->fetch(PDO::FETCH_ASSOC);
    $order2 = $stmt2->fetch(PDO::FETCH_ASSOC);

    var_dump($order2);
} catch (PDOException $e) {
    die($e->getMessage());
}

$pdo = null;

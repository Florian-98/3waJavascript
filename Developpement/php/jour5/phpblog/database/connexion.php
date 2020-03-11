<?php


if($_SERVER['REQUEST_URI'] === '/developpement/php/blog/' || $_SERVER['QUERY_STRING']) {
    include('dbconfig/dbconfig.php');
}
else {
    include('../dbconfig/dbconfig.php');
}

try {
    $pdo =  new PDO(
        'mysql:host='. $config['host'] .';dbname=' . $config['dbname'],
        $config['dbuser'],
        $config['passwd'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    $pdo->exec('set NAMES utf8');
} catch (PDOException $e) {
    die($e->getMessage());
}

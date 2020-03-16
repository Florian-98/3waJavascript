<?php


$config = [
  'host' => '127.0.0.1',
  'dbuser' => 'root',
  'passwd' => 'troiswa',
  'dbname' => 'blog'
];


include('create_table.php');


$host = $config['host'];
$dbuser = $config['dbuser'];
$dbname = $config['dbname'];


try {
    $pdo = new PDO("mysql:host=$host", $dbuser, $config['passwd']);
    $pdo->exec("CREATE DATABASE IF NOT EXISTS $dbname; USE $dbname")
    or die(print_r($pdo->errorInfo(), true));

    $create_users = $pdo->prepare($create_table_users);
    $create_category = $pdo->prepare($create_table_category);
    $create_posts = $pdo->prepare($create_table_posts);
    $create_comments = $pdo->prepare($create_table_comments);
    $create_passwd = $pdo->prepare($alter_table_user_passwd);

    $create_users->execute();
    $create_category->execute();
    $create_posts->execute();
    $create_comments->execute();
    $create_passwd->execute();

    $user_insert = $pdo->prepare($create_user);
    $user_insert->execute();
    echo 'database, tables and user created';
} catch (PDOException $e) {
    die("DB ERROR: ". $e->getMessage());
}

$pdo = null;

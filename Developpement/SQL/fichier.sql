

LIGNES DE COMMANDES TERMINAL SQL


CREATE DATABASE todolist CHARACTER SET utf8 COLLATE utf8_general_ci
CREATE TABLE tasks (id INT(11) PRIMARY KEY AUTO_INCREMENT, deadline DATE NOT NULL, titre VARCHAR(50) NOT NULL, description TEXT(1000) NOT NULL, priorite CHAR(7) NOT NULL )ENGINE = INNODB CHARACTER SET=utf8
DROP TABLE tasks
CREATE TABLE tasks (id INT(11) PRIMARY KEY AUTO_INCREMENT, deadline DATE NOT NULL, titre CHAR(50) NOT NULL, description TEXT(1000) NOT NULL, priorite CHAR(7) NOT NULL ) ENGINE=InnoDB CHARACTER SET=utf8
SELECT * FROM `tasks`
CREATE TABLE users(id INT(11) PRIMARY KEY AUTO_INCREMENT, name CHAR(150) NOT NULL, email CHAR(255) NOT NULL UNIQUE )
SELECT * FROM `users`
SELECT * FROM `users`
ALTER TABLE tasks ADD users_id int(11)
SELECT * FROM `tasks`
ALTER TABLE tasks ADD CONSTRAINT fk_user_id FOREIGN KEY (users_id) REFERENCES users(id)
INSERT INTO users (name, email) VALUES ('Florian', 'floflogobin@gmail.com')
SELECT * FROM `users`
SELECT * FROM `users`
INSERT INTO tasks (deadline, titre, description, priorite, users_id ) VALUES ('2020-02-20', 'faire les courses', 'ma liste de courses', 'normal', 1)
INSERT INTO tasks (deadline, titre, description, priorite, users_id ) VALUES ('2020-03-20', 'nourrir oasis', 'croquette', 'forte', 1)
INSERT INTO tasks (deadline, titre, description, priorite, users_id ) VALUES ('2020-04-20', 'ligue des champions', 'psg-dortmund', 'normal', 1)
INSERT INTO tasks (deadline, titre, description, priorite, users_id ) VALUES ('2020-05-20', 'jouer a fifa', 'partie de playstation', 'forte', 1)
INSERT INTO tasks (deadline, titre, description, priorite, users_id ) VALUES ('2020-02-21', 'anniversaire Elea', 'grosse soirée énervé', 'forte', 1)
INSERT INTO tasks (deadline, titre, description, priorite, users_id ) VALUES ('2022-06-20', 'election presidentiel', 'ne pas voter pour macron', 'normal', 1)
INSERT INTO tasks (deadline, titre, description, priorite, users_id ) VALUES ('2020-02-23', 'guitare', 'apprendre a jouer du selena gomez', 'faible', 1)
SELECT * FROM `tasks`
SELECT * FROM tasks
SELECT * FROM tasks WHERE users_id = 1
SELECT name, titre FROM users AS u JOIN tasks AS t ON u.id = t.users_id
create table products(id int(11) PRIMARY KEY AUTO_INCREMENT, name CHAR(50) NOT NULL, price int(11) NOT NULL )
SELECT * FROM `products`
INSERT INTO products (name, price) VALUES ('product', 10), ('product2', 76), ('product', 340), ('product2', 4321), ('product', 54), ('product2', 19876), ('product', 123), ('product2', 654), ('product', 5765), ('product2', 65), ('product', 456), ('product2', 654)
SELECT * from products
SELECT MAX(price) FROM products
SELECT MIN(price) FROM products
SELECT AVG (price) FROM products
SELECT price FROM products WHERE price BETWEEN 50 and 100
SELECT name,price FROM products WHERE price BETWEEN 50 and 100
SELECT price FROM products HAVING price > 1000
SELECT name FROM products WHERE name LIKE '%pro%'

---------------------------------------------------------------------------------------
EXERCICE MYSQL REQUETES

1.La liste des bureaux (adresse et ville) triés par pays décroissant puis par état
2.La liste des avions (code et nom) triés par vendeur et par quantité en stock décroissants
3.La liste des produits (nom, vendeur et prix de vente) qui sont vendus au moins 132$ triés par nom du produit
4.La liste des produits (code, nom, échelle et quantité) qui ont une échelle soit de 1:10, soit de 1:18 triés par quantité en stock décroissante
5.La liste des produits (code, nom et prix d'achat) des produits achetés au moins 60$ au plus 90$ triés par prix d'achat
6.La liste des motos (nom, vendeur, quantité et marge) triés par marge décroissante
7.La liste des commandes (numéro de commande, date de commande, date d'expédition, écart en jours entre la date de commande et la date d'expédition, statut de la commande) soit qui sont en cours de traitement, soit qui ont été expédiées plus de 10 jours après la date de commande triés par écart décroissant puis par date de commande
8.La liste des produits (nom et valeur du stock à la vente) des années 1960
9.Le prix moyen d'un produit vendu par chaque vendeur triés par prix moyen décroissant
10.Le nombre de produits pour chaque ligne de produit
11.Le total du stock et le total de la valeur du stock à la vente de chaque ligne de produit pour les produits vendus plus de 100$ trié par total de la valeur du stock à la vente
12.La quantité du produit le plus en stock de chaque vendeur trié par vendeur
13.Le prix de l'avion qui coûte le moins cher à l'achat
14.Le crédit des clients qui ont payé plus de 20000$ durant l'année 2004 trié par crédit décroissant
15.La liste des employés (nom, prénom et fonction) et des bureaux (adresse et ville) dans lequel ils travaillent
16.La liste des clients français ou américains (nom du client, nom, prénom du contact et pays) et de leur commercial dédié (nom et prénom) triés par nom et prénom du contact
17.La liste des lignes de commande (numéro de commande, code, nom et ligne de produit) et la remise appliquée aux voitures ou motos commandées triées par numéro de commande puis par remise décroissante
18.Le total des paiements effectués de chaque client (numéro, nom et pays) américain, allemand ou français de plus de 50000$ trié par pays puis par total des paiements décroissant
19.Le montant total de chaque commande (numéro et date) des clients New-Yorkais (nom) trié par nom du client puis par date de commande

REPONSES

1. SELECT addressLine1, addressLine2, city, country, state FROM offices ORDER BY country DESC, state
2. SELECT productName, productCode FROM products WHERE productLine = 'planes' ORDER BY productVendor, quantityInStock DESC
3. SELECT productName, productVendor, MSRP FROM `products` WHERE MSRP >= 132 ORDER BY productName
4. SELECT productCode, productName, productScale, quantityInStock FROM `products` WHERE productScale = '1:10' OR productScale = '1:18' ORDER BY quantityInStock DESC
5. SELECT productCode, productName, buyPrice, FROM `products` WHERE MIN(buyPrice) >= 60 MAX(buyPrice) =< 90
6. SELECT productName, productVendor, quantityInStock, MSRP-buyPrice as marge FROM products WHERE productLine = "motorcycles" order by marge DESC
7. SELECT orderNumber, orderDate, ShippedDate, status, DATEDIFF(ShippedDate, orderDate) FROM 'orders' WHERE status ='in process' OR status= 'Shipped' ORDER BY order DATE AND DATEDIFF(ShippedDate, orderDate) DESC,
8. SELECT productName, buyPrice FROM `products` WHERE productName LIKE '196%' ORDER BY productName
9.
10.
11.
12.
13.
14.
15.
16.
17.
18.
19.

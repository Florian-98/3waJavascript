

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
Développer Exécuter la requête à nouveau Éditer Expliquer Profilage Signet Base de données : todolist Daté du : 13:10:55
SELECT * from products
SELECT MAX(price) FROM products
SELECT MIN(price) FROM products
SELECT AVG (price) FROM products
SELECT price FROM products WHERE price BETWEEN 50 and 100
SELECT name,price FROM products WHERE price BETWEEN 50 and 100
SELECT price FROM products HAVING price > 1000
SELECT name FROM products WHERE name LIKE '%pro%'

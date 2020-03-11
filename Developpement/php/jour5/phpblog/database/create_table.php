<?php

$create_table_users = '
    CREATE TABLE IF NOT EXISTS users (
        id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        img CHAR(200) NULL,
        name CHAR(150) NOT NULL,
        email CHAR(150) NOT NULL,
        is_author BOOLEAN DEFAULT FALSE,
        is_the_boss BOOLEAN DEFAULT FALSE,
        UNIQUE KEY email (email)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
';

$create_table_category = '
    CREATE TABLE IF NOT EXISTS category (
        id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        titre char(50) NOT NULL,
        description text NOT NULL
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
';

$create_table_posts = '
    CREATE TABLE IF NOT EXISTS posts (
        id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        created_at TIMESTAMP NOT NULL,
        titre CHAR(50) NOT NULL,
        description CHAR(255) NOT NULL,
        img CHAR(200) NOT NULL,
        body TEXT NOT NULL,
        author_id int(11) NOT NULL,
        CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES users (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
';

$create_table_comments = '
    CREATE TABLE IF NOT EXISTS comments (
        id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        text CHAR(255) NOT NULL,
        users_id int(11) NOT NULL,
        post_id int(11) NOT NULL,
        CONSTRAINT fk_users_id FOREIGN KEY (users_id) REFERENCES users (id),
        CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES posts (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
';

$create_user = '
    INSERT INTO users (name, email, is_the_boss) VALUES (\'florian\', \'floflogobin@gmail.com\', TRUE);
';

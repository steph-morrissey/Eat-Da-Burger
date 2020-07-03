CREATE DATABASE burger_db

USE burger_db

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR
    (50) NOT NULL,
    eaten BOOLEAN DEFAULT false
)
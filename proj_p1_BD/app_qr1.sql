CREATE DATABASE app_qr;
USE app_qr;

CREATE TABLE IF NOT EXISTS USER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user not null varchar(30),
    password not null varchar(30),
    name varchar(30),
    phone varchar(30),
    qrcode varchar(30),
    rank int not null,
    FOREIGN KEY (parent) REFERENCES USER(id),
);

CREATE TABLE IF NOT EXISTS USER ( id INT AUTO_INCREMENT PRIMARY KEY, user varchar(30), password varchar(30), name varchar(30), phone varchar(30), qrcode varchar(30), rank INT, parent INT, FOREIGN KEY (parent) REFERENCES USER(id) )

DELIMITER $$

CREATE PROCEDURE inserir_admin(IN user VARCHAR(255), IN password VARCHAR(255))
BEGIN
INSERT INTO USER (user, password,rank) VALUES (user, password,5);
END $$
DELIMITER;

CREATE TABLE IF NOT EXISTS RECORD (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (id_student) int not null REFERENCES USER(id),
    FOREIGN KEY (id_guard) int not null REFERENCES USER(id),
    date_record TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Registro
(
id_registro int(30) unsigned not null auto_increment,
data_registro date,
id_aluno_rg int unsigned not null,
id_guarda_rg int unsigned not null,
FOREIGN KEY (id_aluno_rg) REFERENCES Aluno(id_aluno),
FOREIGN KEY (id_guarda_rg) REFERENCES Guarda(id_guarda)
);
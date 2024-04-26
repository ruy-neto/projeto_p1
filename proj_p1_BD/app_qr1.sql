CREATE DATABASE app_qr;
USE app_qr;

CREATE TABLE Administrador
(
id_admin int unsigned not null auto_increment,
login_adm varchar(30),
senha_adm varchar(30),
PRIMARY KEY(id_admin)
);

CREATE TABLE Aluno
(
id_aluno int unsigned not null auto_increment,
ra int(30) unsigned not null,
id_respons_al int(30) unsigned not null,
nome_aluno varchar (40),
qr_aluno varchar (30),
PRIMARY KEY(id_aluno),
FOREIGN KEY (id_respons_al) REFERENCES Responsavel(id_respons)
);
CREATE TABLE Responsavel
(
id_respons int unsigned not null auto_increment,
login_respons varchar(30),
senha_respons varchar(30),
telefone_respons varchar(30),
PRIMARY key(id_respons)
);
CREATE TABLE Guarda
(
id_guarda int(30) unsigned not null auto_increment,
nome_guarda varchar (40),
telefone_guarda varchar (30),
PRIMARY KEY(id_guarda)
);
CREATE TABLE Registro
(
id_registro int(30) unsigned not null auto_increment,
data_registro date,
id_aluno_rg int unsigned not null,
id_guarda_rg int unsigned not null,
FOREIGN KEY (id_aluno_rg) REFERENCES Aluno(id_aluno),
FOREIGN KEY (id_guarda_rg) REFERENCES Guarda(id_guarda)
);
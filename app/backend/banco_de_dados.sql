create table galeria
(
    id       int auto_increment primary key,
    aprovado tinyint(1) default 0 null,
    nome     varchar(100) null,
    cargo    varchar(50) null,
    imagem1  mediumblob null,
    imagem2  mediumblob null,
    imagem3  mediumblob null
);
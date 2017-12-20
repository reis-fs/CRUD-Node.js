create database tutorialnodejs;

use tutorialnodejs;

create table produtos(
	id_produto int primary key auto_increment,
    nome varchar(255) not null,
    preco float not null,
    estoque int not null,
    data_criacao datetime null
);

insert into produtos(nome, preco, estoque, data_criacao) 
	values ('Celular',500.00, 20,'2017-12-14 08:52:20');

insert into produtos(nome, preco, estoque, data_criacao) 
	values ('TV',1200.00, 12,'2017-12-20 10:34:23');

insert into produtos(nome, preco, estoque, data_criacao) 
	values ('Notebook',2000.99, 20,'2017-11-17 12:21:44');
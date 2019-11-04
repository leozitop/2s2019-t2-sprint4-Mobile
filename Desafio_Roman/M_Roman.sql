create database M_Roman
use M_Roman

--DDL--

create table Professores (
IdProfessor int primary key identity, 
Nome varchar(200));

create table Usuarios (
IdUsuario int primary key identity,
Email varchar(200) unique not null,
Senha varchar(200) not null,
Nome varchar(200));

create table Temas (
IdTema int primary key identity,
Tema varchar(200));

create table Projetos (
IdProjeto int primary key identity,
Projeto varchar(200),
Descricao varchar(200),
IdProfessor int foreign key references Professores(IdProfessor),
IdTema int foreign key references Temas(IdTema));

drop table Projetos;

-- DML --

insert into Professores (Nome)
values('Erik'),('Helena'),('Roberto'),('Tsuka'),('César'),('Gabriel')

insert into Usuarios (Nome, Email, Senha)
values('Leo','leo@gmail.com','123456'),('Diego','diego@gmail.com','654321')

insert into Temas(Tema)
values('HQ'),('Gestão'),('Jogos'),('Cinema'),('Automóveis'),('Alimentos')

insert into Projetos (Projeto, Descricao, IdProfessor, IdTema)
values ('Controle de Estoque','Efetuar o controle do estoque de materiais',3,2),
('Listagem de persongens','Listar os personagens das hqs mais iradas',1,1),
('Campeonato de jogos','Organizar um campeonato de jogos',6,3),
('OpFlix','Listar uma enorme lista de lançamentos',2,4),
('Tsukar','Organizar um estacionamento de carros',4,5),
('Alimentação saudável','Tornar a alimentação saudável',5,6)


-- DQL --

select	Nome, Descricao, from Projetos
join Professores 
on Professores.IdProfessor = Projetos.IdProfessor
join Temas
on Temas.IdTema = Projetos.IdTema

-- DQL --

SELECT Projetos.Projeto, Projetos.Descricao, Temas.Tema, 
Professores.Nome
FROM Projetos
FULL JOIN Temas
ON Projetos.IdTema = Temas.IdTema
FULL JOIN Professores
ON	Professores.IdProfessor = Projetos.IdProfessor


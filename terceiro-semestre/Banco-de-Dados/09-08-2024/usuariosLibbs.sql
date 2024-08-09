CREATE DATABASE usuariosLibbs;

USE usuariosLibbs;

CREATE TABLE usuarios (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
	senha VARCHAR(40)
);

INSERT INTO usuarios (nome, email, senha)
VALUES ('Thiago', 'thiago@email.com', '123'),
	   ('Arthur', 'arthur@estrelabet.com', 'blaze'),
       ('Rossatto', 'lucasrossato@email.com', 'lakers'),
       ('Lucas Inutilismo', 'inutilismo@chicoins.com', 'sosia');

UPDATE usuarios SET nome = "Lucas Santos" WHERE id = 4; -- Atualizar
SELECT * FROM usuarios; -- Visualizar todas as colunas

-- ----------------------
-- ----------------------
-- ----------------------
-- Criar tabela de produtos e inserir 5 produtos
-- Colunas (id, nome, preço, quantidade)

CREATE TABLE produtos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    preco INT,
    quantidade INT
);

USE produtos;

INSERT INTO produtos (nome, preco, quantidade)
VALUES ('iPhone 13', 4500, 2 ),
	   ('iPhone 14', 5000, 4),
       ('iPad', 2000, 1),
       ('Samsung S24', 4000, 3),
       ('Cama', 2000, 5);
       
       
UPDATE produtos SET nome = 'MacBook' WHERE id = 5;
UPDATE produtos SET preco = 6000 WHERE id = 5;
SELECT * FROM produtos; -- Visualizar todas as colunas

-- Somar
SELECT SUM(preco) FROM produtos;

-- Média
SELECT AVG(preco) FROM produtos;

-- Crie uma tabela Pedidos
-- IdUsuário
-- IdProdutos
-- FK 2 -> Chaves Estrangeiras

-- Adicionar 3 pedidos

CREATE TABLE pedidos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    IdUsuario INT,
    IdProduto INT,
	FOREIGN KEY (IdUsuario) REFERENCES usuarios(id),
    FOREIGN KEY (idProduto) REFERENCES produtos(id)
);

INSERT INTO pedidos (IdUsuario, IdProduto)
VALUE (1, 2),
	  (2, 4),
      (4, 3);
      
SELECT * FROM pedidos; -- Visualizar todas as colunas

CREATE DATABASE walmart;

USE walmart;

CREATE TABLE produto (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    quantidade INT
);

CREATE TABLE cliente (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    idade INT
);

CREATE TABLE fornecedor (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE pedido (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_produto INT,
    id_cliente INT, 
    id_fornecedor INT,
    
    FOREIGN KEY (id_produto) REFERENCES produto(id), 
    FOREIGN KEY (id_cliente) REFERENCES cliente(id),
    FOREIGN KEY (id_fornecedor) REFERENCES fornecedor(id)
);

INSERT INTO cliente (nome, idade) VALUES
('Gabriel', 18),
('Maria.', 22),
('Heitor', 25),
('José', 17),
('Karina', 28);

INSERT INTO produto (nome, quantidade) VALUES
('Arroz', 152),
('Feijão', 259),
('Maccarone', 55),
('PlaySation 5', 15),
('iPhone 25 Ultra Max', 10);

INSERT INTO fornecedor (nome) VALUES
('Prato Fino'),
('Tio João'),
('Dona Benta'),
('PlayStation Inc.'),
('Apple');

INSERT INTO pedido (id_produto, id_cliente, id_fornecedor) VALUES
(1, 1, 1), -- Gabriel comprou Arroz de Prato Fino
(2, 2, 2), -- Maria comprou Feijão de Tio João
(3, 3, 3), -- Heitor comprou Maccarone de Dona Benta
(4, 4, 4), -- José comprou PlayStation 5 de PlayStation Inc.
(5, 5, 5); -- Karina comprou iPhone 25 Ultra Max de Apple

SELECT 
	cliente.nome AS Nome_Cliente,
    produto.nome AS Nome_Produto,
    fornecedor.nome AS Nome_Fornecedor
FROM pedido
INNER JOIN cliente ON pedido.id_cliente = cliente.id
INNER JOIN produto ON pedido.id_produto = produto.id
INNER JOIN fornecedor ON pedido.id_fornecedor = fornecedor.id;


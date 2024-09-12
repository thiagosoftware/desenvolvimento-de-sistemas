CREATE DATABASE nuvemshop;
USE nuvemshop;

CREATE TABLE categorias (
	id_categoria INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE clientes (
	id_cliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20)
);

CREATE TABLE produtos (
	id_produto INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    preco VARCHAR(20),
	categoriaId INT,    
    FOREIGN KEY (categoriaId) REFERENCES categorias(id_categoria)
);

CREATE TABLE pedidos (
	id_pedido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    data_pedido DATE,
    clienteId INT,
    FOREIGN KEY (clienteId) REFERENCES clientes(id_cliente)
);

CREATE TABLE pagamentos (
	id_pagamentos INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    metodo_pagamentos VARCHAR(100),
    valor_pago INT,
    data_pagamento DATE,
    pedidoId INT,
    FOREIGN KEY (pedidoId) REFERENCES pedidos(id_pedido)
);

CREATE TABLE itenspedidos (
	id_itenspedidos INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    quantidade INT,
    preco_unitario INT,
    pedidoId INT,
    produtoId INT,
    
    FOREIGN KEY (pedidoId) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (produtoId) REFERENCES produtos(id_produto)
);

-- Inserindo categorias
INSERT INTO categorias (nome) 
VALUES ('Eletrônicos'), ('Roupas');

INSERT INTO clientes (nome, email, telefone) 
VALUES ('João Silva', 'joao@gmail.com', '11987654321'),
       ('Maria Souza', 'maria@gmail.com', '11987654322');

INSERT INTO produtos (nome, preco, categoriaId) 
VALUES ('Smartphone', '2000', 1),
       ('Camiseta', '50', 2);

INSERT INTO pedidos (data_pedido, clienteId) 
VALUES ('2024-09-06', 1),
       ('2024-09-07', 2);

INSERT INTO pagamentos (metodo_pagamentos, valor_pago, data_pagamento, pedidoId) 
VALUES ('Pix', 2000, '2024-09-06', 1),
       ('Crédito', 50, '2024-09-07', 2);

INSERT INTO itenspedidos (quantidade, preco_unitario, pedidoId, produtoId) 
VALUES (1, 2000, 1, 1),
       (2, 50, 2, 2);


-- INERJOIN
-- Selecione todos os produtos e suas catedorias
SELECT
	prod.nome,
    prod.preco,
    categorias.nome
FROM produtos AS prod
INNER JOIN categorias ON prod.categoriaId = categorias.id_categoria;

-- INERJOIN
-- Selecione todos os clientes que possuam pedidos

SELECT
	cli.nome, cli.email, cli.telefone
FROM clientes AS cli
INNER JOIN pedidos ON cli.id_cliente = pedidos.clienteId;

-- Categorias -> Produtos -> ItensPedidos -> Pedidos

SELECT 
    cat.nome AS categoria_nome, 
    produtos.nome AS produto_nome
FROM categorias AS cat
INNER JOIN produtos ON produtos.categoriaId = cat.id_categoria
INNER JOIN itenspedidos ON itenspedidos.produtoId = produtos.id_produto
INNER JOIN pedidos ON itenspedidos.pedidoId = pedidos.id_pedido;
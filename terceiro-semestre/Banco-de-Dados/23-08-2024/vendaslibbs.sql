CREATE DATABASE vendaslibbs;

USE vendaslibbs;

CREATE TABLE clientes (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    idade int
);

CREATE TABLE produtos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    preco VARCHAR(30)
);

CREATE TABLE fornecedores (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    cnpj VARCHAR(16)
);

CREATE TABLE funcionarios (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    cpf VARCHAR(20),
    ctps VARCHAR(16),
    salario INT
);
-- Clientes, produtos, funcionarios, fornecedores

CREATE TABLE pedidos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    idCliente INT,
    idProduto INT,
    idFuncionario INT,
    idFornecedor INT,
    -- FOREIGN KEY (colunaAtual) REFERENCES tabela(nomeColuna)
    FOREIGN KEY (idCliente) REFERENCES clientes(id),
    FOREIGN KEY (idProduto) REFERENCES produtos(id),
    FOREIGN KEY (idFuncionario) REFERENCES funcionarios(id),
    FOREIGN KEY (idFornecedor) REFERENCES fornecedores(id)
);

INSERT INTO clientes (nome, idade) VALUES
('Thiago', 14),
('Esthefany', 18),
('Marcos', 22);

INSERT INTO produtos (nome, preco) VALUES
('Camiseta Minimal', 'R$110,55'),
('Calça de Alfaiataria', 'R$55,00'),
('Tênis Gucci', 'R$657,97');

INSERT INTO fornecedores (nome, cnpj) VALUES
('Club Minimal', '21.323/0001-21'),
('Ponto do Homem', '56.853/0001-69'),
('Gucci Group', '43.972/0001-46');

-- NOME, CPF, CTPS, SALARIO = INT
INSERT INTO funcionarios (nome, cpf, ctps, salario) VALUES
('Henrique', '683.438.597-05', '18364589723556940', 1420),
('Gabriel', '953.805.987-78', '18364589723556940', 1450),
('Marilía', '963.025.732-50', '18364589723556940', 2560);

INSERT INTO pedidos (idCliente, idProduto, idFuncionario, idFornecedor) VALUES
(1, 1, 1, 1),
(2, 3, 2, 3),
(3, 2, 3, 2);
CREATE DATABASE operadores_libbs;

USE operadores_libbs;

CREATE TABLE clientes (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(80),
    idade INT
);

INSERT INTO clientes (nome, idade)
VALUES ('Tia Silvia', 25),
	   ('Lukas Rosado', 18),
       ('Indio Branco', 80);

CREATE TABLE empregados (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR (80),
    idade INT,
    salario INT
);

INSERT INTO empregados (nome, idade, salario)
VALUES ('Thiago Rodrigues', 25, 100000000),
	   ('Esthefany Souza', 18, 520000000),
       ('João Rosa', 10, 2);

CREATE TABLE produtos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(80),
    preco INT,
    quantidade INT
);

INSERT INTO produtos (nome, preco, quantidade)
VALUES ('Torradeira', 4000, 5),
	   ('Celular', 5000, 15),
       ('Oculos', 90, 2);
       
-- Operadores
-- AS -> Igual
SELECT 10 + 5 AS soma;
SELECT 10 - 8 AS subtracao;
SELECT 10 * 8 AS multiplicacao;
SELECT 10 / 8 AS divisao;
SELECT 10 % 8 AS modulo;

-- Operadores de Comparação 
SELECT * FROM clientes WHERE idade = 25; -- Igual 
SELECT * FROM clientes WHERE idade != 25; -- Diferente
SELECT * FROM produtos WHERE preco > 4000; -- Maior
SELECT * FROM produtos WHERE preco < 5000; -- Menor
SELECT * FROM produtos WHERE preco >= 3000; -- Maior ou Igual
SELECT * FROM produtos WHERE preco >= 5000; -- Menor ou Igual
SELECT * FROM produtos WHERE preco BETWEEN 50 AND 100; -- Entre
SELECT * FROM clientes WHERE nome IN ('Tia Silvia', 'Indio Branco'); -- Diversos
SELECT * FROM clientes WHERE nome LIKE ('tia%'); -- Silvia 
SELECT * FROM clientes WHERE nome LIKE ('%co'); -- bran
SELECT * FROM clientes WHERE nome IS NULL; -- Selecionando quem é nulo

-- Operadores Lógicos
SELECT * FROM clientes WHERE idade > 15 AND idade < 25; -- &&
SELECT * FROM clientes WHERE idade < 15 OR idade < 25; -- ||
SELECT * FROM clientes WHERE NOT idade = 80; -- Não seja

-- Função de Agregação 
SELECT COUNT(*) FROM clientes; -- Contar as linhas do banco
SELECT SUM(quantidade) FROM produtos; -- Somar
SELECT AVG(quantidade) FROM produtos; -- Média
SELECT MIN(quantidade) FROM produtos; -- Minimo
SELECT MAX(quantidade) FROM produtos; -- Máximo

-- Funções de String
SELECT CONCAT(nome, idade) FROM clientes; -- Concatena 'nome' e 'idade'.
SELECT LOWER(nome) FROM clientes; -- Converte para minúsculas.
SELECT UPPER(nome) FROM clientes; -- Converte para maiúsculas.
SELECT SUBSTRING(nome, 5, 10) FROM clientes; -- Extrai substring.

-- Funções de Data e Hora
SELECT NOW(); -- Data e hora atuais.
SELECT CURDATE(); -- Data atual.
SELECT CURTIME(); -- Hora atual.

-- Funções Matemáticas
SELECT ABS(-534.25); -- Valor absoluto.
SELECT CEIL(43.45); -- Arredonda para cima.
SELECT FLOOR(45.97); -- Arredonda para baixo.
SELECT ROUND(45.44); -- Arredonda para o mais próximo.
SELECT SQRT(9); -- Raiz quadrada
-- Ctrl + Shift + Enter => Executa o Código

CREATE DATABASE senai; -- Criar um database

USE senai; -- Selecionando database que vamos utilizar
CREATE TABLE professores(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    -- INT inteiro
    -- Primary key -> Indica Chave primária
    -- Not null -> Nunca vai ser vazio
    -- Auto_Increment -> Auto adicionar um número
    nome VARCHAR(60),
    materia VARCHAR(30)
);

-- Inserir registros na tabela 'professores'
INSERT INTO professores (nome, materia) VALUES
	-- Adiciona um novo registro na tabela 'professores'
('Arthur Rosa', 'Banco de Dados'),
('Samuel Bruce', 'Flutter'),
('Giovanni Vicking', 'React Native');


SELECT * FROM professores;

USE senai;
UPDATE professores SET materia = 'Back-end' WHERE id = 1;
-- Atualizar dados
-- Atualize a tabela professores, ajuste a matéria = Back-end
-- Onde o ID seja igual a 1
-- if (id == 1) { atualiza a materia }

-- WHERE -> IF
DELETE FROM professores WHERE id = 1;

-- ################## DESAFIO ##################
-- Criar tabela ALunos
-- (id, nome, idade)
-- Inserir três alunos

CREATE TABLE alunos(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(60),
idade INT
);

INSERT INTO alunos (nome, idade) VALUES
('Thiago Rodrigues', 18),
('Luccas Rossato', '18'),
('Lucas Santos', '20'),
('Esthefany Oliveira','18'),
('Vivianne Descristo','19');

SELECT * FROM alunos;

-- Colunas
ALTER TABLE alunos
MODIFY COLUMN nome VARCHAR(40);

-- Adicionar uma coluna
ALTER TABLE alunos
ADD COLUMN matricula VARCHAR(10);

-- Deletar uma coluna
ALTER TABLE alunos
DROP COLUMN matricula;

-- Trocar o nome
ALTER TABLE estudantes
CHANGE COLUMN novoNome nome VARCHAR(30);
SELECT * FROM estudantes;

-- Altera o nome da tabela
ALTER TABLE alunos
RENAME TO estudantes;


CREATE DATABASE escola; 
USE escola;

CREATE TABLE professor (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    nome VARCHAR(100),
    idade INT
);

CREATE TABLE aluno (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100),
    idade INT
);

CREATE TABLE turma (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_aluno INT,
    id_professor INT,
    
	FOREIGN KEY (id_aluno) REFERENCES aluno(id),
    FOREIGN KEY (id_professor) REFERENCES professor(id)
);

INSERT INTO aluno (nome, idade) VALUES
('Felipe', 18),
('Thiago', 18),
('Esthefany', 19),
('Marilia', 22),
('Renato', 17);

INSERT INTO professor (nome, idade) VALUES
('Artur', 26),
('Giovanni', 33),
('Samuel', 40),
('Ive', 99);

SELECT * FROM aluno;
SELECT * FROM professor;

INSERT INTO turma (id_professor, id_aluno) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(1, 5),
(2, 1),
(3, 2),
(4, 3);

SELECT * FROM turma;

-- Aluno -> Turma
SELECT al.nome, al.idade, turma.id_professor
FROM aluno AS al
INNER JOIN turma ON turma.id_aluno = al.id;

-- Peofessor -> Turma
SELECT pr.nome, pr.idade, turma.id_aluno
FROM professor AS pr
INNER JOIN turma ON turma.id_professor = pr.id;

-- Aluno -> Turma -> Professor
SELECT al.nome, al.idade, professor.nome
FROM aluno AS al
INNER JOIN turma ON turma.id_aluno =al.id
INNER JOIN professor ON turma.id_professor = professor.id;
-- -- -- -- -- -- -- --
SELECT 
	al.nome AS AlunoNome,
    al.idade AS AlunoIdade,
    pr.nome AS NomeProfessor
FROM aluno AS al
INNER JOIN turma AS tm ON tm.id_aluno = al.id
INNER JOIN professor AS pr ON tm.id_professor = pr.id
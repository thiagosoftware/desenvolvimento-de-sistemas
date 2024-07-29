-- Comentário em Banco de Dados
-- Criar novo arquivo -> Ctrl + T

SHOW GRANTS FOR 'root'@'localhost';
-- Mostre permissões para root ( usuario ) localhost ( conexao )

CREATE USER 'novousuario'@'localhost'
IDENTIFIED BY 'senha123';

-- Conceder permissões
GRANT
	SELECT,
    INSERT,
    UPDATE
ON sys.sys_config
TO 'novousuario'@'localhost';

-- Reboga permissões
REVOKE
	SELECT,
    INSERT,
    UPDATE
ON sys.sys_config
FROM 'novousuario'@'localhost';

-- Deletando usuário
DROP USER 'novousuario'@'localhost';
CREATE TABLE usuario (
	codigo BIGINT(20) PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	cpf_cnpj VARCHAR(14) NOT NULL,
	telefone VARCHAR(11) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE permissao (
	codigo BIGINT(20) PRIMARY KEY,
	descricao VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE usuario_permissao (
	codigo_usuario BIGINT(20) NOT NULL,
	codigo_permissao BIGINT(20) NOT NULL,
	PRIMARY KEY (codigo_usuario, codigo_permissao),
	FOREIGN KEY (codigo_usuario) REFERENCES usuario(codigo),
	FOREIGN KEY (codigo_permissao) REFERENCES permissao(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- USUARIO ADMINISTRADOR
INSERT INTO usuario (codigo, nome, cpf_cnpj, telefone, email, senha) values (1, 'Administrador', '80425426386644', '3133395523', 'projects.was@gmail.com', '$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.');

-- USUARIO ENGENHEIRO
INSERT INTO usuario (codigo, nome, cpf_cnpj, telefone, email, senha) values (2, 'Waner Andrade', '63817449445', '31988880603', 'projects.was@gmail.com', '$2a$10$OJCdZSJGRItmhMwpBS2GveCBB8Lh1NmybCf62CjeNIRXQhLHMQeRy');

-- USUARIO DA MANUTENCAO
INSERT INTO usuario (codigo, nome, cpf_cnpj, telefone, email, senha) values (3, 'João Manutenção', '48041809316', '31987770502', 'projects.was@gmail.com', '$2a$10$OJCdZSJGRItmhMwpBS2GveCBB8Lh1NmybCf62CjeNIRXQhLHMQeRy');

-- USUARIO DA OPERADOR
INSERT INTO usuario (codigo, nome, cpf_cnpj, telefone, email, senha) values (4, 'Antenor Operador', '28368434033', '31987630000', 'projects.was@gmail.com', '$2a$10$OJCdZSJGRItmhMwpBS2GveCBB8Lh1NmybCf62CjeNIRXQhLHMQeRy');

INSERT INTO permissao (codigo, descricao) values (1, 'ROLE_OPERADOR');
INSERT INTO permissao (codigo, descricao) values (2, 'ROLE_MANUTENCAO');
INSERT INTO permissao (codigo, descricao) values (3, 'ROLE_ENGENHARIA');
INSERT INTO permissao (codigo, descricao) values (4, 'ROLE_PROCESSO');
INSERT INTO permissao (codigo, descricao) values (5, 'ROLE_BI');
INSERT INTO permissao (codigo, descricao) values (6, 'ROLE_GOVERNANCA');


-- ADMINISTRADOR
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 1);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 3);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 4);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 5);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 6);

-- ENGENHEIRO
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 1);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 3);

-- MANUTENCAO
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (3, 2);

-- OPERADOR
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (4, 1);


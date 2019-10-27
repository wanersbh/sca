CREATE TABLE sensor (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	tipo INT(2) NOT NULL,
	codigo_barragem BIGINT(20) NOT NULL,
	FOREIGN KEY (codigo_barragem) REFERENCES barragem(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor de Pressão 1', 1, 1);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor de Pressão 2', 1, 2);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor de Pressão 3', 2, 3);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor de Pressão 4', 3, 4);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor de Pressão 5', 1, 5);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor de Pressão 6', 1, 6);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor de Pressão 7', 1, 7);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor de Pressão 8', 1, 8);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor de Pressão 9', 1, 9);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor de Pressão 9', 1, 10);
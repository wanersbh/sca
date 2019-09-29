CREATE TABLE sensor (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	tipo INT(2) NOT NULL,
	codigo_barragem BIGINT(20) NOT NULL,
	FOREIGN KEY (codigo_barragem) REFERENCES barragem(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor 1', 1, 1);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor 2', 1, 1);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor 3', 2, 1);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor 4', 3, 1);
INSERT INTO sensor(nome, tipo, codigo_barragem) VALUES ('Sensor 5', 1, 1);
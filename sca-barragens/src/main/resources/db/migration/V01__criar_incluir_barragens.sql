CREATE TABLE barragem (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	metodo INT(5) NOT NULL,
	lat DECIMAL(10, 8) NOT NULL,
	lng DECIMAL(11, 8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO barragem(nome, metodo, lat, lng) VALUES ('Barragem Mina do Feijão', 1, -20.098968, -44.118997);
CREATE TABLE categoria (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO categoria(nome) VALUES ('Perfuração e desmonte');
INSERT INTO categoria(nome) VALUES ('Carregamento');
INSERT INTO categoria(nome) VALUES ('Transporte');
INSERT INTO categoria(nome) VALUES ('Apoio');
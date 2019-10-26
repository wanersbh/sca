CREATE TABLE categoria (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	data_exclusao DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO categoria(nome) VALUES ('Buldôzeres Grandes');
INSERT INTO categoria(nome) VALUES ('Draglines');
INSERT INTO categoria(nome) VALUES ('Perfuratrizes');
INSERT INTO categoria(nome) VALUES ('Escavadeiras');
INSERT INTO categoria(nome) VALUES ('Caminhões de Mineração');
INSERT INTO categoria(nome) VALUES ('Minicarregadeiras');
INSERT INTO categoria(nome) VALUES ('Manipuladores Telescópicos');
INSERT INTO categoria(nome) VALUES ('Subterrâneo - Rocha dura');
INSERT INTO categoria(nome) VALUES ('Subterrâneo - Longwall');
INSERT INTO categoria(nome) VALUES ('Carregadeiras');
INSERT INTO categoria(nome) VALUES ('Escrêiperes');
INSERT INTO categoria(nome) VALUES ('Tela de alta frequência');
INSERT INTO categoria(nome) VALUES ('Britador de mandíbulas');
INSERT INTO categoria(nome) VALUES ('Triturador');
INSERT INTO categoria(nome) VALUES ('Alimentadores vibratórios');
INSERT INTO categoria(nome) VALUES ('Britadores');
INSERT INTO categoria(nome) VALUES ('Calhas vibratórias');
INSERT INTO categoria(nome) VALUES ('Filtro de manga');
INSERT INTO categoria(nome) VALUES ('Moinho de Martelo');
INSERT INTO categoria(nome) VALUES ('Peneiras');
INSERT INTO categoria(nome) VALUES ('Silo de armazenagem');
INSERT INTO categoria(nome) VALUES ('Tambor secador');
INSERT INTO categoria(nome) VALUES ('Transportadores de correia');

CREATE TABLE fabricante (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	data_exclusao DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO fabricante(nome) VALUES ('Caterpillar');
INSERT INTO fabricante(nome) VALUES ('Hyundai');
INSERT INTO fabricante(nome) VALUES ('Hitachi');
INSERT INTO fabricante(nome) VALUES ('Belaz');
INSERT INTO fabricante(nome) VALUES ('Komatsu');
INSERT INTO fabricante(nome) VALUES ('Terex');
INSERT INTO fabricante(nome) VALUES ('Liebherr');


CREATE TABLE ativo (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(50) NOT NULL,
	data_aquisicao DATE NOT NULL,
	ano_fabricacao INT(4) NOT NULL,
	observacao VARCHAR(300),
	data_exclusao DATE,
	codigo_categoria BIGINT(20) NOT NULL,
	codigo_fabricante BIGINT(20) NOT NULL,
	FOREIGN KEY (codigo_categoria) REFERENCES categoria(codigo),
	FOREIGN KEY (codigo_fabricante) REFERENCES fabricante(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria, codigo_fabricante) VALUES ('8750', '2019-02-01', 2019, 2, 1);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria, codigo_fabricante) VALUES ('Giratória MD6259', '2019-03-01', 2015, 3, 2);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria, codigo_fabricante) VALUES ('Giratória MD6640', '2019-04-01', 2016, 3, 3);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria, codigo_fabricante) VALUES ('Miniescavadeira 300.9D', '2019-05-01', 2017, 4, 1);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria, codigo_fabricante) VALUES ('349D2 L', '2019-06-01', 2018, 4, 1);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria, codigo_fabricante) VALUES ('Rodas Grandes - 992K', '2019-07-01', 2018, 10, 2);


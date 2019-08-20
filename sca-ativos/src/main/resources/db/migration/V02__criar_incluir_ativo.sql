CREATE TABLE ativo (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(50) NOT NULL,
	data_aquisicao DATE NOT NULL,
	ano_fabricacao INT(4) NOT NULL,
	observacao VARCHAR(300),
	data_exclusao DATE,
	codigo_categoria BIGINT(20) NOT NULL,
	FOREIGN KEY (codigo_categoria) REFERENCES categoria(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria) VALUES ('Perfuratrize', '2019-08-01', 2016, 1);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria) VALUES ('Escavadeira para desmonte', '2019-08-01', 2010, 1);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria) VALUES ('Pá carregadeira', '2019-07-01', 2013, 2);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria) VALUES ('Escavadeira elétrica', '2019-05-01', 2012, 2);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria) VALUES ('Correia tranportadora', '2019-03-01', 2015, 3);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria) VALUES ('Trem', '2019-04-01', 2013, 3);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria) VALUES ('Motoniveladora', '2019-02-01', 2017, 4);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria) VALUES ('Caminhão Pipa', '2019-01-10', 2018, 4);
INSERT INTO ativo(descricao, data_aquisicao, ano_fabricacao, codigo_categoria) VALUES ('Carregadeira', '2019-01-10', 2018, 4);

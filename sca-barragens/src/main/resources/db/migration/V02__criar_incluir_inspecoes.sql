CREATE TABLE inspecao (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	altura DECIMAL(5,2) NOT NULL,
	data DATE NOT NULL,
	risco TINYINT(1) NOT NULL,
	potencial TINYINT(1) NOT NULL,
	observacao VARCHAR(300),
	codigo_barragem BIGINT(20) NOT NULL,
	FOREIGN KEY (codigo_barragem) REFERENCES barragem(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO inspecao(altura, data, risco, potencial, observacao, codigo_barragem) VALUES (335.60, '2019-08-01', 0, 2, 'teste', 1);
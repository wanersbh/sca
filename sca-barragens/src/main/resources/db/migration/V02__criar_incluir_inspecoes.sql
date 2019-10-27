CREATE TABLE inspecao (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	altura DECIMAL(5,2) NOT NULL,
	volume DECIMAL(11,2) NOT NULL,
	data DATE NOT NULL,
	risco TINYINT(1) NOT NULL,
	potencial TINYINT(1) NOT NULL,
	observacao VARCHAR(300),
	codigo_barragem BIGINT(20) NOT NULL,
	responsavel VARCHAR(50),
	FOREIGN KEY (codigo_barragem) REFERENCES barragem(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO inspecao(altura, volume, data, risco, potencial, observacao, codigo_barragem, responsavel) VALUES (46, 26000000.00, '2019-09-01', 2, 2, 'Houve uma movimentação do montante, mas nada que afete a estrutura.', 1, 'Administrador');
CREATE TABLE manutencao (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    codigo_ativo BIGINT(20) NOT NULL,
	tipo VARCHAR(50) NOT NULL,
	data_agendada DATETIME NOT NULL,
    data_realizada DATETIME,
	observacao VARCHAR(300),
	FOREIGN KEY (codigo_ativo) REFERENCES ativo(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO manutencao(codigo_ativo, tipo, data_agendada, data_realizada, observacao) VALUES(1, 'CORRETIVA', '2019-01-03 16:44:56', '2019-01-03 16:44:56', 'Verificar pneus');
INSERT INTO manutencao(codigo_ativo, tipo, data_agendada, data_realizada, observacao) VALUES(2, 'PREVENTIVA', '2019-02-04 16:44:56', '2019-02-05 16:44:56', 'Verificar oleo');
INSERT INTO manutencao(codigo_ativo, tipo, data_agendada, data_realizada, observacao) VALUES(3, 'CORRETIVA', '2019-08-05 16:44:56', '2019-03-05 16:44:56', 'Verificar correias');
INSERT INTO manutencao(codigo_ativo, tipo, data_agendada, data_realizada, observacao) VALUES(4, 'PREVENTIVA', '2019-04-06 16:44:56', NULL, 'Verificar pneus');
INSERT INTO manutencao(codigo_ativo, tipo, data_agendada, data_realizada, observacao) VALUES(5, 'CORRETIVA', '2019-05-07 16:44:56', '2019-05-06 16:44:56', 'Verificar motor');
INSERT INTO manutencao(codigo_ativo, tipo, data_agendada, data_realizada, observacao) VALUES(6, 'PREVENTIVA', '2019-06-08 16:44:56', '2019-06-08 16:44:56', 'Verificar pneus');

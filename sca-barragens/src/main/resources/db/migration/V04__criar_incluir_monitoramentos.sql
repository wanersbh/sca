CREATE TABLE monitoramento (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	status INT(2) NOT NULL,
	data DATETIME NOT NULL,
	codigo_sensor BIGINT(20) NOT NULL,
	FOREIGN KEY (codigo_sensor) REFERENCES sensor(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:01:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:02:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:03:00', 2);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:04:00', 2);


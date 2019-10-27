CREATE TABLE monitoramento (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	status INT(2) NOT NULL,
	data DATETIME NOT NULL,
	codigo_sensor BIGINT(20) NOT NULL,
	FOREIGN KEY (codigo_sensor) REFERENCES sensor(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 06:00:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(2, '2019-10-20 06:05:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 06:00:00', 2);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 06:00:00', 3);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 06:00:00', 4);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 06:00:00', 5);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 06:00:00', 6);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 06:00:00', 7);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 06:00:00', 8);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 06:00:00', 9);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 06:00:00', 10);




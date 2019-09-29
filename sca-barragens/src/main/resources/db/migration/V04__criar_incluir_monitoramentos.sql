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
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:04:00', 3);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:05:00', 2);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:06:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:07:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:08:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:09:00', 2);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:10:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(1, '2019-10-20 10:11:00', 2);
INSERT INTO monitoramento(status, data, codigo_sensor) values(2, '2019-10-20 10:12:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(2, '2019-10-20 10:13:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(2, '2019-10-20 10:14:00', 3);
INSERT INTO monitoramento(status, data, codigo_sensor) values(2, '2019-10-20 10:15:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(2, '2019-10-20 10:16:00', 4);
INSERT INTO monitoramento(status, data, codigo_sensor) values(2, '2019-10-20 10:17:00', 1);
INSERT INTO monitoramento(status, data, codigo_sensor) values(3, '2019-10-20 10:18:00', 5);

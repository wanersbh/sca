CREATE TABLE barragem (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	metodo INT(5) NOT NULL,
	uf VARCHAR(2) NOT NULL,
	lat DECIMAL(10, 8) NOT NULL,
	lng DECIMAL(11, 8) NOT NULL,
	volume DECIMAL(11, 2) NOT NULL,
	altura DECIMAL(5, 2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO barragem(nome, metodo, uf, lat, lng, volume, altura) VALUES ('Barragem Mina do Feijão', 1, 'MG', -20.098968, -44.118997, 23000000.00, 43);
INSERT INTO barragem(nome, metodo, uf, lat, lng, volume, altura) VALUES ('Barragem Capitão do Mato', 1, 'MG', -20.1169831,-43.9058107, 2136495.00, 35);
INSERT INTO barragem(nome, metodo, uf, lat, lng, volume, altura) VALUES ('Barragem Dique B', 2, 'MG', -20.1241335,-43.9275023, 333000.00, 15);
INSERT INTO barragem(nome, metodo, uf, lat, lng, volume, altura) VALUES ('Barragem Taquaras', 1, 'MG', -19.9916536,-43.820474, 950000.00, 28);
INSERT INTO barragem(nome, metodo, uf, lat, lng, volume, altura) VALUES ('Barragem Menezes II', 1, 'MG', -20.111514, -44.224142, 29020216.00, 40);
INSERT INTO barragem(nome, metodo, uf, lat, lng, volume, altura) VALUES ('Barragem Laranjeiras', 1, 'MG', -19.857047, -43.422408, 5769679.60, 26);
INSERT INTO barragem(nome, metodo, uf, lat, lng, volume, altura) VALUES ('Barragem Forquilha I', 1, 'MG', -20.440549, -43.790156, 26000000.00, 41);
INSERT INTO barragem(nome, metodo, uf, lat, lng, volume, altura) VALUES ('Barragem Forquilha II', 3, 'MG', -20.435402, -43.758129, 24000000.00, 39);
INSERT INTO barragem(nome, metodo, uf, lat, lng, volume, altura) VALUES ('Barragem Forquilha III', 1, 'MG', -20.3940478,-43.8523395, 18200.00, 12);
INSERT INTO barragem(nome, metodo, uf, lat, lng, volume, altura) VALUES ('Barragem Forquilha IV', 1, 'MG', -20.3956201,-43.8435744, 30000000.00, 50);
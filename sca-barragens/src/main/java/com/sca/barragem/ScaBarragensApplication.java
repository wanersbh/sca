package com.sca.barragem;

import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableRabbit
public class ScaBarragensApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScaBarragensApplication.class, args);
	}

}

package com.sca.barragem;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableRabbit
public class ScaBarragensApplication {
	
	@Value("${sca.barragem.queue.name}")
    private String scaQueue;

	public static void main(String[] args) {
		SpringApplication.run(ScaBarragensApplication.class, args);
	}
	
	@Bean
    public Queue queue() {
        return new Queue(scaQueue, true);
    }

}

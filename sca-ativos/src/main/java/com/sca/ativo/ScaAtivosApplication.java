package com.sca.ativo;

import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.sca.ativo.config.property.ScaAtivosProperty;

@EnableDiscoveryClient
@SpringBootApplication
@EnableConfigurationProperties(ScaAtivosProperty.class)
public class ScaAtivosApplication {

	@Value("${queue.sca.name}")
    private String scaQueue;
	
	public static void main(String[] args) {
		SpringApplication.run(ScaAtivosApplication.class, args);
	}
	
	@Bean
    public Queue queue() {
        return new Queue(scaQueue, true);
    }

}

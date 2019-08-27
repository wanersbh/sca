package com.sca.ativo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.sca.ativo.config.property.ScaAtivosProperty;

@SpringBootApplication
@EnableConfigurationProperties(ScaAtivosProperty.class)
public class ScaAtivosApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScaAtivosApplication.class, args);
	}

}

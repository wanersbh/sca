package com.sca.ativo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.collect.Lists;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.ApiKeyVehicle;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	// http://localhost:8180/sca-ativos/swagger-ui.html
	ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("API Módulo de Ativos Minerários")
        		.description("Essa API disponibiliza serviços relacionados com os ativos minerários. "
        				+ "É disponibilizado serviços que permite manter um cadastro de um ativo e além disso realizar agendamento de manutenção do mesmo.")
            .termsOfServiceUrl("http://localhost:8180/sca-ativos/suporte").version("1.0.0").contact(new Contact("", "", "wanersbh@gmail.com")).build();
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.basePackage("com.sca.ativo.controller")).build().apiInfo(apiInfo())
            .securitySchemes(Lists.newArrayList(apiKey()));
    }

    private ApiKey apiKey() {
        return new ApiKey("Authorization", "Authorization", "header");
    }

    @Bean
    public SecurityConfiguration securityInfo() {
        return new SecurityConfiguration(null, null, null, null, "", ApiKeyVehicle.HEADER, "Authorization", "");
    }

}

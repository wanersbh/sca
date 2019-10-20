package com.sca.ativo.config.property;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("scaativos")
public class ScaAtivosProperty {

	private List<String> originsPermitida =  Arrays.asList("*", "http://localhost:4200", "http://localhost:4100");
	
	private String originDefault = "http://localhost:4200";

	private final Seguranca seguranca = new Seguranca();
	
	private final Mail mail = new Mail();
	
	
	public Mail getMail() {
		return mail;
	}

	public List<String> getOriginsPermitida() {
		return originsPermitida;
	}
	
	public String getOriginDefault() {
		return originDefault;
	}
	
	public Seguranca getSeguranca() {
		return seguranca;
	}

	public static class Seguranca {

		private boolean enableHttps;

		public boolean isEnableHttps() {
			return enableHttps;
		}

		public void setEnableHttps(boolean enableHttps) {
			this.enableHttps = enableHttps;
		}

	}
	
	public static class Mail {
		
		@Value("${spring.mail.host}")
		private String host;
		
		@Value("${spring.mail.port}")
		private Integer port;
		
		@Value("${spring.mail.username}")
		private String username;
		
		@Value("${spring.mail.password}")
		private String password;

		public String getHost() {
			return host;
		}

		public void setHost(String host) {
			this.host = host;
		}

		
		public Integer getPort() {
			return port;
		}

		public void setPort(Integer port) {
			this.port = port;
		}
		
		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}
		
		
		
		
	}

}

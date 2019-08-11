package com.sca.ativo.config.property;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("sca-ativos")
public class ScaAtivosProperty {

	private List<String> originsPermitida =  Arrays.asList("http://localhost:4200", "http://localhost:4100");
	
	private String originDefault = "http://localhost:4200";

	private final Seguranca seguranca = new Seguranca();

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

}

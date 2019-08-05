package com.sca.ativo.config.property;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("sca-ativos")
public class ScaAtivosProperty {

	private List<String> originsPermitida =  Arrays.asList("http://localhost:4200", "http://localhost:4100");;

	private final Seguranca seguranca = new Seguranca();

	public Seguranca getSeguranca() {
		return seguranca;
	}

	public List<String> getOriginsPermitida() {
		return originsPermitida;
	}

	public void setOriginsPermitida(List<String> originPermitida) {
		this.originsPermitida = originPermitida;
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

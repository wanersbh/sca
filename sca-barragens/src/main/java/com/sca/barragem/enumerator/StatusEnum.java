package com.sca.barragem.enumerator;

public enum StatusEnum {
	
	DESATIVADO("Desativado"),
	ESTAVEL("Estável"),
	ALERTA("Alerta"),
	CRITICO("Crítico");
	
	private String descricao;

	private StatusEnum(String descricao) {
		this.descricao = descricao;
	}
	
	public String getDescricao() {
		return descricao;
	}
	
}

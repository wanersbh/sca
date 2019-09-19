package com.sca.barragem.filter;

import java.io.Serializable;

public class BarragemFilter implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private String nome;
	
	private Integer metodo;
	
	private String uf;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getMetodo() {
		return metodo;
	}

	public void setMetodo(Integer metodo) {
		this.metodo = metodo;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}
	

}

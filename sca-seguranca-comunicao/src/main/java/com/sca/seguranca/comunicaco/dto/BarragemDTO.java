package com.sca.seguranca.comunicaco.dto;

public class BarragemDTO {
	
	private Long codigo;
	
	private String nome;
	
	private Integer metodo;
	
	private String uf;
	
	private Double latitude;
	
	private Double longitude;
	
	public BarragemDTO() {
		super();
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

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

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}


}

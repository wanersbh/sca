package com.sca.barragem.dto;

public class MonitoramentoDTO {
	
	private Long codigo;
	
	private Long codigoBarragem;
	
	private String barragem;
	
	private String sensor;
	
	private String status;
	
	private String data;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	
	public Long getCodigoBarragem() {
		return codigoBarragem;
	}

	public void setCodigoBarragem(Long codigoBarragem) {
		this.codigoBarragem = codigoBarragem;
	}

	public String getBarragem() {
		return barragem;
	}

	public void setBarragem(String barragem) {
		this.barragem = barragem;
	}

	public String getSensor() {
		return sensor;
	}

	public void setSensor(String sensor) {
		this.sensor = sensor;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

}

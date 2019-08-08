package com.sca.ativo.controller.repository.filter;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

public class ManutencaoFilter {

	private String tipo;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dataAgendadaDe;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dataAgendadaAte;

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public LocalDate getDataAgendadaDe() {
		return dataAgendadaDe;
	}

	public void setDataAgendadaDe(LocalDate dataAgendadaDe) {
		this.dataAgendadaDe = dataAgendadaDe;
	}

	public LocalDate getDataAgendadaAte() {
		return dataAgendadaAte;
	}

	public void setDataAgendadaAte(LocalDate dataAgendadaAte) {
		this.dataAgendadaAte = dataAgendadaAte;
	}
	
	
}

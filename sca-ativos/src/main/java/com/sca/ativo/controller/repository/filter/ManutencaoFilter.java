package com.sca.ativo.controller.repository.filter;

import java.time.LocalDate;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import org.springframework.format.annotation.DateTimeFormat;

import com.sca.ativo.enumerator.TipoManutencaoEnum;

public class ManutencaoFilter {

	@Enumerated(EnumType.STRING)
	private TipoManutencaoEnum tipo;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dataAgendadaDe;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dataAgendadaAte;

	public TipoManutencaoEnum getTipo() {
		return tipo;
	}

	public void setTipo(TipoManutencaoEnum tipo) {
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

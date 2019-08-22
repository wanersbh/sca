package com.sca.ativo.controller.repository.filter;

import java.time.LocalDateTime;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import org.springframework.format.annotation.DateTimeFormat;

import com.sca.ativo.enumerator.TipoManutencaoEnum;

public class ManutencaoFilter {

	@Enumerated(EnumType.STRING)
	private TipoManutencaoEnum tipo;

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	private LocalDateTime dataAgendadaDe;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	private LocalDateTime dataAgendadaAte;

	public TipoManutencaoEnum getTipo() {
		return tipo;
	}

	public void setTipo(TipoManutencaoEnum tipo) {
		this.tipo = tipo;
	}

	public LocalDateTime getDataAgendadaDe() {
		return dataAgendadaDe;
	}

	public void setDataAgendadaDe(LocalDateTime dataAgendadaDe) {
		this.dataAgendadaDe = dataAgendadaDe;
	}

	public LocalDateTime getDataAgendadaAte() {
		return dataAgendadaAte;
	}

	public void setDataAgendadaAte(LocalDateTime dataAgendadaAte) {
		this.dataAgendadaAte = dataAgendadaAte;
	}
	
	
}

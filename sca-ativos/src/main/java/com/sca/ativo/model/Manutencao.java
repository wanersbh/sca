package com.sca.ativo.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.sca.ativo.enumerator.TipoManutencaoEnum;

@Entity
@Table(name = "manutencao")
public class Manutencao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	private TipoManutencaoEnum tipo;
	
	@NotNull
	@Column(name = "data_agendada")
	private LocalDateTime dataAgendada;
	
	@Column(name = "data_realizada")
	private LocalDateTime dataRealizada;
	
	private String observacao;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "codigo_ativo")
	private Ativo ativo;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public TipoManutencaoEnum getTipo() {
		return tipo;
	}

	public void setTipo(TipoManutencaoEnum tipo) {
		this.tipo = tipo;
	}

	public LocalDateTime getDataAgendada() {
		return dataAgendada;
	}

	public void setDataAgendada(LocalDateTime dataAgendada) {
		this.dataAgendada = dataAgendada;
	}

	public LocalDateTime getDataRealizada() {
		return dataRealizada;
	}

	public void setDataRealizada(LocalDateTime dataRealizada) {
		this.dataRealizada = dataRealizada;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public Ativo getAtivo() {
		return ativo;
	}

	public void setAtivo(Ativo ativo) {
		this.ativo = ativo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Manutencao other = (Manutencao) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		return true;
	}
	
	

}

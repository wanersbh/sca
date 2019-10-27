package com.sca.ativo.controller.repository.filter;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

public class AtivoFilter {

	private Long codigo;
	
	private String descricao;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dataAquisicaoDe;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dataAquisicaoAte;
	
	public Long getCodigo() {
		return codigo;
	}
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public LocalDate getDataAquisicaoDe() {
		return dataAquisicaoDe;
	}
	public void setDataAquisicaoDe(LocalDate dataAquisicaoDe) {
		this.dataAquisicaoDe = dataAquisicaoDe;
	}
	public LocalDate getDataAquisicaoAte() {
		return dataAquisicaoAte;
	}
	public void setDataAquisicaoAte(LocalDate dataAquisicaoAte) {
		this.dataAquisicaoAte = dataAquisicaoAte;
	}
	
}

package com.sca.ativo.repository.ativo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.sca.ativo.controller.repository.filter.AtivoFilter;
import com.sca.ativo.model.Ativo;

public interface AtivoRepositoryQuery  {
	
	public Page<Ativo> filtrar(AtivoFilter ativoFilter, Pageable pageable);

}

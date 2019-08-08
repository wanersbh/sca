package com.sca.ativo.repository.manutencao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.sca.ativo.controller.repository.filter.ManutencaoFilter;
import com.sca.ativo.model.Manutencao;

public class ManutencaoRepositoryImpl implements ManutencaoRepositoryQuery  {

	@Override
	public Page<Manutencao> filtrar(ManutencaoFilter manutencaoFilter, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

}

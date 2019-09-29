package com.sca.barragem.repository.barragem;

import java.util.List;

import com.sca.barragem.filter.BarragemFilter;
import com.sca.barragem.model.Barragem;


public interface BarragemRepositoryQuery {

	
	public List<Barragem> filtrar(BarragemFilter barragemFilter);
	
}

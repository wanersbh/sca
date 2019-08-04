package com.sca.ativo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sca.ativo.model.Ativo;
import com.sca.ativo.model.Categoria;
import com.sca.ativo.repository.AtivoRepository;
import com.sca.ativo.repository.CategoriaRepository;

@Service
public class AtivoService {

	@Autowired
	private CategoriaRepository categoriaRepository;

	@Autowired
	private AtivoRepository ativoRepository;
	
	public Ativo salvar(Ativo ativo) {
		
		Categoria categoriaSalva = categoriaRepository.findById(ativo.getCategoria().getCodigo()).orElse(null);

		if(categoriaSalva == null || categoriaSalva.isInativo()) {
			throw new CategoriaInexistenteOuInativaException();
		}
		
		return ativoRepository.save(ativo);
		
	}

}

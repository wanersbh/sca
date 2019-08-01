package com.sca.ativo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sca.ativo.model.Ativo;
import com.sca.ativo.repository.AtivoRepository;

@RestController
@RequestMapping("/ativos")
public class AtivoController {
	
	@Autowired
	private AtivoRepository ativoRepository;
	
	@GetMapping
	public List<Ativo> listar(){
		return ativoRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Ativo> buscarPorCodigo(@PathVariable Long codigo){
		Ativo ativoRetornado = ativoRepository.findById(codigo).orElse(null);
		
		return ativoRetornado != null ? ResponseEntity.ok(ativoRetornado) :
			ResponseEntity.notFound().build();
	}

}

package com.sca.ativo.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sca.ativo.event.RecursoCriadoEvent;
import com.sca.ativo.model.Ativo;
import com.sca.ativo.repository.AtivoRepository;

@RestController
@RequestMapping("/ativos")
public class AtivoController {

	@Autowired
	private AtivoRepository ativoRepository;

	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping
	public List<Ativo> listar() {
		return ativoRepository.findAll();
	}

	@GetMapping("/{codigo}")
	public ResponseEntity<Ativo> buscarPorCodigo(@PathVariable Long codigo) {
		Ativo ativoRetornado = ativoRepository.findById(codigo).orElse(null);

		return ativoRetornado != null ? ResponseEntity.ok(ativoRetornado) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}")
	public ResponseEntity<Ativo> atualizar(@PathVariable Long codigo, @Valid @RequestBody Ativo ativoAlterado) {

		Ativo ativoBase = ativoRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(ativoAlterado, ativoBase, "codigo");
		ativoRepository.save(ativoBase);

		return ResponseEntity.ok(ativoBase);

		
		
	}

	@PostMapping
	public ResponseEntity<Ativo> criar(@Valid @RequestBody Ativo ativo, HttpServletResponse response) {
		Ativo ativoSalvo = ativoRepository.save(ativo);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, ativoSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(ativoSalvo);
	}

}

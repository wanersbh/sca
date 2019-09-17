package com.sca.barragem.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sca.barragem.event.RecursoCriadoEvent;
import com.sca.barragem.model.Inspecao;
import com.sca.barragem.repository.InspecaoRepository;

@RestController
@RequestMapping("/inspecoes")
public class InspecaoController {
	
	@Autowired
	private InspecaoRepository inspecaoRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	public List<Inspecao> listar() {
		return inspecaoRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Inspecao> buscarPorCodigo(@PathVariable Long codigo) {
		Inspecao inspecaoRetornada = inspecaoRepository.findById(codigo).orElse(null);

		return inspecaoRetornada != null ? ResponseEntity.ok(inspecaoRetornada) : ResponseEntity.notFound().build();
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<Inspecao> atualizar(@PathVariable Long codigo, @Valid @RequestBody Inspecao inspecaoAlterada) {

		Inspecao inspecaoBase = inspecaoRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(inspecaoAlterada, inspecaoBase, "codigo");
		inspecaoRepository.save(inspecaoBase);

		return ResponseEntity.ok(inspecaoBase);
	}
	
	@PostMapping
	public ResponseEntity<Inspecao> criar(@Valid @RequestBody Inspecao inspecao, HttpServletResponse response) {
		Inspecao inspecaoSalva = inspecaoRepository.save(inspecao);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, inspecaoSalva.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(inspecaoSalva);
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		inspecaoRepository.deleteById(codigo);
	}

}

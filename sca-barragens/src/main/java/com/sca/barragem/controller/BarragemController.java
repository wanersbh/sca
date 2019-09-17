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
import com.sca.barragem.model.Barragem;
import com.sca.barragem.repository.BarragemRepository;

@RestController
@RequestMapping("/barragens")
public class BarragemController {
	
	@Autowired
	private BarragemRepository barragemRepository;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	public List<Barragem> listar() {
		return barragemRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Barragem> buscarPorCodigo(@PathVariable Long codigo) {
		Barragem barragemRetornada = barragemRepository.findById(codigo).orElse(null);

		return barragemRetornada != null ? ResponseEntity.ok(barragemRetornada) : ResponseEntity.notFound().build();
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<Barragem> atualizar(@PathVariable Long codigo, @Valid @RequestBody Barragem barragemAlterada) {

		Barragem barragemBase = barragemRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(barragemAlterada, barragemBase, "codigo");
		barragemRepository.save(barragemBase);

		return ResponseEntity.ok(barragemBase);
	}
	
	@PostMapping
	public ResponseEntity<Barragem> criar(@Valid @RequestBody Barragem barragem, HttpServletResponse response) {
		Barragem barragemSalva = barragemRepository.save(barragem);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, barragemSalva.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(barragemSalva);
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		barragemRepository.deleteById(codigo);
	}

}

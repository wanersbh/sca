package com.sca.ativo.controller;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sca.ativo.controller.repository.filter.ManutencaoFilter;
import com.sca.ativo.event.RecursoCriadoEvent;
import com.sca.ativo.model.Manutencao;
import com.sca.ativo.repository.ManutencaoRepository;

@RestController
@RequestMapping("/manutencoes")
public class ManutencaoController {

	@Autowired
	private ManutencaoRepository manutencaoRepository;

	@Autowired
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_MANUTENCAO') and #oauth2.hasScope('read')")
	public Page<Manutencao> pesquisar(ManutencaoFilter manutencaoFilter, Pageable pageable) {
		return manutencaoRepository.filtrar(manutencaoFilter, pageable);
	}

//	@GetMapping
//	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_MANUTENCAO') and #oauth2.hasScope('read')")
//	public List<Manutencao> listar() {
//		return manutencaoRepository.findAll();
//	}

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_MANUTENCAO') and #oauth2.hasScope('write')")
	public ResponseEntity<Manutencao> criar(@Valid @RequestBody Manutencao manutencao, HttpServletResponse response) {
		Manutencao manutencaoSalva = manutencaoRepository.save(manutencao);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, manutencaoSalva.getCodigo()));

		return ResponseEntity.status(HttpStatus.CREATED).body(manutencaoSalva);
		
	}

	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_MANUTENCAO') and #oauth2.hasScope('read')")
	public ResponseEntity<Manutencao> buscaPorCodigo(@PathVariable Long codigo) {
		Manutencao manutencaoRetornada = manutencaoRepository.findById(codigo).orElse(null);

		return manutencaoRetornada != null ? ResponseEntity.ok(manutencaoRetornada) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_MANUTENCAO') and #oauth2.hasScope('write')")
	public ResponseEntity<Manutencao> atualizar(@PathVariable Long codigo,
			@Valid @RequestBody Manutencao manutencaoAlterada) {

		Manutencao manutencaoBase = manutencaoRepository.findById(codigo)
				.orElseThrow(() -> new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(manutencaoAlterada, manutencaoBase, "codigo");
		manutencaoRepository.save(manutencaoBase);

		return ResponseEntity.ok(manutencaoBase);
		
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVER_MANUTENCAO') and #oauth2.hasScope('write')")
	public void remover(@PathVariable Long codigo) {
		this.manutencaoRepository.deleteById(codigo);
	}
	
}

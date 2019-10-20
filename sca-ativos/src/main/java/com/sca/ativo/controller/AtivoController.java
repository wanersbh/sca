package com.sca.ativo.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sca.ativo.controller.repository.filter.AtivoFilter;
import com.sca.ativo.event.RecursoCriadoEvent;
import com.sca.ativo.exceptionhandler.ScaExceptionHandler.Erro;
import com.sca.ativo.model.Ativo;
import com.sca.ativo.repository.AtivoRepository;
import com.sca.ativo.service.AtivoService;
import com.sca.ativo.service.CategoriaInexistenteOuInativaException;

@RestController
@RequestMapping("/ativos")
public class AtivoController {

	@Autowired
	private AtivoRepository ativoRepository;
	
	@Autowired
	private AtivoService ativoService;

	@Autowired
	private ApplicationEventPublisher publisher;
	
	@Autowired
	private MessageSource messageSource;
	
	@PostMapping("/anexo")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_ATIVO') and #oauth2.hasScope('write')")
	public String uploadAnexo(@RequestParam MultipartFile anexo) {
		OutputStream out;
		try {
			out = new FileOutputStream("/home/was/upload/manual--"+anexo.getOriginalFilename());
			out.write(anexo.getBytes());
			out.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "ok";
	}

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_ATIVO') and #oauth2.hasScope('read')")
	public Page<Ativo> pesquisar(AtivoFilter ativoFilter, Pageable pageable) {
		return ativoRepository.filtrar(ativoFilter, pageable);
	}

	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_ATIVO') and #oauth2.hasScope('read')")
	public ResponseEntity<Ativo> buscarPorCodigo(@PathVariable Long codigo) {
		Ativo ativoRetornado = ativoRepository.findById(codigo).orElse(null);

		return ativoRetornado != null ? ResponseEntity.ok(ativoRetornado) : ResponseEntity.notFound().build();
	}

	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_ATIVO') and #oauth2.hasScope('write')")
	public ResponseEntity<Ativo> atualizar(@PathVariable Long codigo, @Valid @RequestBody Ativo ativoAlterado) {

		Ativo ativoBase = ativoRepository.findById(codigo).orElseThrow(() -> new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(ativoAlterado, ativoBase, "codigo");
		ativoRepository.save(ativoBase);

		return ResponseEntity.ok(ativoBase);
		
	}

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_ATIVO') and #oauth2.hasScope('write')")
	public ResponseEntity<Ativo> criar(@Valid @RequestBody Ativo ativo, HttpServletResponse response) {
		Ativo ativoSalvo = ativoService.salvar(ativo);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, ativoSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(ativoSalvo);
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_REMOVER_ATIVO') and #oauth2.hasScope('write')")
	public void remover(@PathVariable Long codigo) {
		ativoRepository.deleteById(codigo);
	}
	
	
	@ExceptionHandler
	public ResponseEntity<Object> handleCategoriaInexistenteOuInativaException(CategoriaInexistenteOuInativaException ex){
		
		String mensagemUsuario = this.messageSource.getMessage("categoria.inexistente-ou-inativa", null, LocaleContextHolder.getLocale());
		String mensagemDesenvolvedor = Optional.ofNullable(ex.getCause()).orElse(ex).toString();
		
		List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
		
		return ResponseEntity.badRequest().body(erros);
	}
	

}

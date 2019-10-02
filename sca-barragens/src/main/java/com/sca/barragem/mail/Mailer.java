package com.sca.barragem.mail;

import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;


public class Mailer {

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private TemplateEngine thymeleaf;


//	@EventListener
//	public void teste(ApplicationReadyEvent event) {
//		this.enviarEmail("projects.was@gmail.com", Arrays.asList("wanersbh@gmail.com"), "Teste Projeto TCC",
//				"Bom dia! <br/>Tenho que terminar o meu TCC");
//		System.out.println(">>>>>>>>>>>>>>>>>>>>E-MAIL ENVIADO<<<<<<<<<<<<<<<<<<<<<<<<");
//	}

//	public void avisarSobreManutencoesVencidas(List<Manutencao> vencidas, List<Usuario> destinatarios) {
//		String template = "mail/aviso-manutencoes-vencidas";
//		
//		Map<String, Object> variaveis = new HashMap<>();
//		variaveis.put("manutencoes", vencidas);
//
//		List<String> emails = destinatarios.stream().map(u -> u.getEmail()).collect(Collectors.toList());
//
//		this.enviarEmail("projects.was@gmail.com", emails, "[SCA] Manutenções vencidas", template, variaveis);
//	}

//	@EventListener
//	public void teste(ApplicationReadyEvent event) {
//
//		String template = "mail/aviso-manutencoes-vencidas";
//
//		List<Manutencao> manutencoes = manutecaoRepo.findAll();
//
//		Map<String, Object> variaveis = new HashMap<>();
//		variaveis.put("manutencoes", manutencoes);
//
//		this.enviarEmail("projects.was@gmail.com", Arrays.asList("wanersbh@gmail.com"), "Teste Projeto TCC", template,
//				variaveis);
//		System.out.println(">>>>>>>>>>>>>>>>>>>>E-MAIL ENVIADO<<<<<<<<<<<<<<<<<<<<<<<<");
//	}

	public void enviarEmail(String remetente, List<String> destinatarios, String assunto, String template,
			Map<String, Object> variaveis) {
		Context context = new Context(new Locale("pt", "BR"));

		variaveis.entrySet().forEach(e -> context.setVariable(e.getKey(), e.getValue()));

		String mensagem = thymeleaf.process(template, context);

		this.enviarEmail(remetente, destinatarios, assunto, mensagem);

	}

	public void enviarEmail(String remetente, List<String> destinatarios, String assunto, String mensagem) {

		try {
			MimeMessage mimeMessage = mailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "UTF-8");

			helper.setFrom(remetente);
			helper.setTo(destinatarios.toArray(new String[destinatarios.size()]));
			helper.setSubject(assunto);
			helper.setText(mensagem, true);

			mailSender.send(mimeMessage);

		} catch (MessagingException e) {
			throw new RuntimeException("Problemas com o envio de e-mail!", e);
		}

	}
}

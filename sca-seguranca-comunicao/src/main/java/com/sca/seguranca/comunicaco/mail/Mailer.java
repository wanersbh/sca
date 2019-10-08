package com.sca.seguranca.comunicaco.mail;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.sca.seguranca.comunicaco.dto.BarragemDTO;


@Component
public class Mailer {

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private TemplateEngine thymeleaf;

	public void avisarSobreRompimento(BarragemDTO barragem, List<String> destinatarios) {
		
		enviarEmail("projects.was@gmail.com", destinatarios, "teste", "teste");
		/*
		String template = "mail/aviso-risco-rompimento-barragem";
		
		Map<String, Object> variaveis = new HashMap<>();
		variaveis.put("barragem", barragem);

		this.enviarEmail("projects.was@gmail.com", destinatarios, "[SCA-ALERTA] RISCO DE ROMPIMENTO DA BARRAGEM - " + barragem.getNome(),
				template, variaveis);
		*/
	}


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

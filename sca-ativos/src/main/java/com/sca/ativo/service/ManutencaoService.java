package com.sca.ativo.service;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.sca.ativo.mail.Mailer;
import com.sca.ativo.model.Manutencao;
import com.sca.ativo.model.Usuario;
import com.sca.ativo.queue.ScaAtivosQueueSender;
import com.sca.ativo.repository.ManutencaoRepository;
import com.sca.ativo.repository.UsuarioRepository;

@Service
public class ManutencaoService {

	private static final String DESTINATARIOS = "ROLE_MANUTENCAO";

	private static final Logger logger = LoggerFactory.getLogger(ManutencaoService.class);

	@Autowired
	private ManutencaoRepository manutencaoRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private Mailer mailer;
	
	@Autowired
	private ScaAtivosQueueSender scaQueueSender;

//	@Scheduled(cron = "0 10 10 * * *")
	@Scheduled(fixedDelay = 1000 * 60 * 30)
	public void avisarManutencaoVencida() {

		if (logger.isDebugEnabled()) {
			logger.debug("Preparando envio de e-mails de aviso de manutenções vencidas.");
		}

		List<Manutencao> vencidas = manutencaoRepository
				.findByDataAgendadaLessThanEqualAndDataRealizadaIsNull(LocalDateTime.now());

		if (vencidas.isEmpty()) {
			logger.info("Não existe manutenções vencidas para aviso.");

			return;
		}

		logger.info("Existem {} manutenções vencidas.", vencidas.size());

		List<Usuario> destinatarios = usuarioRepository.findByPermissoesDescricao(DESTINATARIOS);

		if (destinatarios.isEmpty()) {
			logger.warn("Existem manutenções vencidas, mas o sistema não encontrou nenhum destinatário.");
			return;
		}

		mailer.avisarSobreManutencoesVencidas(vencidas, destinatarios);
		
		logger.info("E-mail de aviso de manutenções vencidas foi enviado com sucesso.");

	}
	
	@Scheduled(fixedDelay = 1000 * 60 * 30)
	public void enviarMensagemParaFila() {
		scaQueueSender.send("Data e hora: "+ Calendar.getInstance().getTime());
	}

}

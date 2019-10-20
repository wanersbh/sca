package com.sca.seguranca.comunicaco.queue;

import java.util.Arrays;
import java.util.List;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.google.gson.Gson;
import com.sca.seguranca.comunicaco.dto.BarragemDTO;
import com.sca.seguranca.comunicaco.mail.Mailer;

@Component
public class ScaConsumer {
	
	@Autowired
	private Mailer mailer;

	// https://www.baeldung.com/jackson-object-mapper-tutorial
	// https://www.rabbitmq.com/getstarted.html
	@RabbitListener(queues = { "${sca.barragem.queue.name}" })
	public void receive(@Payload String barragemJson) {
		if (!StringUtils.isEmpty(barragemJson)) {
			Gson gson = new Gson();
			
			BarragemDTO barragemDTO = gson.fromJson(barragemJson, BarragemDTO.class);
			
			//TODO: BUSCA NA TABELA A LISTA DE E-MAIL PARA ENVIAR.
			List<String> destinatarios = Arrays.asList("wanersbh@gmail.com");
			
			mailer.avisarSobreRompimento(barragemDTO, destinatarios);
		}
	}
}

package com.sca.seguranca.comunicaco.queue;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.google.gson.Gson;
import com.sca.seguranca.comunicaco.dto.BarragemDTO;

@Component
public class ScaConsumer {

	// https://www.baeldung.com/jackson-object-mapper-tutorial
	// https://www.rabbitmq.com/getstarted.html
	@RabbitListener(queues = { "${queue.sca.name}" })
	public void receive(@Payload String barragemJson) {
		if (!StringUtils.isEmpty(barragemJson)) {
			Gson gson = new Gson();
			BarragemDTO fromJson = gson.fromJson(barragemJson, BarragemDTO.class);
			
			System.out.println(fromJson);
		}
	}
}

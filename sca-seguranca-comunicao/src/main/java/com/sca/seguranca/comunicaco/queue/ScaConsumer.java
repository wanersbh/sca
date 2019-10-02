package com.sca.seguranca.comunicaco.queue;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class ScaConsumer {

	// https://www.baeldung.com/jackson-object-mapper-tutorial
	// https://www.rabbitmq.com/getstarted.html
	@RabbitListener(queues = {"${queue.sca.name}"})
    public void receive(@Payload String teste) {
		System.out.println("Consumindo: "+ teste);//barragemDTO.getNome());
    }
}

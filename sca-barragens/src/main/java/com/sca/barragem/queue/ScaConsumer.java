package com.sca.barragem.queue;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class ScaConsumer {
	
//	@RabbitListener(queues = {"${queue.sca.name}"})
//    public void receive(@Payload String fileBody) {
//		System.out.println("Consumindo: "+ fileBody);
//    }

}

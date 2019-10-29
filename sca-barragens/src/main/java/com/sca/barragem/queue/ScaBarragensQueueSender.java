package com.sca.barragem.queue;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ScaBarragensQueueSender {
	
	@Autowired
    private RabbitTemplate rabbitTemplate;
 
    @Autowired
    private Queue queue;
 
    public void send(String barragemJson) {
        rabbitTemplate.convertAndSend(this.queue.getName(), barragemJson);
    }

}

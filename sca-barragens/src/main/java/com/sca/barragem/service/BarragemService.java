package com.sca.barragem.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sca.barragem.dto.MonitoramentoDTO;
import com.sca.barragem.model.Barragem;
import com.sca.barragem.model.Monitoramento;
import com.sca.barragem.queue.ScaBarragensQueueSender;
import com.sca.barragem.repository.BarragemRepository;
import com.sca.barragem.repository.MonitoramentoRepository;

@Service
public class BarragemService {
	
	private static final Logger logger = LoggerFactory.getLogger(BarragemService.class);

	@Autowired
	private MonitoramentoRepository monitoramentoRepository;
	
	@Autowired
	private BarragemRepository barragemRepository;
	
	@Autowired
	private ScaBarragensQueueSender scaBarragensQueueSender;
	

	public void alertaDeRompimentoBarragem(Long codigoBarragem) {
		
		Barragem barragem = barragemRepository.findById(codigoBarragem).orElse(null);
		
		

		if (logger.isDebugEnabled()) {
			logger.debug("Preparando para alertar sobre o rompimento de barragem.");
		}

		scaBarragensQueueSender.send(barragem);
		
		logger.info("Alerta enviado para o módulo de segurança e comunicação");

	}
	
	public List<MonitoramentoDTO> retornaMonitoramentos(){
		
		List<Monitoramento> monitoramentos = monitoramentoRepository.buscaTodos();
		List<MonitoramentoDTO> monitoramentosDTO = new ArrayList<>();
		
		for (Monitoramento monitoramento : monitoramentos) {
			monitoramentosDTO.add(montarMonitoramentoDTO(monitoramento));
		}
		
		return monitoramentosDTO;
	}
	
	private MonitoramentoDTO montarMonitoramentoDTO(Monitoramento monitoramento) {
		
		MonitoramentoDTO monitoramentoDTO = new MonitoramentoDTO();
		
		if (monitoramento == null) return monitoramentoDTO;
		
		monitoramentoDTO.setCodigo(monitoramento.getCodigo());
		monitoramentoDTO.setBarragem(monitoramento.getSensor().getBarragem().getNome());
		monitoramentoDTO.setSensor(monitoramento.getSensor().getNome());
		monitoramentoDTO.setStatus(monitoramento.getStatus().getDescricao());
		monitoramentoDTO.setData(converterDataHora(monitoramento.getData()));
		
		return monitoramentoDTO;
	}
	
	private String converterDataHora(LocalDateTime dataHora) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

        return dataHora.format(formatter);
	}
	
	

}

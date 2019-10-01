package com.sca.barragem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sca.barragem.model.Barragem;
import com.sca.barragem.model.Monitoramento;

public interface MonitoramentoRepository extends JpaRepository<Monitoramento, Long>{

	@Query("SELECT new Monitoramento(m.codigo, m.status, m.data) FROM Monitoramento m "
			+ "WHERE m.sensor.barragem = :barragem ORDER BY m.data DESC")
	public List<Monitoramento> monitoramentos(@Param("barragem") Barragem barragem);
	
	@Query("SELECT m FROM Monitoramento m ORDER BY m.data DESC")
	public List<Monitoramento> buscaTodos();
}

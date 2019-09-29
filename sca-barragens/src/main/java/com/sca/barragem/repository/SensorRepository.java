package com.sca.barragem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sca.barragem.model.Barragem;
import com.sca.barragem.model.Sensor;

public interface SensorRepository extends JpaRepository<Sensor, Long> {
	
	@Query("SELECT new Sensor(s.codigo, s.nome, s.tipo) FROM Sensor s WHERE s.barragem = :barragem ")
	public List<Sensor> sensores(@Param("barragem") Barragem barragem);

}

package com.sca.ativo.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sca.ativo.model.Manutencao;
import com.sca.ativo.repository.manutencao.ManutencaoRepositoryQuery;

public interface ManutencaoRepository extends JpaRepository<Manutencao, Long>, ManutencaoRepositoryQuery {

	List<Manutencao> findByDataAgendadaLessThanEqualAndDataRealizadaIsNull(LocalDateTime dataAgendada);
	
	@Query("SELECT m FROM Manutencao m WHERE m.dataAgendada >= :dataDe and m.dataAgendada < :dataAte and m.dataRealizada is null")
	List <Manutencao> retornarManutencoesDoDia(@Param("dataDe") LocalDateTime dataDe, 
			  @Param("dataAte") LocalDateTime dataAte);
}

package com.sca.ativo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sca.ativo.model.Manutencao;
import com.sca.ativo.repository.manutencao.ManutencaoRepositoryQuery;

public interface ManutencaoRepository extends JpaRepository<Manutencao, Long>, ManutencaoRepositoryQuery {

}

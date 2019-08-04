package com.sca.ativo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sca.ativo.model.Ativo;
import com.sca.ativo.repository.ativo.AtivoRepositoryQuery;

public interface AtivoRepository extends JpaRepository<Ativo, Long>, AtivoRepositoryQuery {

}

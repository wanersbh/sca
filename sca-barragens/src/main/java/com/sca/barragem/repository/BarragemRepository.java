package com.sca.barragem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sca.barragem.model.Barragem;

public interface BarragemRepository extends JpaRepository<Barragem, Long> {

}

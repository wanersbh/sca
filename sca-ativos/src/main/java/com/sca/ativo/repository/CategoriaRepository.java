package com.sca.ativo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sca.ativo.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}

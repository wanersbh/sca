package com.sca.ativo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sca.ativo.model.Fabricante;

public interface FabricanteRepository extends JpaRepository<Fabricante, Long>{

	@Query("select f from Fabricante f order by f.nome asc")
	public List<Fabricante> retornarTodosFabricantesOrdenados();
}

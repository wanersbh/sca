package com.sca.ativo.repository.manutencao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import com.sca.ativo.controller.repository.filter.ManutencaoFilter;
import com.sca.ativo.model.Manutencao;
import com.sca.ativo.model.Manutencao_;

public class ManutencaoRepositoryImpl implements ManutencaoRepositoryQuery  {

	@PersistenceContext
	private EntityManager manager;

	@Override
	public Page<Manutencao> filtrar(ManutencaoFilter manutencaoFilter, Pageable pageable) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Manutencao> criteria = builder.createQuery(Manutencao.class);
		Root<Manutencao> root = criteria.from(Manutencao.class);

		// criar as restrições
		Predicate[] predicates = criarRestricoes(manutencaoFilter, builder, root);
		criteria.where(predicates);
		criteria.orderBy(builder.asc(root.get(Manutencao_.dataAgendada)));

		TypedQuery<Manutencao> query = manager.createQuery(criteria);
		adicionarRestricoesDepaginacao(query, pageable);
		
		
		return new PageImpl<>(query.getResultList(), pageable, total(manutencaoFilter));
	}


	private Long total(ManutencaoFilter manutencaoFilter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		
		Root<Manutencao> root = criteria.from(Manutencao.class);
		
		Predicate[] predicates = criarRestricoes(manutencaoFilter, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
		
	}

	private void adicionarRestricoesDepaginacao(TypedQuery<Manutencao> query, Pageable pageable) {
		int paginaAtual = pageable.getPageNumber();
		int totalRegistrosPorPagina = pageable.getPageSize();
		int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;
		
		query.setFirstResult(primeiroRegistroDaPagina);
		query.setMaxResults(totalRegistrosPorPagina);
		
	}

	private Predicate[] criarRestricoes(ManutencaoFilter manutencaoFilter, CriteriaBuilder builder, Root<Manutencao> root) {
		
		List<Predicate> predicates = new ArrayList<>();
		

		if (manutencaoFilter.getTipo() != null) {
			predicates.add(builder.equal(root.get(Manutencao_.tipo),  manutencaoFilter.getTipo()));
		}

		if (manutencaoFilter.getDataAgendadaDe() != null) {
			predicates.add(
					builder.greaterThanOrEqualTo(root.get(Manutencao_.dataAgendada), manutencaoFilter.getDataAgendadaDe()));
		}

		if (manutencaoFilter.getDataAgendadaAte() != null) {
			predicates.add(
					builder.lessThanOrEqualTo(root.get(Manutencao_.dataAgendada), manutencaoFilter.getDataAgendadaAte()));
		}

		return predicates.toArray(new Predicate[predicates.size()]);
	}

}

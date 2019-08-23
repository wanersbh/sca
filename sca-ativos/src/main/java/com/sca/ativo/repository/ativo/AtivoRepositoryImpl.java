package com.sca.ativo.repository.ativo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import com.sca.ativo.controller.repository.filter.AtivoFilter;
import com.sca.ativo.model.Ativo;
import com.sca.ativo.model.Ativo_;



public class AtivoRepositoryImpl implements AtivoRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;

	@Override
	public Page<Ativo> filtrar(AtivoFilter ativoFilter, Pageable pageable) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Ativo> criteria = builder.createQuery(Ativo.class);
		Root<Ativo> root = criteria.from(Ativo.class);

		// criar as restrições
		Predicate[] predicates = criarRestricoes(ativoFilter, builder, root);
		criteria.where(predicates);
		criteria.orderBy(builder.asc(root.get(Ativo_.descricao)));

		TypedQuery<Ativo> query = manager.createQuery(criteria);
		adicionarRestricoesDepaginacao(query, pageable);
		
		

		return new PageImpl<>(query.getResultList(), pageable, total(ativoFilter));
	}

	private Long total(AtivoFilter ativoFilter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		
		Root<Ativo> root = criteria.from(Ativo.class);
		
		Predicate[] predicates = criarRestricoes(ativoFilter, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
		
		
		
	}

	private void adicionarRestricoesDepaginacao(TypedQuery<Ativo> query, Pageable pageable) {
		int paginaAtual = pageable.getPageNumber();
		int totalRegistrosPorPagina = pageable.getPageSize();
		int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;
		
		query.setFirstResult(primeiroRegistroDaPagina);
		query.setMaxResults(totalRegistrosPorPagina);
		
	}

	private Predicate[] criarRestricoes(AtivoFilter ativoFilter, CriteriaBuilder builder, Root<Ativo> root) {
		
		List<Predicate> predicates = new ArrayList<>();
		

		if (StringUtils.isNotEmpty(ativoFilter.getDescricao())) {
			predicates.add(builder.like(
					builder.lower(root.get(Ativo_.descricao)), "%"+ ativoFilter.getDescricao().toLowerCase() +"%"  ) );
		}

		if (ativoFilter.getDataAquisicaoDe() != null) {
			predicates.add(
					builder.greaterThanOrEqualTo(root.get(Ativo_.dataAquisicao), ativoFilter.getDataAquisicaoDe()));
		}

		if (ativoFilter.getDataAquisicaoAte() != null) {
			predicates.add(
					builder.lessThanOrEqualTo(root.get(Ativo_.dataAquisicao), ativoFilter.getDataAquisicaoAte()));
		}

		return predicates.toArray(new Predicate[predicates.size()]);
	}

}

package com.sca.barragem.repository.barragem;

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

import com.sca.barragem.filter.BarragemFilter;
import com.sca.barragem.model.Barragem;


public class BarragemRepositoryImpl implements BarragemRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;

	@Override
	public List<Barragem> filtrar(BarragemFilter barragemFilter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Barragem> criteria = builder.createQuery(Barragem.class);
		Root<Barragem> root = criteria.from(Barragem.class);

		// criar as restrições
		Predicate[] predicates = criarRestricoes(barragemFilter, builder, root);
		criteria.where(predicates);
		criteria.orderBy(builder.asc(root.get("nome")));

		TypedQuery<Barragem> query = manager.createQuery(criteria);

		return query.getResultList();
	}

	private Predicate[] criarRestricoes(BarragemFilter barragemFilter, CriteriaBuilder builder, Root<Barragem> root) {

		List<Predicate> predicates = new ArrayList<>();

		if (StringUtils.isNotEmpty(barragemFilter.getNome())) {
			predicates.add(
					builder.like(builder.lower(root.get("nome")), "%" + barragemFilter.getNome().toLowerCase() + "%"));
		}

		if (barragemFilter.getMetodo() != null) {
			predicates.add(builder.equal(root.get("metodo"), barragemFilter.getMetodo()));
		}

		if (StringUtils.isNotEmpty(barragemFilter.getUf())) {
			predicates.add(builder.equal(root.get("uf"), barragemFilter.getUf()));
		}

		return predicates.toArray(new Predicate[predicates.size()]);
	}

}

package com.sca.ativo.model;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Ativo.class)
public abstract class Ativo_ {

	public static volatile SingularAttribute<Ativo, Long> codigo;
	public static volatile SingularAttribute<Ativo, String> observacao;
	public static volatile SingularAttribute<Ativo, LocalDate> dataExclusao;
	public static volatile SingularAttribute<Ativo, Categoria> categoria;
	public static volatile SingularAttribute<Ativo, Integer> anoFabricacao;
	public static volatile SingularAttribute<Ativo, LocalDate> dataAquisicao;
	public static volatile SingularAttribute<Ativo, String> descricao;

	public static final String CODIGO = "codigo";
	public static final String OBSERVACAO = "observacao";
	public static final String DATA_EXCLUSAO = "dataExclusao";
	public static final String CATEGORIA = "categoria";
	public static final String ANO_FABRICACAO = "anoFabricacao";
	public static final String DATA_AQUISICAO = "dataAquisicao";
	public static final String DESCRICAO = "descricao";

}


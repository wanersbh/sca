package com.sca.ativo.model;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Categoria.class)
public abstract class Categoria_ {

	public static volatile SingularAttribute<Categoria, Long> codigo;
	public static volatile SingularAttribute<Categoria, LocalDate> dataExclusao;
	public static volatile SingularAttribute<Categoria, String> nome;

	public static final String CODIGO = "codigo";
	public static final String DATA_EXCLUSAO = "dataExclusao";
	public static final String NOME = "nome";

}


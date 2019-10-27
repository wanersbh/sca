package com.sca.ativo.model;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Fabricante.class)
public abstract class Fabricante_ {

	public static volatile SingularAttribute<Fabricante, Long> codigo;
	public static volatile SingularAttribute<Fabricante, LocalDate> dataExclusao;
	public static volatile SingularAttribute<Fabricante, String> nome;

	public static final String CODIGO = "codigo";
	public static final String DATA_EXCLUSAO = "dataExclusao";
	public static final String NOME = "nome";

}


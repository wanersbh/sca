package com.sca.ativo.model;

import com.sca.ativo.enumerator.TipoManutencaoEnum;
import java.time.LocalDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Manutencao.class)
public abstract class Manutencao_ {

	public static volatile SingularAttribute<Manutencao, Long> codigo;
	public static volatile SingularAttribute<Manutencao, TipoManutencaoEnum> tipo;
	public static volatile SingularAttribute<Manutencao, String> observacao;
	public static volatile SingularAttribute<Manutencao, Ativo> ativo;
	public static volatile SingularAttribute<Manutencao, LocalDateTime> dataAgendada;
	public static volatile SingularAttribute<Manutencao, LocalDateTime> dataRealizada;

	public static final String CODIGO = "codigo";
	public static final String TIPO = "tipo";
	public static final String OBSERVACAO = "observacao";
	public static final String ATIVO = "ativo";
	public static final String DATA_AGENDADA = "dataAgendada";
	public static final String DATA_REALIZADA = "dataRealizada";

}


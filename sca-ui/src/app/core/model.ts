export class Categoria {
 codigo: number;
 nome: string;
}

export class Ativo {
  codigo: number;
  descricao: string;
  dataAquisicao: Date;
  anoFabricacao: number;
  observacao: string;
  dataExclusao: Date;
  categoria = new Categoria();
}

export class Manutencao {
  codigo: number;
  tipo: string;
  dataAgendada: Date;
  dataRealizada: Date;
  observacao: string;
  ativo = new Ativo();
}

export class Barragem {
  codigo: number;
  nome: string;
  metodo: number;
  uf: string;
  latitude: number;
  longitude: number;
}

export class Inspecao {
  codigo: number;
  altura: number;
  data: Date;
  risco: number;
  potencial: number;
  observacao: string;
  barragem = new Barragem();
}

export class Aviso {
  codigo: number;
  uf: string;
  codigoBarragem: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
}


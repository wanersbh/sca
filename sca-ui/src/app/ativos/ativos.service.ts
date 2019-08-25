import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as moment from 'moment';
import { Ativo } from '../core/model';

export class AtivoFiltro {
  descricao: string;
  dataAquisicaoInicio: Date;
  dataAquisicaoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class AtivosService {

  ativosUrl = 'http://localhost:8080/ativos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: AtivoFiltro): Promise<any> {

    const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if (filtro.dataAquisicaoInicio) {
      params = params.set('dataAquisicaoDe', moment(filtro.dataAquisicaoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataAquisicaoFim) {
      params = params.set('dataAquisicaoAte', moment(filtro.dataAquisicaoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(this.ativosUrl, { headers, params })
      .toPromise()
      .then(response => {
        const ativos = response['content'];
        const resultado = {
          ativos,
          total: response['totalElements']
        };
        return resultado;
      });
  }

  obterTodos(): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    return this.http.get(this.ativosUrl, { headers })
      .toPromise()
      .then(response => {
        const ativos = response['content'];
        const resultado = {
          ativos,
          total: response['totalElements']
        };
        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');

    return this.http.delete(`${this.ativosUrl}/${codigo}`, { headers }).toPromise().then(() => null);
  }

  adicionar(ativo: Ativo): Promise<Ativo> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.post<Ativo>(this.ativosUrl, JSON.stringify(ativo), { headers })
      .toPromise();
  }

  atualizar(ativo: Ativo): Promise<Ativo> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.put<Ativo>(`${this.ativosUrl}/${ativo.codigo}`, JSON.stringify(ativo), { headers })
      .toPromise()
      .then(
        response => {
          this.converterStringsParaDatas([response]);
          return response;
        }
      );
  }

  buscarPorCodigo(codigo: number): Promise<Ativo> {
    const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');

    return this.http.get<Ativo>(`${this.ativosUrl}/${codigo}`, { headers })
      .toPromise()
      .then(
        ativo => {
          this.converterStringsParaDatas([ativo]);
          return ativo;
        }
      );
  }

  private converterStringsParaDatas(ativos: Ativo[]) {
    for (const ativo of ativos) {
      ativo.dataAquisicao = moment(ativo.dataAquisicao,
        'YYYY-MM-DD').toDate();

      if (ativo.dataExclusao) {
        ativo.dataExclusao = moment(ativo.dataExclusao,
          'YYYY-MM-DD').toDate();
      }
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as moment from 'moment';

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
        const ativos = response['content']
        const resultado = {
          ativos,
          total: response['totalElements']
        };
        return resultado;
      });
  }
}

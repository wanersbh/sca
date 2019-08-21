import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as moment from 'moment';

export class ManutencaoFiltro {
  tipo: string;
  dataAgendadaInicio: Date;
  dataAgendadaFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}
@Injectable({
  providedIn: 'root'
})
export class ManutencoesService {

  manutencoesUrl = 'http://localhost:8080/manutencoes';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: ManutencaoFiltro): Promise<any> {

    const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.tipo) {
      params = params.set('tipo', filtro.tipo);
    }

    if (filtro.dataAgendadaInicio) {
      params = params.set('dataAgendadaDe', moment(filtro.dataAgendadaInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataAgendadaFim) {
      params = params.set('dataAquisicaoAte', moment(filtro.dataAgendadaFim).format('YYYY-MM-DD'));
    }

    return this.http.get(this.manutencoesUrl, { headers, params })
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

    return this.http.delete(`${this.manutencoesUrl}/${codigo}`, { headers }).toPromise().then(() => null);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Inspecao } from '../core/model';

export class InspecaoFiltro {
  risco: number;
  potencial: number;
  dataDe: Date;
  dataAte: Date;
}

@Injectable({
  providedIn: 'root'
})
export class InspecoesService {

  inspecoesUrl: string;

  constructor(private http: HttpClient) {
    this.inspecoesUrl =  `${environment.apiUrl}/sca-barragens/inspecoes`;
   }

   pesquisar(filtro: InspecaoFiltro): Promise<any> {

    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    let params = new HttpParams();

    if (filtro.risco) {
      params = params.set('risco', filtro.risco.toString());
    }

    if (filtro.potencial) {
      params = params.set('potencial', filtro.potencial.toString());
    }

    return this.http.get(this.inspecoesUrl, {  params }) // headers,
      .toPromise()
      .then(response => {
        return response;
      });
  }

   obterTodos(): Promise<any> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    return this.http.get(this.inspecoesUrl) // , { headers }
      .toPromise();
  }

  excluir(codigo: number): Promise<void> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    return this.http.delete(`${this.inspecoesUrl}/${codigo}`).toPromise().then(() => null); // , { headers }
  }

  adicionar(inspecao: Inspecao): Promise<Inspecao> {
    const headers = new HttpHeaders()
      // .append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.post<Inspecao>(this.inspecoesUrl, JSON.stringify(inspecao), { headers })
      .toPromise();
  }

  atualizar(inspecao: Inspecao): Promise<Inspecao> {
    const headers = new HttpHeaders()
      // .append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.put<Inspecao>(`${this.inspecoesUrl}/${inspecao.codigo}`, JSON.stringify(inspecao), { headers })
      .toPromise()
      .then(
        response => {
          return response;
        }
      );
  }

  buscarPorCodigo(codigo: number): Promise<Inspecao> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');

    return this.http.get<Inspecao>(`${this.inspecoesUrl}/${codigo}`) // , { headers }
      .toPromise()
      .then(
        inspecao => {
          return inspecao;
        }
      );
  }
}

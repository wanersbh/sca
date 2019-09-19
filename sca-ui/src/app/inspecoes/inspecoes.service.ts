import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Inspecao } from '../core/model';

export class InspecaoFiltro {
  nome: string;
  metodo: number;
  uf: string;
}

@Injectable({
  providedIn: 'root'
})
export class InspecoesService {

  inspecoesUrl: string;

  constructor(private http: HttpClient) {
    this.inspecoesUrl =  `${environment.apiBarragemUrl}/inspecoes`;
   }

   pesquisar(filtro: InspecaoFiltro): Promise<any> {

    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    let params = new HttpParams();

    // TODO: Alterar os filtros
    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    if (filtro.metodo) {
      params = params.set('metodo', filtro.metodo.toString());
    }

    if (filtro.uf) {
      params = params.set('uf', filtro.uf );
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

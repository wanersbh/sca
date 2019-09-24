import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Barragem } from '../core/model';

export class BarragemFiltro {
  nome: string;
  metodo: number;
  uf: string;
}
@Injectable({
  providedIn: 'root'
})
export class BarragensService {

  barragensUrl: string;

  constructor(private http: HttpClient) {
    this.barragensUrl =  `${environment.apiUrl}/sca-barragens/barragens`;
   }

   pesquisar(filtro: BarragemFiltro): Promise<any> {

    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    let params = new HttpParams();

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    if (filtro.metodo) {
      params = params.set('metodo', filtro.metodo.toString());
    }

    if (filtro.uf) {
      params = params.set('uf', filtro.uf );
    }

    return this.http.get(this.barragensUrl, {  params }) // headers,
      .toPromise()
      .then(response => {
        return response;
      });
  }

   obterTodos(): Promise<any> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    return this.http.get(this.barragensUrl) // , { headers }
      .toPromise();
  }

  excluir(codigo: number): Promise<void> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    return this.http.delete(`${this.barragensUrl}/${codigo}`).toPromise().then(() => null); // , { headers }
  }

  adicionar(barragem: Barragem): Promise<Barragem> {
    const headers = new HttpHeaders()
      // .append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.post<Barragem>(this.barragensUrl, JSON.stringify(barragem), { headers })
      .toPromise();
  }

  atualizar(barragem: Barragem): Promise<Barragem> {
    const headers = new HttpHeaders()
      // .append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.put<Barragem>(`${this.barragensUrl}/${barragem.codigo}`, JSON.stringify(barragem), { headers })
      .toPromise()
      .then(
        response => {
          return response;
        }
      );
  }

  buscarPorCodigo(codigo: number): Promise<Barragem> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');

    return this.http.get<Barragem>(`${this.barragensUrl}/${codigo}`) // , { headers }
      .toPromise()
      .then(
        barragem => {
          return barragem;
        }
      );
  }

}

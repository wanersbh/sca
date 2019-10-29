import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitoramentosService {

  barragensUrl = `${environment.apiUrl}/sca-barragens/barragens`;
  monitoramentosUrl: string;
  alertarUrl: string;

  constructor(private http: HttpClient) {
    this.monitoramentosUrl =  `${this.barragensUrl}/monitoramentos`;
    this.alertarUrl = `${this.barragensUrl}/alerta/barragem`;
   }

   obterTodos(): Promise<any> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    return this.http.get(this.monitoramentosUrl) // , { headers }
      .toPromise();
  }

  alerta(codigo: number): Promise<void> {
    const headers = new HttpHeaders()
      // .append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.put(`${this.alertarUrl}/${codigo}`, { headers })
      .toPromise()
      .then(
        response => {
        }
      );
  }

}

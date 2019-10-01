import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitoramentosService {

  monitoramentosUrl: string;

  constructor(private http: HttpClient) {
    this.monitoramentosUrl =  `${environment.apiUrl}/sca-barragens/barragens/monitoramentos`;
   }

   obterTodos(): Promise<any> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    return this.http.get(this.monitoramentosUrl) // , { headers }
      .toPromise();
  }

}

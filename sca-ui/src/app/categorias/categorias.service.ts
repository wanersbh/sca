import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasUrl: string;

  constructor(private http: HttpClient) {
    this.categoriasUrl =  `${environment.apiAtivoUrl}/categorias`;
   }

  pesquisar(): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    return this.http.get(this.categoriasUrl , { headers })
      .toPromise();
  }
}

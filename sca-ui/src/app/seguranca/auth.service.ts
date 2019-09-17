import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl: string;
  tokensRevokeUrl: string;
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    this.carregarToken();
    this.oauthTokenUrl = `${environment.apiAtivoUrl}/oauth/token`;
    this.tokensRevokeUrl = `${environment.apiAtivoUrl}/tokens/revoke`;
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic cHVjbWluYXM6cHVjbTFuQHM=');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response['access_token']);
      })
      .catch(response => {
        const responseError = response.error;
        if (response.status === 400) {
          if (responseError.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida');
          }
        }
        return Promise.reject(response);
      });
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelperService.decodeToken(token);
    localStorage.setItem('token', token);
  }

  carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Basic cHVjbWluYXM6cHVjbTFuQHM=');
    const body = 'grant_type=refresh_token';

    return this.http.post(this.oauthTokenUrl, body, {headers,  withCredentials: true})
    .toPromise()
    .then( response => {
      this.armazenarToken(response['access_token']);
      console.log('Novo access token criado');
    })
    .catch( error => {
      console.error('Erro ao renovar token.', error);
      return Promise.resolve(null);
    });
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelperService.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }

    return false;
  }

  limparAcessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, {withCredentials: true})
    .toPromise()
    .then(() => {
      this.limparAcessToken();
    }
    );
  }
}

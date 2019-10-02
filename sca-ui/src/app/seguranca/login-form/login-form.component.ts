import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) { }

  login(usuario: string, senha: string) {
    this.authService.login(usuario, senha)
    .then(() => {
      this.router.navigate(['/monitoramentos']);
    })
    .catch(error => {
      this.errorHandlerService.handle(error);
    });
  }

}

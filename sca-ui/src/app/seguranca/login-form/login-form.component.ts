import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { validateBr } from 'js-brasil';
import { maskBr } from 'js-brasil';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  cpfCnpj: string;

  constructor(
    private authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
    private toastr: ToastrService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Login');
  }

  login(senha: string) {
    const cpfCnpjSemMascara = this.cpfCnpj.replace(/[^0-9]+/g, '');

    this.authService.login(cpfCnpjSemMascara, senha)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        this.errorHandlerService.handle(error);
      });
  }

  // https://www.npmjs.com/package/js-brasil
  formatar() {

    if (this.cpfCnpj === undefined) {
      return;
    }

    const cpfCnpjSemMascara = this.cpfCnpj.replace(/[^0-9]+/g, '');

    if (cpfCnpjSemMascara.length > 11) {

      if (validateBr.cnpj(cpfCnpjSemMascara)) {
        this.cpfCnpj = maskBr.cnpj(cpfCnpjSemMascara);
      } else {
        this.toastr.error('O CNPJ não é válido ou está incorreto, tente novamente!');
        this.cpfCnpj = '';
        return;
      }
    } else {

      if (validateBr.cpf(cpfCnpjSemMascara)) {
        this.cpfCnpj = maskBr.cpf(cpfCnpjSemMascara);
      } else {
        this.toastr.error('O CPF não é válido ou está incorreto, tente novamente!');
        this.cpfCnpj = '';
        return;
      }
    }
  }

}

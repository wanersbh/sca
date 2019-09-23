import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NotAuthenticatedError } from '../seguranca/sca-http-interceptor';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  handle(errorResponse: any) {
    let msg: string;
    let errors;

    msg = 'Erro ao processar serviço remoto. Tente novamente.';
    console.error('Ocorreu um erro', errorResponse);

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof HttpErrorResponse
      && errorResponse.status >= 400 && errorResponse.status <= 499) {
      errors = errorResponse.error;
      msg = errors[0].mensagemUsuario;

    } else if (errorResponse.status === 403) {
      msg = 'Você não tem permissão para realizar essa operação.';
    } else {
      msg = 'Ocorreu um erro ao processar a sua solicitação';
    }

    this.toastr.error(msg);
  }
}

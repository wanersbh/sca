import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './../seguranca/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { AtivosService } from '../ativos/ativos.service';
import { ManutencoesService } from '../manutencoes/manutencoes.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';


@NgModule({
  imports: [
    CommonModule,

    // Documentação do toastr exibição de mensagens.
    // https://www.npmjs.com/package/ngx-toastr
    ToastrModule.forRoot(),
    ConfirmDialogModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent
  ],
  exports: [
    NavbarComponent,
    ToastrModule,
    ConfirmDialogModule
    ],
  providers: [
    AtivosService,
    ManutencoesService,
    ConfirmationService,
    ErrorHandlerService,
    AuthService
  ]
})
export class CoreModule { }

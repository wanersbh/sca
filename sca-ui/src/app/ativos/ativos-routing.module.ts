import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtivosPesquisaComponent } from './ativos-pesquisa/ativos-pesquisa.component';
import { AtivosCadastroComponent } from './ativos-cadastro/ativos-cadastro.component';
import { AuthGuard } from './../seguranca/auth.guard';

const routes: Routes = [
  {
    path: 'ativos',
    component: AtivosPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_OPERADOR'] }
  },
  {
    path: 'ativos/novo',
    component: AtivosCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_OPERADOR'] }
  },
  {
    path: 'ativos/:codigo',
    component: AtivosCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_OPERADOR'] }
  },

];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AtivosRoutingModule { }

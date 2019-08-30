import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManutencoesPesquisaComponent } from './manutencoes-pesquisa/manutencoes-pesquisa.component';
import { ManutencoesCadastroComponent } from './manutencoes-cadastro/manutencoes-cadastro.component';
import { AuthGuard } from './../seguranca/auth.guard';

const routes: Routes = [
  {
    path: 'manutencoes',
    component: ManutencoesPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_MANUTENCAO'] }
   },
  {
    path: 'manutencoes/novo',
    component: ManutencoesCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_MANUTENCAO'] }
  },
  {
    path: 'manutencoes/:codigo',
    component: ManutencoesCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_MANUTENCAO'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ManutencoesRoutingModule { }

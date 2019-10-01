import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { BarragensPesquisaComponent } from './barragens-pesquisa/barragens-pesquisa.component';
import { BarragensCadastroComponent } from './barragens-cadastro/barragens-cadastro.component';
import { MonitoramentosPesquisaComponent } from './monitoramentos-pesquisa/monitoramentos-pesquisa.component';

const routes: Routes = [
  {
    path: 'barragens',
    component: BarragensPesquisaComponent
    // canActivate: [AuthGuard],
    // data: { roles: ['ROLE_PESQUISAR_BARRAGEM'] }
  },
  {
    path: 'barragens/novo',
    component: BarragensCadastroComponent
    // canActivate: [AuthGuard],
    // data: { roles: ['ROLE_CADASTRAR_BARRAGEM'] }
  },
  {
    path: 'barragens/:codigo',
    component: BarragensCadastroComponent
    // canActivate: [AuthGuard],
    // data: { roles: ['ROLE_PESQUISAR_BARRAGEM'] }
  },
  {
    path: 'monitoramentos',
    component: MonitoramentosPesquisaComponent
    // canActivate: [AuthGuard],
    // data: { roles: ['ROLE_PESQUISAR_BARRAGEM'] }
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BarragensRoutingModule { }

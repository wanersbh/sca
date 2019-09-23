import { InspecoesPesquisaComponent } from './inspecoes-pesquisa/inspecoes-pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InspecoesCadastroComponent } from './inspecoes-cadastro/inspecoes-cadastro.component';



const routes: Routes = [
  {
    path: 'inspecoes',
    component: InspecoesPesquisaComponent
    // canActivate: [AuthGuard],
    // data: { roles: ['ROLE_PESQUISAR_BARRAGEM'] }
  },
  {
    path: 'inspecoes/novo',
    component: InspecoesCadastroComponent
    // canActivate: [AuthGuard],
    // data: { roles: ['ROLE_CADASTRAR_BARRAGEM'] }
  },
  {
    path: 'inspecoes/:codigo',
    component: InspecoesCadastroComponent
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
export class InspecoesRoutingModule { }

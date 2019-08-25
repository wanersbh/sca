import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManutencoesPesquisaComponent } from './manutencoes-pesquisa/manutencoes-pesquisa.component';
import { ManutencoesCadastroComponent } from './manutencoes-cadastro/manutencoes-cadastro.component';

const routes: Routes = [
  { path: 'manutencoes', component: ManutencoesPesquisaComponent },
  { path: 'manutencoes/novo', component: ManutencoesCadastroComponent },
  { path: 'manutencoes/:codigo', component: ManutencoesCadastroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ManutencoesRoutingModule { }

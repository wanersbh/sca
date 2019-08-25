import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtivosPesquisaComponent } from './ativos-pesquisa/ativos-pesquisa.component';
import { AtivosCadastroComponent } from './ativos-cadastro/ativos-cadastro.component';


const routes: Routes = [
  { path: 'ativos', component: AtivosPesquisaComponent },
  { path: 'ativos/novo', component: AtivosCadastroComponent },
  { path: 'ativos/:codigo', component: AtivosCadastroComponent },

];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AtivosRoutingModule { }

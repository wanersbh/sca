import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InformacaoComponent } from './comunicacao/informacao/informacao.component';
import { AvisoComponent } from './comunicacao/aviso/aviso.component';

import { CategoriasPesquisaComponent } from './ativos/categorias-pesquisa/categorias-pesquisa.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'categorias', component: CategoriasPesquisaComponent },

  { path: 'aviso', component: AvisoComponent },
  { path: 'informacao', component: InformacaoComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

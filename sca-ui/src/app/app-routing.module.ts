import { SegurancaRoutingModule } from './seguranca/seguranca-routing.module';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';

const routes: Routes = [
  { path: '', redirectTo: 'ativos', pathMatch: 'full' },
  { path: 'categorias', component: CategoriasPesquisaComponent },

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

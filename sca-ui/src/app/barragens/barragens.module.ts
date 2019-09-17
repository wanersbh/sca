import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarragensCadastroComponent } from './barragens-cadastro/barragens-cadastro.component';
import { BarragensPesquisaComponent } from './barragens-pesquisa/barragens-pesquisa.component';



@NgModule({
  declarations: [BarragensCadastroComponent, BarragensPesquisaComponent],
  imports: [
    CommonModule
  ]
})
export class BarragensModule { }

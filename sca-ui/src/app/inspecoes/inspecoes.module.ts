import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspecoesPesquisaComponent } from './inspecoes-pesquisa/inspecoes-pesquisa.component';
import { InspecoesCadastroComponent } from './inspecoes-cadastro/inspecoes-cadastro.component';



@NgModule({
  declarations: [InspecoesPesquisaComponent, InspecoesCadastroComponent],
  imports: [
    CommonModule
  ]
})
export class InspecoesModule { }

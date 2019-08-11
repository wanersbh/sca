import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';


@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  declarations: [
    CategoriasPesquisaComponent
  ],
  exports: [
    CategoriasPesquisaComponent
  ]
})
export class CategoriasModule { }

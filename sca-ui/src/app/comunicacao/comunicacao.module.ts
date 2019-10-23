import { ButtonModule } from 'primeng/components/button/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisoComponent } from './aviso/aviso.component';
import { InformacaoComponent } from './informacao/informacao.component';



@NgModule({
  declarations: [AvisoComponent, InformacaoComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class ComunicacaoModule { }

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import {FieldsetModule} from 'primeng/components/fieldset/fieldset';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';

import { AtivosPesquisaComponent } from './ativos-pesquisa/ativos-pesquisa.component';
import { AtivosCadastroComponent } from './ativos-cadastro/ativos-cadastro.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    DropdownModule,
    SharedModule,
    FieldsetModule,
    RadioButtonModule
  ],
  declarations: [
    AtivosPesquisaComponent,
    AtivosCadastroComponent

  ],
  exports: [
    AtivosPesquisaComponent,
    AtivosCadastroComponent
  ]
})
export class AtivosModule { }

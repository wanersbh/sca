import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SharedModule } from 'primeng/components/common/shared';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { InspecoesRoutingModule } from './inspecoes-routing.module';

import { InspecoesPesquisaComponent } from './inspecoes-pesquisa/inspecoes-pesquisa.component';
import { InspecoesCadastroComponent } from './inspecoes-cadastro/inspecoes-cadastro.component';


@NgModule({
  declarations: [InspecoesPesquisaComponent, InspecoesCadastroComponent],
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
    RadioButtonModule,
    InspecoesRoutingModule,
  ]
})
export class InspecoesModule { }

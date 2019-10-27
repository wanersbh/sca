import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

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
import {ToastModule} from 'primeng/toast';

import { BarragensRoutingModule } from './barragens-routing.module';
import { BarragensCadastroComponent } from './barragens-cadastro/barragens-cadastro.component';
import { BarragensPesquisaComponent } from './barragens-pesquisa/barragens-pesquisa.component';
import { SensoresPesquisaComponent } from './sensores-pesquisa/sensores-pesquisa.component';
import { SensoresCadastroComponent } from './sensores-cadastro/sensores-cadastro.component';
import { MonitoramentosCadastroComponent } from './monitoramentos-cadastro/monitoramentos-cadastro.component';
import { MonitoramentosPesquisaComponent } from './monitoramentos-pesquisa/monitoramentos-pesquisa.component';
import { InspecoesRoutingModule } from './inspecoes-routing.module';
import { InspecoesCadastroComponent } from './inspecoes-cadastro/inspecoes-cadastro.component';
import { InspecoesPesquisaComponent } from './inspecoes-pesquisa/inspecoes-pesquisa.component';


@NgModule({
  declarations: [
    BarragensCadastroComponent,
    BarragensPesquisaComponent,
    InspecoesCadastroComponent,
    InspecoesPesquisaComponent,
    SensoresPesquisaComponent,
    SensoresCadastroComponent,
    MonitoramentosCadastroComponent,
    MonitoramentosPesquisaComponent
  ],
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
    // SharedModule,
    FieldsetModule,
    RadioButtonModule,
    ToastModule,

    BarragensRoutingModule,
    InspecoesRoutingModule,

    AgmCoreModule.forRoot({
      apiKey: ' '
    })
  ]
})
export class BarragensModule { }

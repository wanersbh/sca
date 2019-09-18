import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarragensCadastroComponent } from './barragens-cadastro/barragens-cadastro.component';
import { BarragensPesquisaComponent } from './barragens-pesquisa/barragens-pesquisa.component';
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
import { BarragensRoutingModule } from './barragens-routing.module';
import { GMapModule } from 'primeng/gmap';



@NgModule({
  declarations: [BarragensCadastroComponent, BarragensPesquisaComponent],
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
    GMapModule,
    BarragensRoutingModule
  ]
})
export class BarragensModule { }

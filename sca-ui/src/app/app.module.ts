import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';


import { AppComponent } from './app.component';
import { AtivosPesquisaComponent } from './ativos-pesquisa/ativos-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    AtivosPesquisaComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

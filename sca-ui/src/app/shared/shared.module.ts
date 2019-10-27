import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AgmCoreModule } from '@agm/core';

import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ' '
    })
  ],
  declarations: [
    MessageComponent,
    DashboardComponent
  ],
  exports: [
    MessageComponent
  ]
})
export class SharedModule { }

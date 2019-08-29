import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';

import { LoginFormComponent } from './login-form/login-form.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { ScaHttpInterceptor } from './sca-http-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export function tokenGetter(): string {
  return localStorage.getItem('token');
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,

    SegurancaRoutingModule,

    // TODO Pesquisar como colocar o Content-Type: 'application/json' de forma global
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['http://localhost:8080/oauth/token']
      }
    })
  ],
  declarations: [LoginFormComponent],
  providers: [JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ScaHttpInterceptor,
      multi: true
    }
  ]
})
export class SegurancaModule { }

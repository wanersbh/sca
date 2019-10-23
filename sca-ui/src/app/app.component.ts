import { AuthService } from './seguranca/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  exibindoNavbar() {
    return this.router.url !== '/login' && !this.auth.isAccessTokenInvalido();
  }

}

import { Component, OnInit } from '@angular/core';
import { BarragensService, BarragemFiltro } from 'src/app/barragens/barragens.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lat: number = -19.92661128;
  lng: number = -43.93611091;

  barragens = [];
  filtro = new BarragemFiltro();

  constructor(private barragensService: BarragensService) { }

  ngOnInit() {
    this.pesquisar();
  }


  pesquisar() {
    // filtro
    this.barragensService.pesquisar(this.filtro).then(resultado => {
      this.barragens = resultado;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AtivosService, AtivoFiltro } from '../ativos.service';

@Component({
  selector: 'app-ativos-pesquisa',
  templateUrl: './ativos-pesquisa.component.html',
  styleUrls: ['./ativos-pesquisa.component.css']
})
export class AtivosPesquisaComponent implements OnInit {

  ativos = [ ];
  filtro = new AtivoFiltro();

  constructor(private ativosService: AtivosService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {

    this.ativosService.pesquisar(this.filtro).then(resultado => {
      this.ativos = resultado.ativos;
    } );
  }
}

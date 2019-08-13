import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { AtivosService, AtivoFiltro } from '../ativos.service';

@Component({
  selector: 'app-ativos-pesquisa',
  templateUrl: './ativos-pesquisa.component.html',
  styleUrls: ['./ativos-pesquisa.component.css']
})
export class AtivosPesquisaComponent implements OnInit {

  ativos = [ ];
  filtro = new AtivoFiltro();
  totalRegistros = 0;

  constructor(private ativosService: AtivosService) { }

  ngOnInit(): void {
    // this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.ativosService.pesquisar(this.filtro).then(resultado => {
      this.totalRegistros = resultado.total;
      this.ativos = resultado.ativos;
    } );
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }
}

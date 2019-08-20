import { Component, OnInit } from '@angular/core';

import { ManutencoesService, ManutencaoFiltro } from '../manutencoes.service';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'app-manutencoes-pesquisa',
  templateUrl: './manutencoes-pesquisa.component.html',
  styleUrls: ['./manutencoes-pesquisa.component.css']
})
export class ManutencoesPesquisaComponent implements OnInit  {

  manutencoes = [ ];
  tipos: any;
  filtro = new ManutencaoFiltro();
  totalRegistros = 0;

  constructor(private manutencoesService: ManutencoesService) {
    this.tipos = [
      { label: 'Corretiva', value: 'CORRETIVA' },
      { label: 'Preventiva', value: 'PREVENTIVA' }
    ];
  }

  ngOnInit(): void {
    // this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.manutencoesService.pesquisar(this.filtro).then(resultado => {
      this.totalRegistros = resultado.total;
      this.manutencoes = resultado.ativos;
    } );
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}

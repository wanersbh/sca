import { Component, OnInit } from '@angular/core';

import { ManutencoesService } from '../manutencoes.service';

@Component({
  selector: 'app-manutencoes-pesquisa',
  templateUrl: './manutencoes-pesquisa.component.html',
  styleUrls: ['./manutencoes-pesquisa.component.css']
})
export class ManutencoesPesquisaComponent implements OnInit  {

  manutencoes = [ ];

  constructor(private manutencoesService: ManutencoesService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.manutencoesService.pesquisar().then(manutencoes => {
      this.manutencoes = manutencoes;
    } );
  }

}

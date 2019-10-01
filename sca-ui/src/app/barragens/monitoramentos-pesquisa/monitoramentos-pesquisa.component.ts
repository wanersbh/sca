import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Table } from 'primeng/components/table/table';

import { MonitoramentosService } from '../monitoramentos.service';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-monitoramentos-pesquisa',
  templateUrl: './monitoramentos-pesquisa.component.html',
  styleUrls: ['./monitoramentos-pesquisa.component.css']
})
export class MonitoramentosPesquisaComponent implements OnInit {

  @ViewChild('tabela', { static: true }) grid: Table;
  monitoramentos = [];
  totalRegistros = 0;
  cols = [];


  constructor(
    private monitoramentosService: MonitoramentosService,
    private title: Title,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'codigo', header: 'Código' },
      { field: 'barragem', header: 'Barragem' },
      { field: 'monitoramento.sensor.nome', header: 'Sensor' },
      { field: 'status', header: 'Status' },
      { field: 'data', header: 'Data' }
  ];
    this.pesquisar();
    this.title.setTitle('Pesquisa monitoramento');


  }

  pesquisar() {
    // filtro
    this.monitoramentosService.obterTodos().then(resultado => {
      this.monitoramentos = resultado;
    });
  }

}

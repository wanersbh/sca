import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Table } from 'primeng/components/table/table';

import { MonitoramentosService } from '../monitoramentos.service';
import { AuthService } from 'src/app/seguranca/auth.service';
import { MessageService } from 'primeng/components/common/api';

@Component({
  selector: 'app-monitoramentos-pesquisa',
  templateUrl: './monitoramentos-pesquisa.component.html',
  styleUrls: ['./monitoramentos-pesquisa.component.css'],
  providers: [MessageService]
})
export class MonitoramentosPesquisaComponent implements OnInit {

  @ViewChild('tabela', { static: true }) grid: Table;
  monitoramentos = [];
  totalRegistros = 0;
  cols = [];


  constructor(
    private monitoramentosService: MonitoramentosService,
    private title: Title,
    private messageService: MessageService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'codigo', header: 'Código' },
      { field: 'barragem', header: 'Barragem' },
      { field: 'sensor', header: 'Sensor' },
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

  retornarClasse(monitoramento: any) {
    if (monitoramento.status === 'Estável') {
      return 'estavel';
    }

    if (monitoramento.status === 'Alerta') {
      return 'alerta';
    }

    if (this.ehCritico(monitoramento)) {
      return 'critico';
    }
  }

  ehCritico(monitoramento: any) {
    return monitoramento.status === 'Crítico';
  }

  onReject() {
    this.messageService.clear('c');
  }

  onConfirm() {
    this.messageService.clear('c');
    // this.alertaSonoro();
  }

  showConfirm(monitoramento: any) {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Aviso de evacuação!',
    detail: `Existe risco da ${monitoramento.barragem} se romper, deseja emitir o alerta para todos?`});
  }

  // https://www.treinaweb.com.br/blog/gerando-sons-com-a-web-audio-api-do-javascript/
  alertaSonoro() {
    const context = new AudioContext();
    const oscillator = context.createOscillator();

    oscillator.type = 'square';
    oscillator.connect(context.destination);
    oscillator.start();
  }



}

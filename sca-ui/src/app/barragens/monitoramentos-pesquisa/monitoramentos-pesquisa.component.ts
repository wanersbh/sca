import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Table } from 'primeng/components/table/table';

import { MonitoramentosService } from '../monitoramentos.service';
import { AuthService } from 'src/app/seguranca/auth.service';
import { MessageService } from 'primeng/components/common/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Subscription } from 'rxjs';

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
  private subscription: Subscription = new Subscription();
  interval: any;
  isCritico = false;
  criticoMap = new Map();

  constructor(
    private monitoramentosService: MonitoramentosService,
    private title: Title,
    private messageService: MessageService,
    public auth: AuthService,
    private toastr: ToastrService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'codigo', header: 'Código' },
      { field: 'codigoBarragem', header: 'Código Barragem' },
      { field: 'barragem', header: 'Barragem' },
      { field: 'sensor', header: 'Sensor' },
      { field: 'status', header: 'Status' },
      { field: 'data', header: 'Data' }
    ];

    this.pesquisar();

    this.interval = setInterval(() => {
      this.pesquisar();
    }, 125000);

    this.title.setTitle('Pesquisa monitoramento');

    this.isCritico = false;
  }

  pesquisar() {
    // filtro
    this.monitoramentosService.obterTodos().then(resultado => {
      this.monitoramentos = resultado;
      this.verificarSituacaoBarragem(this.monitoramentos);

    });
  }

  verificarSituacaoBarragem(monitoramentos: any) {
    monitoramentos.forEach(monitoramento => {
      if (this.ehCritico(monitoramento)) {
        this.isCritico = true;
        this.criticoMap.set(monitoramento.codigoBarragem, monitoramento.codigoBarragem.toString());
        return;
      }
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
    for (const codigoBarragem of this.criticoMap.keys()) {
      this.monitoramentosService.alerta(codigoBarragem)
        .then(response => {
          this.toastr.success('Alerta encaminhado com sucesso!');
        }).catch(error => {
          this.errorHandlerService.handle(error);
        });
      // this.alertaSonoro();
    }
    this.messageService.clear('c');
  }

  showConfirm() {
    this.messageService.clear();

    this.messageService.add({
      key: 'c', sticky: true, severity: 'error', summary: 'Procedimento de Evacuação',
      detail: `Tem certeza que deseja acionar o procedimento de evacuação?
        *Toda a comunidade próxima da barragem receberá o comunicado, juntamente com a Defesa Civil e
        todas as autoridades responsáveis.
        `
    });

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

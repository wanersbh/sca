import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { Table } from 'primeng/components/table/table';

import { ManutencoesService, ManutencaoFiltro } from '../manutencoes.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-manutencoes-pesquisa',
  templateUrl: './manutencoes-pesquisa.component.html',
  styleUrls: ['./manutencoes-pesquisa.component.css']
})
export class ManutencoesPesquisaComponent implements OnInit {

  @ViewChild('tabela', { static: true }) grid: Table;
  manutencoes = [];
  tipos: any;
  filtro = new ManutencaoFiltro();
  totalRegistros = 0;
  br: any;

  constructor(
    private manutencoesService: ManutencoesService,
    private toastr: ToastrService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) {
    this.tipos = [
      { label: 'Corretiva', value: 'CORRETIVA' },
      { label: 'Preventiva', value: 'PREVENTIVA' }
    ];
  }

  ngOnInit(): void {

    this.title.setTitle('Pesquisa Manutenção');

    this.br = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
        'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje',
      clear: 'Limpar',
      dateFormat: 'dd/mm/y',
      weekHeader: 'Wk'
    };
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.manutencoesService.pesquisar(this.filtro).then(resultado => {
      this.totalRegistros = resultado.total;
      this.manutencoes = resultado.ativos;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(manutencao: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(manutencao);
      }
    }
    );
  }

  excluir(manutencao: any) {
    this.manutencoesService.excluir(manutencao.codigo)
      .then(() => {
        this.grid.reset();
        this.toastr.success('Registro excluido com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  limparFiltro() {
    this.filtro = new ManutencaoFiltro();
    this.pesquisar();
  }

}

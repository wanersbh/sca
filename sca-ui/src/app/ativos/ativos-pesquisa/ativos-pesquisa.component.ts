import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';
import { Table } from 'primeng/components/table/table';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastrService } from 'ngx-toastr';

import { AtivosService, AtivoFiltro } from '../ativos.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-ativos-pesquisa',
  templateUrl: './ativos-pesquisa.component.html',
  styleUrls: ['./ativos-pesquisa.component.css']
})
export class AtivosPesquisaComponent implements OnInit {

  @ViewChild('tabela', { static: true }) grid: Table;
  ativos = [];
  filtro = new AtivoFiltro();
  totalRegistros = 0;
  br: any;

  constructor(
    private ativosService: AtivosService,
    private toastr: ToastrService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
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

    this.ativosService.pesquisar(this.filtro).then(resultado => {
      this.totalRegistros = resultado.total;
      this.ativos = resultado.ativos;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(ativo: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(ativo);
      }
    }
    );
  }

  excluir(ativo: any) {
    this.ativosService.excluir(ativo.codigo)
      .then(() => {
        this.grid.reset();
        this.toastr.success('Registro excluido com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}

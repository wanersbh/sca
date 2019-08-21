import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ManutencoesService, ManutencaoFiltro } from '../manutencoes.service';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { Table } from 'primeng/components/table/table';

@Component({
  selector: 'app-manutencoes-pesquisa',
  templateUrl: './manutencoes-pesquisa.component.html',
  styleUrls: ['./manutencoes-pesquisa.component.css']
})
export class ManutencoesPesquisaComponent implements OnInit {

  manutencoes = [];
  tipos: any;
  filtro = new ManutencaoFiltro();
  totalRegistros = 0;
  @ViewChild('tabela', { static: true }) grid: Table;

  constructor(
    private manutencoesService: ManutencoesService,
    private toastr: ToastrService,
    private confirmationService: ConfirmationService
  ) {
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
    });
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
      });
  }

}

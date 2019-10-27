import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ConfirmationService } from 'primeng/components/common/api';
import { Table } from 'primeng/components/table/table';

import { ToastrService } from 'ngx-toastr';

import { InspecaoFiltro, InspecoesService } from '../inspecoes.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/seguranca/auth.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-inspecoes-pesquisa',
  templateUrl: './inspecoes-pesquisa.component.html',
  styleUrls: ['./inspecoes-pesquisa.component.css']
})
export class InspecoesPesquisaComponent implements OnInit {

  @ViewChild('tabela', { static: true }) grid: Table;
  inspecoes = [];
  totalRegistros = 0;
  filtro = new InspecaoFiltro();
  niveis: any;
  mapNiveis: any;

  constructor(
    private inspecoesService: InspecoesService,
    private toastr: ToastrService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
    this.title.setTitle('Pesquisa barragem');

    this.niveis = [
      { label: 'Baixo', value: 1 },
      { label: 'Médio', value: 2 },
      { label: 'Alto',  value: 3 }
    ];


    this.mapNiveis = new Map([
      [1, 'Baixo'],
      [2, 'Médio'],
      [3, 'Alto'],
    ]);


  }

  pesquisar() {
    // filtro
    this.inspecoesService.pesquisar(this.filtro).then(resultado => {
      this.inspecoes = resultado;
    });
  }

  /*
  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }
  */

  confirmarExclusao(inspecao: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(inspecao);
      }
    }
    );
  }

  excluir(inspecao: any) {
    this.inspecoesService.excluir(inspecao.codigo)
      .then(() => {
        this.grid.reset();
        this.toastr.success('Registro excluido com sucesso!');
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  limparFiltro() {
    this.filtro = new InspecaoFiltro();
    this.pesquisar();
  }

  descricaoNiveis(codigo: number) {
    return this.mapNiveis.get(codigo);
  }
}

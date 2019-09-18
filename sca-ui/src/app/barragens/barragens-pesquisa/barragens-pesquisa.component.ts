import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/components/table/table';
import { BarragensService } from '../barragens.service';
import { ToastrService } from 'ngx-toastr';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, LazyLoadEvent } from 'primeng/components/common/api';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-barragens-pesquisa',
  templateUrl: './barragens-pesquisa.component.html',
  styleUrls: ['./barragens-pesquisa.component.css']
})
export class BarragensPesquisaComponent implements OnInit {

  @ViewChild('tabela', { static: true }) grid: Table;
  barragens = [];

  constructor(
    private barragensService: BarragensService,
    private toastr: ToastrService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title,
    public auth: AuthService
  ) { }

  ngOnInit(): void {

    this.title.setTitle('Pesquisa barragem');
  }

  pesquisar() {

    this.barragensService.obterTodos().then(resultado => {
      this.barragens = resultado;
    });
  }

  /*
  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }
  */

  confirmarExclusao(barragem: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(barragem);
      }
    }
    );
  }

  excluir(barragem: any) {
    this.barragensService.excluir(barragem.codigo)
      .then(() => {
        this.grid.reset();
        this.toastr.success('Registro excluido com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  limparFiltro() {
    this.pesquisar();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/components/table/table';
import { BarragensService, BarragemFiltro } from '../barragens.service';
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
  totalRegistros = 0;
  metodosMap: any;
  metodos: any;
  filtro = new BarragemFiltro();
  ufs: any;

  constructor(
    private barragensService: BarragensService,
    private toastr: ToastrService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private title: Title,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
    this.title.setTitle('Pesquisa barragem');

    this.metodos = [
      { label: 'Montante', value: 1 },
      { label: 'Jusante', value: 2 },
      { label: 'Linha de Centro', value: 3 }
    ];

    this.metodosMap = new Map([
      [1, 'Montante'],
      [2, 'Jusante'],
      [3, 'Linha de Centro']
    ]);

    this.ufs = [
      { label: 'AC', value: 'AC' }
      , { label: 'AL', value: 'AL' }
      , { label: 'AM', value: 'AM' }
      , { label: 'AP', value: 'AP' }
      , { label: 'BA', value: 'BA' }
      , { label: 'CE', value: 'CE' }
      , { label: 'DF', value: 'DF' }
      , { label: 'ES', value: 'ES' }
      , { label: 'GO', value: 'GO' }
      , { label: 'MA', value: 'MA' }
      , { label: 'MT', value: 'MT' }
      , { label: 'MS', value: 'MS' }
      , { label: 'MG', value: 'MG' }
      , { label: 'PA', value: 'PA' }
      , { label: 'PB', value: 'PB' }
      , { label: 'PR', value: 'PR' }
      , { label: 'PE', value: 'PE' }
      , { label: 'PI', value: 'PI' }
      , { label: 'RJ', value: 'RJ' }
      , { label: 'RN', value: 'RN' }
      , { label: 'RO', value: 'RO' }
      , { label: 'RS', value: 'RS' }
      , { label: 'RR', value: 'RR' }
      , { label: 'SC', value: 'SC' }
      , { label: 'SE', value: 'SE' }
      , { label: 'SP', value: 'SP' }
      , { label: 'TO', value: 'TO' }
    ];


  }

  pesquisar() {
    // filtro
    this.barragensService.pesquisar(this.filtro).then(resultado => {
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
        this.pesquisar();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  limparFiltro() {
    this.filtro = new BarragemFiltro();
    this.pesquisar();
  }

  descricaoMetodo(codigo: number) {
    return this.metodosMap.get(codigo);
  }

}

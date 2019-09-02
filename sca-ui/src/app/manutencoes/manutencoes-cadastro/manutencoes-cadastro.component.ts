import { ToastrService } from 'ngx-toastr';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ManutencoesService } from './../manutencoes.service';
import { AtivosService } from './../../ativos/ativos.service';
import { Component, OnInit } from '@angular/core';
import { Manutencao } from 'src/app/core/model';
import { FormControl, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manutencoes-cadastro',
  templateUrl: './manutencoes-cadastro.component.html',
  styleUrls: ['./manutencoes-cadastro.component.css']
})
export class ManutencoesCadastroComponent implements OnInit {

  tipos: any;
  br: any;
  manutencao = new Manutencao();
  ativos = [];

  constructor(
    private ativosService: AtivosService,
    private manutencaoService: ManutencoesService,
    private errorHandlerService: ErrorHandlerService,
    private toastr: ToastrService,
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    const codigo = 'codigo';
    const codigoManutencao = this.activatedRoute.snapshot.params[codigo];

    if (codigoManutencao) {
      this.carregarManutencao(codigoManutencao);
      this.title.setTitle('Editar manutenção');
    } else {
      this.title.setTitle('Nova manutenção');
    }

    this.tipos = [
      { label: 'Corretiva', value: 'CORRETIVA' },
      { label: 'Preventiva', value: 'PREVENTIVA' },
    ];

    this.carregarAtivos();

    // TODO Criar um componente de data para centralizar essa configuração.
    // De acordo com a aula: 13.11. Desafio: criando mais componentes
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

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarManutencao(form);
    } else {
      this.adicionarManutencao(form);
    }
  }

  atualizarManutencao(form: NgForm){
    this.manutencaoService.atualizar(this.manutencao)
      .then(manutencao => {
        this.manutencao = manutencao;
        this.toastr.success('Registro alterado com sucesso!');
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  adicionarManutencao(form: NgForm) {
    this.manutencaoService.adicionar(this.manutencao)
      .then(() => {
        this.toastr.success('Registro salvo com sucesso.');
        form.reset();
        this.manutencao = new Manutencao();
      }).catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarAtivos() {
    this.ativosService.obterTodos().then(resultado => {
      this.ativos = resultado.ativos.map((a: { descricao: string; codigo: number; }) => ({ label: a.descricao, value: a.codigo }));
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  carregarManutencao(codigo: number) {
    this.manutencaoService.buscarPorCodigo(codigo)
      .then(manutencao => {
        this.manutencao = manutencao;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  novo(form: NgForm) {
    form.reset();

    setTimeout(function() {
      this.manutencao = new Manutencao();
    }.bind(this), 1);

    this.router.navigate(['/manutencoes/novo']);
  }

  get editando() {
    return Boolean(this.manutencao.codigo);
  }

}

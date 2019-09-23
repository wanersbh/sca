import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl, NgForm } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';

import { Inspecao } from './../../core/model';
import { InspecoesService } from '../inspecoes.service';
import { BarragensService } from './../../barragens/barragens.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-inspecoes-cadastro',
  templateUrl: './inspecoes-cadastro.component.html',
  styleUrls: ['./inspecoes-cadastro.component.css']
})
export class InspecoesCadastroComponent implements OnInit {

  barragens = [];
  inspecao = new Inspecao();
  br: any;
  niveis: any;

  constructor(
    private inspecoesService: InspecoesService,
    private barragensService: BarragensService,
    private toastr: ToastrService,
    private errorHandlerService: ErrorHandlerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {

    const codigo = 'codigo';
    const codigoInspecao = this.activatedRoute.snapshot.params[codigo];

    if (codigoInspecao) {
      this.carregarInspecao(codigoInspecao);
      this.title.setTitle('Editar inspeção');
    } else {
      this.title.setTitle('Nova inspeção');
    }

    this.carregarBarragens();

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

    this.niveis = [
      { label: 'Baixo', value: 1 },
      { label: 'Médio', value: 2 },
      { label: 'Alto', value: 3 }
    ];
  }

  carregarInspecao(codigo: number) {
    this.inspecoesService.buscarPorCodigo(codigo)
      .then(inspecao => {
        this.inspecao = inspecao;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarInspecao(form);
    } else {
      this.adicionarInspecao(form);
    }
  }

  adicionarInspecao(form: NgForm) {
    this.inspecoesService.adicionar(this.inspecao)
      .then(inspecaoAdicionada => {
        this.toastr.success('Registro salvo com sucesso.');

        this.router.navigate(['/inspecoes', inspecaoAdicionada.codigo]);


      }).catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizarInspecao(form: NgForm) {
    this.inspecoesService.atualizar(this.inspecao)
      .then(inspecao => {
        this.inspecao = inspecao;
        this.toastr.success('Registro alterado com sucesso!');
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  novo(form: NgForm) {
    form.reset();

    setTimeout(function () {
      this.inspecao = new Inspecao();
    }.bind(this), 1);

    this.router.navigate(['/inspecoes/novo']);
  }

  carregarBarragens() {
    this.barragensService.obterTodos().then(resultado => {
      this.barragens = resultado.map((a: { nome: string; codigo: number; }) => ({ label: a.nome, value: a.codigo }));
    }).catch(erro => this.errorHandlerService.handle(erro));
  }

  get editando() {
    return Boolean(this.inspecao.codigo);
  }

}

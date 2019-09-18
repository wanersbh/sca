import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Barragem } from 'src/app/core/model';
import { BarragensService } from './../barragens.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-barragens-cadastro',
  templateUrl: './barragens-cadastro.component.html',
  styleUrls: ['./barragens-cadastro.component.css']
})
export class BarragensCadastroComponent implements OnInit {

  constructor(
    private barragemService: BarragensService,
    private toastr: ToastrService,
    private errorHandlerService: ErrorHandlerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  barragem = new Barragem();
  metodos: any;


  ngOnInit() {

    const codigo = 'codigo';
    const codigoBarragem = this.activatedRoute.snapshot.params[codigo];

    if (codigoBarragem) {
      this.carregarBarragem(codigoBarragem);
      this.title.setTitle('Editar barragem');
    } else {
      this.title.setTitle('Novo barragem');
    }

    this.metodos = [
      { label: 'Selecione o método', value: null },
      { label: 'Montante', value: 0 },
      { label: 'Jusante', value: 1 },
      { label: 'Linha de Centro', value: 2 }
    ];

  }

  carregarBarragem(codigo: number) {
    this.barragemService.buscarPorCodigo(codigo)
      .then(barragem => {
        this.barragem = barragem;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarBarragem(form);
    } else {
      this.adicionarBarragem(form);
    }
  }

  adicionarBarragem(form: NgForm) {
    this.barragemService.adicionar(this.barragem)
      .then(barragemAdicionada => {
        this.toastr.success('Registro salvo com sucesso.');

        this.router.navigate(['/ativos', barragemAdicionada.codigo]);


      }).catch(erro => this.errorHandlerService.handle(erro));
  }

  atualizarBarragem(form: NgForm) {
    this.barragemService.atualizar(this.barragem)
      .then(barragem => {
        this.barragem = barragem;
        this.toastr.success('Registro alterado com sucesso!');
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  novo(form: NgForm) {
    form.reset();

    setTimeout(function () {
      this.barragem = new Barragem();
    }.bind(this), 1);

    this.router.navigate(['/barragem/novo']);
  }

  get editando() {
    return Boolean(this.barragem.codigo);
  }

}

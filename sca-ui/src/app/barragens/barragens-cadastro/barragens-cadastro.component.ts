import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Barragem } from 'src/app/core/model';
import { BarragensService } from './../barragens.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';


@Component({
  selector: 'app-barragens-cadastro',
  templateUrl: './barragens-cadastro.component.html',
  styleUrls: ['./barragens-cadastro.component.css']
})
export class BarragensCadastroComponent implements OnInit {

  options: any;

  overlays: any[];

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
  ufs: any;
  zoom: any;
  latLonUfs: any;


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
      { label: 'Montante', value: 0 },
      { label: 'Jusante', value: 1 },
      { label: 'Linha de Centro', value: 2 }
    ];

    this.latLonUfs = new Map([
      ['AC', { lat: -8.77, lon: -70.55 }]
      , ['AL', { lat: -9.71, lon: -35.73 }]
      , ['AM', { lat: -3.07, lon: -61.66 }]
      , ['AP', { lat: 1.41, lon: -51.77 }]
      , ['BA', { lat: -12.96, lon: -38.51 }]
      , ['CE', { lat: -3.71, lon: -38.54 }]
      , ['DF', { lat: -15.83, lon: -47.86 }]
      , ['ES', { lat: -19.19, lon: -40.34 }]
      , ['GO', { lat: -16.64, lon: -49.31 }]
      , ['MA', { lat: -2.55, lon: -44.30 }]
      , ['MT', { lat: -12.64, lon: -55.42 }]
      , ['MS', { lat: -20.51, lon: -54.54 }]
      , ['MG', { lat: -19.92661128, lon: -43.93611091 }]
      , ['PA', { lat: -5.53, lon: -52.29 }]
      , ['PB', { lat: -7.06, lon: -35.55 }]
      , ['PR', { lat: -24.89, lon: -51.55 }]
      , ['PE', { lat: -8.28, lon: -35.07 }]
      , ['PI', { lat: -8.28, lon: -43.68 }]
      , ['RJ', { lat: -22.84, lon: -43.15 }]
      , ['RN', { lat: -5.22, lon: -36.52 }]
      , ['RO', { lat: -11.22, lon: -62.80 }]
      , ['RS', { lat: -30.01, lon: -51.22 }]
      , ['RR', { lat: 1.89, lon: -61.22 }]
      , ['SC', { lat: -27.33, lon: -49.44 }]
      , ['SE', { lat: -10.90, lon: -37.07 }]
      , ['SP', { lat: -23.55, lon: -46.64 }]
      , ['TO', { lat: -10.25, lon: -48.25 }]
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

  coordenadas() {
    if (!this.barragem.codigo) {
      const coordenadas = this.retornarLatLng(this.barragem.uf);
      this.barragem.latitude = coordenadas.lat;
      this.barragem.longitude = coordenadas.lon;
      this.zoom = 8;
    } else {
      this.zoom = 12;
    }
  }

  onChoseLocation(event) {
    this.barragem.latitude = event.coords.lat;
    this.barragem.longitude = event.coords.lng;

    console.log(event);
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

        this.router.navigate(['/barragens', barragemAdicionada.codigo]);


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

    this.router.navigate(['/barragens/novo']);
  }

  get editando() {
    return Boolean(this.barragem.codigo);
  }

  get exibeMapa() {
    return Boolean(this.barragem.latitude && this.barragem.longitude);
  }

  retornarLatLng(uf: string) {
    return this.latLonUfs.get(uf);
  }

}

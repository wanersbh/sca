import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ativos-pesquisa',
  templateUrl: './ativos-pesquisa.component.html',
  styleUrls: ['./ativos-pesquisa.component.css']
})
export class AtivosPesquisaComponent {

  ativos = [
    {
      descricao: 'Perfuratrize', categoria: 'Perfuração e desmonte',
      anoFabricacao: 2017, dataAquisicao: '30/06/2017'
    },
    {
      descricao: 'Pá carregadeira', categoria: 'Carregamento',
      anoFabricacao: 2018, dataAquisicao: '26/04/2018'
    },
    {
      descricao: 'Correia transportadora', categoria: 'Transporte',
      anoFabricacao: 2017, dataAquisicao: '30/06/2019'
    },
    {
      descricao: 'Trem', categoria: 'Transporte',
      anoFabricacao: 2019, dataAquisicao: '30/06/2019'
    },
    {
      descricao: 'Carregadeira', categoria: 'Apoio',
      anoFabricacao: 2018, dataAquisicao: '30/06/2017'
    }
  ];
}

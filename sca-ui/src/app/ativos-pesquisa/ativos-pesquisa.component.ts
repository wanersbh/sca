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
      anoFabricacao: 2017, dataAquisicao: new Date(2017, 6, 30)
    },
    {
      descricao: 'Pá carregadeira', categoria: 'Carregamento',
      anoFabricacao: 2018, dataAquisicao: new Date(2018, 4, 26)
    },
    {
      descricao: 'Correia transportadora', categoria: 'Transporte',
      anoFabricacao: 2017, dataAquisicao: new Date(2019, 6, 30)
    },
    {
      descricao: 'Trem', categoria: 'Transporte',
      anoFabricacao: 2019, dataAquisicao: new Date(2019, 6, 30)
    },
    {
      descricao: 'Carregadeira', categoria: 'Apoio',
      anoFabricacao: 2018, dataAquisicao: '30/06/2017'
    }
  ];
}

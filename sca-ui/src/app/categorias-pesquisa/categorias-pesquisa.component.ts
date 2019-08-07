import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent {

  categorias = [
    {
      nome: 'Perfuração e desmonte'
    },
    {
      nome: 'Carregamento'
    },
    {
      nome: 'Transporte'
    },
    {
      nome: 'Apoio'
    }
  ];

}

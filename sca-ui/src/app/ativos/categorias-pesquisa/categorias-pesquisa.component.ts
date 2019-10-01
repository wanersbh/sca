import { CategoriasService } from '../categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {

  categorias = [ ];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.categoriasService.pesquisar().then(categorias => {
      this.categorias = categorias;
    } );
  }


}

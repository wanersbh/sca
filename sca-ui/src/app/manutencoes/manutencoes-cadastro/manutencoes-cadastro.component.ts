import { Component, OnInit } from '@angular/core';
import { Manutencao } from 'src/app/core/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manutencoes-cadastro',
  templateUrl: './manutencoes-cadastro.component.html',
  styleUrls: ['./manutencoes-cadastro.component.css']
})
export class ManutencoesCadastroComponent implements OnInit {

  tipos: any;
  br: any;
  manutencao = new Manutencao();

  constructor() { }

  ngOnInit() {
    this.tipos = [
      { label: 'Corretiva', value: 'CORRETIVA' },
      { label: 'Preventiva', value: 'PREVENTIVA' },
    ];

    // TODO Criar um componente de data para centralizar essa configuração.
    // De acordo com a aula: 13.11. Desafio: criando mais componentes
    this.br = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
      'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez' ],
      today: 'Hoje',
      clear: 'Limpar',
      dateFormat: 'dd/mm/y',
      weekHeader: 'Wk'
    };

  }

  salvar(form: FormControl) {
    console.log(JSON.stringify(this.manutencao));
  }

}

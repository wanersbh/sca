import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manutencoes-pesquisa',
  templateUrl: './manutencoes-pesquisa.component.html',
  styleUrls: ['./manutencoes-pesquisa.component.css']
})
export class ManutencoesPesquisaComponent  {

  // TODO Converter data string em new Date(2017,6,30) e depois configurar o PIPE no html
  // https://angular.io/api/common/DatePipe
  manutencoes = [
    {
      ativo: 'Perfuratrize', tipo: 'Corretiva',
      dataAgendada: '30/06/2017', dataRealizada: '30/06/2017', observacao: ''
    },
    {
      ativo: 'Perfuratrize', tipo: 'Corretiva',
      dataAgendada: '30/06/2017', dataRealizada: '30/06/2017', observacao: ''
    },
    {
      ativo: 'Perfuratrize', tipo: 'Corretiva',
      dataAgendada: '30/06/2017', dataRealizada: '30/06/2017', observacao: ''
    },
    {
      ativo: 'Perfuratrize', tipo: 'Corretiva',
      dataAgendada: '30/06/2017', dataRealizada: '30/06/2017', observacao: ''
    },
    {
      ativo: 'Perfuratrize', tipo: 'Corretiva',
      dataAgendada: '30/06/2017', dataRealizada: '30/06/2017', observacao: ''
    }
  ];

}

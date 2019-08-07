import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manutencoes-pesquisa',
  templateUrl: './manutencoes-pesquisa.component.html',
  styleUrls: ['./manutencoes-pesquisa.component.css']
})
export class ManutencoesPesquisaComponent  {

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

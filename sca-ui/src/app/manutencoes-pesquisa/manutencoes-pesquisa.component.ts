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
      dataAgendada: new Date(2017, 6, 30, 9, 0), dataRealizada: new Date(2017, 6, 30, 9, 0), observacao: ''
    },
    {
      ativo: 'Escavadeira para desmonte', tipo: 'Corretiva',
      dataAgendada: new Date(2018, 6, 26, 14, 15), dataRealizada: new Date(2018, 6, 26, 14, 15), observacao: 'Nenhuma'
    },
    {
      ativo: 'Escavadeira elétrica', tipo: 'Preventiva',
      dataAgendada: new Date(2019, 6, 26, 16, 25), dataRealizada: new Date(2019, 6, 27, 11, 22), observacao: ''
    },
    {
      ativo: 'Motoniveladora', tipo: 'Corretiva',
      dataAgendada: new Date(2019, 7, 30, 8, 15), dataRealizada: new Date(2019, 7, 30, 8, 15), observacao: 'Trocar oleo e filtro'
    },
    {
      ativo: 'Correia transportadora', tipo: 'Preventiva',
      dataAgendada: new Date(2019, 10, 8, 10, 25), dataRealizada: '', observacao: ''
    }
  ];

}

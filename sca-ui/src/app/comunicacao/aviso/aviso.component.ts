import { Aviso } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {

  ufs: any;
  aviso = new Aviso();
  barragens: any;

  constructor() { }

  ngOnInit() {

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

}

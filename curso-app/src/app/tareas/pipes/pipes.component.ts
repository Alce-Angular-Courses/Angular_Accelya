import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'acc-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PipesComponent implements OnInit {
  sNombre: string;
  nValor: number;
  nPrecio: number;
  nPerc: number;
  dFecha: Date;
  oDato: Object;
  sFrase: string;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe pérez';
    this.nValor = 30.876;
    this.nPrecio = 4.5;
    this.nPerc = 0.3476;
    this.dFecha = new Date();
    this.oDato = {nombre: 'Pepe',
                  apellidos: 'Perex'};
    this.sFrase = 'En un lugar de la Mancha de cuyo nombre ';
  }
}

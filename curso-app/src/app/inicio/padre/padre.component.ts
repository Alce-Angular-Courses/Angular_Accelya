import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acc-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  nombre: string;

  constructor() { }

  ngOnInit() {
  }

  resHijo(dato: string) {
    this.nombre = dato;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Printer, Departamento, OrdenPrint } from '../../models/maestros.model';
import { PRINTERS, DPTOS } from '../../models/maestros.data';

@Component({
  selector: 'acc-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  aImpresoras: Array<Printer>;
  aDeptos: Array<Departamento>;
  ordenPrint: OrdenPrint;
  @ViewChild('form1') formulario: any;

  constructor() { }

  ngOnInit() {
    this.aImpresoras = PRINTERS;
    this.aDeptos = DPTOS;
    this.ordenPrint = {
      usuario: {nombre: '', apellidos: '', telefono: ''},
      printer: {id: 0, nombre: ''},
      isColor: true,
      isClaro: true,
      dpto: {id: 0, nombre: ''}
    };
    console.log(this.formulario);
  }

  enviar() {
    console.log('Formulario enviado');
  }

  borrar() {
    this.formulario.reset();
  }
}

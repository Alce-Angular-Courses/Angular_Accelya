import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'acc-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  autor: string;
  lugar: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.autor = 'Alejandro Cerezo';
    this.lugar = 'Madrid';
    this.fecha = new Date();
  }

}

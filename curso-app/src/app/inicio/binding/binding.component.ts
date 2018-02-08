import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'acc-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BindingComponent implements OnInit {

  userName: string;
  nZ: number;

  constructor() { }

  ngOnInit() {
    this.userName = 'Pepe';
    this.nZ = 35;
  }

  btnBorrar (ev) {
    this.userName = '';
    console.log(ev);
  }
}

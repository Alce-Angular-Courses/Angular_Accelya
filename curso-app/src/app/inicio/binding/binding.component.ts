import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acc-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  userName: string;

  constructor() { }

  ngOnInit() {
    this.userName = 'Pepe';
  }

  btnBorrar (ev) {
    this.userName = '';
    console.log(ev);
  }
}

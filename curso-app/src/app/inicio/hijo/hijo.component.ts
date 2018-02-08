import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acc-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombre: string;
  @Output() evNombre: EventEmitter<string>;
  nombreFav: string;

  constructor() {
    this.evNombre = new EventEmitter();
  }

  ngOnInit() {
  }

  btnNoGusta() {
    this.evNombre.emit(this.nombreFav);
  }

}

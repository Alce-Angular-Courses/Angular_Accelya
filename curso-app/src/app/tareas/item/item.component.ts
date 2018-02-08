import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acc-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: string;
  @Output() evNewItem: EventEmitter<string>;

  constructor() {
    this.evNewItem = new EventEmitter();
   }

  ngOnInit() {
  }

  addItem() {
    this.evNewItem.emit(this.item);
    this.item = '';
  }
}

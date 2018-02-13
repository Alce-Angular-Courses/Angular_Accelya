import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'acc-item-rx',
  templateUrl: './item-rx.component.html',
  styleUrls: ['./item-rx.component.css']
})
export class ItemRxComponent implements OnInit {

  item: string;

  constructor(public store: StoreService) {

   }

  ngOnInit() {
  }

  addItem() {
    this.store.postTareas( this.item);
    this.item = '';
  }

}

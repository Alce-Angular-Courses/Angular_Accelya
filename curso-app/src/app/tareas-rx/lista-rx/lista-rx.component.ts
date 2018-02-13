import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'acc-lista-rx',
  templateUrl: './lista-rx.component.html',
  styleUrls: ['./lista-rx.component.css']
})
export class ListaRxComponent implements OnInit {

  aItems: Array<string>;
  aItems$: Observable<Array<string>>;

  constructor(public store: StoreService) { }

  ngOnInit() {
    this.aItems = [];
    this.aItems$ = this.store.getTareas();

    this.aItems$.subscribe(
      (data) => this.aItems = data
    );
  }

  borrar(i) {
    this.store.deleteTareas(i);
  }

}

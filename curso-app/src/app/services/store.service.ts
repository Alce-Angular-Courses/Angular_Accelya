import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StoreService {

  private aTareas: Array<string>;
  public aTareas$: Subject<Array<string>>;

  constructor() {
    this.aTareas = [];
    this.aTareas$ = new Subject();
  }

  update() {
    this.aTareas$.next(this.aTareas.slice(0));
  }

  subscribe() {
    return this.aTareas$.asObservable();
  }

  getTareas() {
    return this.aTareas$;
  }

  postTareas(tarea) {
    this.aTareas.push(tarea);
    console.log(this.aTareas);
    this.update();
  }

  deleteTareas(i) {
    this.aTareas.splice(i, 1);
    console.log(this.aTareas);
    this.update();
  }
}

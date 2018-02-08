import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acc-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  aTareas: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aTareas = new Array<string>();
    // this.aTareas = []
  }

  addTarea(tarea: string) {
    this.aTareas.push(tarea);
    console.log(this.aTareas);
  }

}

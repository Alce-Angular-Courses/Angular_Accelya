import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acc-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tarea: string;
  aTareas: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aTareas = new Array<string>();
    // this.aTareas = []
  }

  addTarea() {
    this.aTareas.push(this.tarea);
    console.log(this.aTareas);
    this.tarea = '';
  }

}

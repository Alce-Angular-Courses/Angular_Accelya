import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acc-libros',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Libros</h2>
      </div>
      <acc-libros-mock class="col-6"></acc-libros-mock>
      <acc-libros-google class="col-6"></acc-libros-google>
      <acc-libros-srv class="col-6"></acc-libros-srv>
    </div>
  </div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

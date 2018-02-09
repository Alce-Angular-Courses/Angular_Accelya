import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acc-formularios',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-12">
           <h4>Formularios</h4>
      </div>
      <acc-form-td class="col-12"></acc-form-td>
    </div>
  </div>
 
  `,
  styles: []
})
export class FormulariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

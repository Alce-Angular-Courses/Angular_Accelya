import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acc-inicio',
  template: `
    <div class="container main">
      <div class="row">
        <div class="col-12">
            <h2>inicio works!</h2>
        </div>
        <acc-binding class="col-6"></acc-binding>
      </div>
    </div>
  `,
  styles: [
    '.main {min-height : 15rem}'
  ]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

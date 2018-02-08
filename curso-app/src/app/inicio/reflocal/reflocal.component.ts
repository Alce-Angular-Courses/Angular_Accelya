import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'acc-reflocal',
  templateUrl: './reflocal.component.html',
  styleUrls: ['./reflocal.component.css']
})
export class ReflocalComponent implements OnInit {

  @ViewChild('usuario') refUser: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.refUser);
    this.refUser.nativeElement.value = `Pepe`;
  }
}


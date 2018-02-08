import { Directive, ElementRef, OnInit, Input, HostListener  } from '@angular/core';

@Directive({
  selector: '[accDestacar]'
})
export class DestacarDirective implements OnInit {

  @Input() accDestacar: string;

  constructor(public elem: ElementRef) {}

  ngOnInit() {
    console.log(this.elem);
    this.elem.nativeElement.innerHTML += ` <b>${this.accDestacar}</b>`;
    this.elem.nativeElement.style = 'background-color : red';
  }

  @HostListener ('click')
  cambiarColor() {
    this.elem.nativeElement.style = 'background-color : yellow';
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacarDirective } from './destacar.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DestacarDirective
  ],
  exports: [
    FormsModule,
    DestacarDirective
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacarDirective } from './destacar.directive';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './truncate.pipe';
import { TitularizePipe } from './titularize.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DestacarDirective,
    TruncatePipe,
    TitularizePipe
  ],
  exports: [
    FormsModule,
    DestacarDirective,
    TruncatePipe,
    TitularizePipe
  ]
})
export class SharedModule { }

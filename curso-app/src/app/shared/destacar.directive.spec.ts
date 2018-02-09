
import { DestacarDirective } from './destacar.directive';
import { ElementRef } from '@angular/core/src/linker/element_ref';

// const elem: ElementRef = new ElementRef();

describe('DestacarDirective', () => {

  it('should create an instance', () => {
    const directive = new DestacarDirective(elem);
    expect(directive).toBeTruthy();
  });
});

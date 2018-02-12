
import { DestacarDirective } from './destacar.directive';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<p id="test" destacar></p>`
})
class TestComponent {
}

describe('DestacarDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elem: DebugElement;

  beforeEach(() => {
    // tslint:disable-next-line:no-unused-expression
    TestBed.configureTestingModule({
      declarations: [TestComponent, DestacarDirective]
    }).compileComponents;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    elem = fixture.debugElement.query(By.css('#test'));
  });


  it('should create an instance', () => {
    const directive = new DestacarDirective(elem);
    expect(directive).toBeTruthy();
  });
});

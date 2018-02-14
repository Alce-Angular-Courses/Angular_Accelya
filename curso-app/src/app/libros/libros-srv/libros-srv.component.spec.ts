import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosSrvComponent } from './libros-srv.component';

describe('LibrosSrvComponent', () => {
  let component: LibrosSrvComponent;
  let fixture: ComponentFixture<LibrosSrvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosSrvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

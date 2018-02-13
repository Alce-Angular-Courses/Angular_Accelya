import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRxComponent } from './lista-rx.component';
import { StoreService } from '../../services/store.service';

describe('ListaRxComponent', () => {
  let component: ListaRxComponent;
  let fixture: ComponentFixture<ListaRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRxComponent ],
      providers: [StoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

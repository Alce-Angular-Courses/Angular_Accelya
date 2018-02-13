import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasRxComponent } from './tareas-rx.component';
import { ItemRxComponent } from '../item-rx/item-rx.component';
import { ListaRxComponent } from '../lista-rx/lista-rx.component';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../services/store.service';

describe('TareasRxComponent', () => {
  let component: TareasRxComponent;
  let fixture: ComponentFixture<TareasRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TareasRxComponent,
        ItemRxComponent,
        ListaRxComponent ],
      imports: [
          FormsModule
        ],
        providers: [StoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

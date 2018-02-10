import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';
import { BindingComponent } from './binding/binding.component';
import { ReflocalComponent } from './reflocal/reflocal.component';
import { PadreComponent } from './padre/padre.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InicioComponent,
        BindingComponent,
        ReflocalComponent,
        PadreComponent,
        HijoComponent
       ],
       imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

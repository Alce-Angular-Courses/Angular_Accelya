import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRxComponent } from './item-rx.component';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../services/store.service';

describe('ItemRxComponent', () => {
  let component: ItemRxComponent;
  let fixture: ComponentFixture<ItemRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRxComponent ],
      imports: [FormsModule],
      providers: [StoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

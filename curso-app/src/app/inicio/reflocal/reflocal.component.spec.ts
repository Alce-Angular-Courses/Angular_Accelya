import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflocalComponent } from './reflocal.component';

describe('ReflocalComponent', () => {
  let component: ReflocalComponent;
  let fixture: ComponentFixture<ReflocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

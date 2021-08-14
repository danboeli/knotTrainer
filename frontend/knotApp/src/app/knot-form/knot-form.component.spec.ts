import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnotFormComponent } from './knot-form.component';

describe('KnotFormComponent', () => {
  let component: KnotFormComponent;
  let fixture: ComponentFixture<KnotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnotFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

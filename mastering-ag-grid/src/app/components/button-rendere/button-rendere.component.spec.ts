import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRendereComponent } from './button-rendere.component';

describe('ButtonRendereComponent', () => {
  let component: ButtonRendereComponent;
  let fixture: ComponentFixture<ButtonRendereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRendereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRendereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

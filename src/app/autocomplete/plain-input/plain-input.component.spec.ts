import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainInputComponent } from './plain-input.component';

describe('PlainInputComponent', () => {
  let component: PlainInputComponent;
  let fixture: ComponentFixture<PlainInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlainInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

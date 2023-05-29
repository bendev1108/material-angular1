import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyComplexFlexComponent } from './table-sticky-complex-flex.component';

describe('TableStickyComplexFlexComponent', () => {
  let component: TableStickyComplexFlexComponent;
  let fixture: ComponentFixture<TableStickyComplexFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStickyComplexFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableStickyComplexFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnStylingComponent } from './table-column-styling.component';

describe('TableColumnStylingComponent', () => {
  let component: TableColumnStylingComponent;
  let fixture: ComponentFixture<TableColumnStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableColumnStylingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableColumnStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

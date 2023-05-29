import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDynamicArrayDataComponent } from './table-dynamic-array-data.component';

describe('TableDynamicArrayDataComponent', () => {
  let component: TableDynamicArrayDataComponent;
  let fixture: ComponentFixture<TableDynamicArrayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDynamicArrayDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDynamicArrayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

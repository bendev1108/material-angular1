import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFooterRowComponent } from './table-footer-row.component';

describe('TableFooterRowComponent', () => {
  let component: TableFooterRowComponent;
  let fixture: ComponentFixture<TableFooterRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFooterRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFooterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

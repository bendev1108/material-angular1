import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowContextComponent } from './table-row-context.component';

describe('TableRowContextComponent', () => {
  let component: TableRowContextComponent;
  let fixture: ComponentFixture<TableRowContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

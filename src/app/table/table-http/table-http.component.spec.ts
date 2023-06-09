import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHttpComponent } from './table-http.component';

describe('TableHttpComponent', () => {
  let component: TableHttpComponent;
  let fixture: ComponentFixture<TableHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

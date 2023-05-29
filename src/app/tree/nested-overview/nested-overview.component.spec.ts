import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedOverviewComponent } from './nested-overview.component';

describe('NestedOverviewComponent', () => {
  let component: NestedOverviewComponent;
  let fixture: ComponentFixture<NestedOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

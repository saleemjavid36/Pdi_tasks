import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerowSelectComponent } from './tablerow-select.component';

describe('TablerowSelectComponent', () => {
  let component: TablerowSelectComponent;
  let fixture: ComponentFixture<TablerowSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablerowSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablerowSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

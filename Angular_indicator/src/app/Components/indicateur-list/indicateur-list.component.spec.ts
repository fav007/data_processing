import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateurListComponent } from './indicateur-list.component';

describe('IndicateurListComponent', () => {
  let component: IndicateurListComponent;
  let fixture: ComponentFixture<IndicateurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicateurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicateurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

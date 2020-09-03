import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftDashboardComponent } from './gift-dashboard.component';

describe('GiftDashboardComponent', () => {
  let component: GiftDashboardComponent;
  let fixture: ComponentFixture<GiftDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

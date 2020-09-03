import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftUpcomingHolidaysComponent } from './gift-upcoming-holidays.component';

describe('GiftUpcomingHolidaysComponent', () => {
  let component: GiftUpcomingHolidaysComponent;
  let fixture: ComponentFixture<GiftUpcomingHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftUpcomingHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftUpcomingHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

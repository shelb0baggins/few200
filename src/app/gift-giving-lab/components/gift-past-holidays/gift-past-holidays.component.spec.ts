import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftPastHolidaysComponent } from './gift-past-holidays.component';

describe('GiftPastHolidaysComponent', () => {
  let component: GiftPastHolidaysComponent;
  let fixture: ComponentFixture<GiftPastHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftPastHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftPastHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

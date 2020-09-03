import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftNewRecipientComponent } from './gift-new-recipient.component';

describe('GiftNewRecipientComponent', () => {
  let component: GiftNewRecipientComponent;
  let fixture: ComponentFixture<GiftNewRecipientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftNewRecipientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftNewRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

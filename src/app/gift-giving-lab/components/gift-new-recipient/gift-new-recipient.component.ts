import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GiftState } from '../../reducers/list.reducer';
import * as actions from '../../actions/list.actions';

@Component({
  selector: 'app-gift-new-recipient',
  templateUrl: './gift-new-recipient.component.html',
  styleUrls: ['./gift-new-recipient.component.scss']
})
export class GiftNewRecipientComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<GiftState>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      recipient: ['', [Validators.required, Validators.minLength(1)]],
      date: ['', [Validators.required]],
      needsCard: ['', []],
      needsGift: ['', []],
      holidayType: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  get recipient(): AbstractControl {return this.form.get('recipient'); }
  get date(): AbstractControl {return this.form.get('date'); }
  get needsCard(): AbstractControl {return this.form.get('needsCard'); }
  get needsGift(): AbstractControl {return this.form.get('needsGift'); }
  get holidayType(): AbstractControl {return this.form.get('holidayType'); }

  submit(): void {
    this.store.dispatch(actions.addedGiftItem(this.form.value));
    this.form.reset();
  }

}

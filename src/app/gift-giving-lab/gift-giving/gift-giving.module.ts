import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { GiftGivingComponent } from './gift-giving.component';
import { GiftDashboardComponent } from '../components/gift-dashboard/gift-dashboard.component';
import { GiftNewRecipientComponent } from '../components/gift-new-recipient/gift-new-recipient.component';
import { GiftPastHolidaysComponent } from '../components/gift-past-holidays/gift-past-holidays.component';
import { GiftUpcomingHolidaysComponent } from '../components/gift-upcoming-holidays/gift-upcoming-holidays.component';
import { featureName, reducers } from '../reducers';


const routes: Routes = [
  {
    path: 'gift-giving',
    component: GiftGivingComponent,
    children: [
      {path: 'dashboard', component: GiftDashboardComponent},
      {path: 'new-recipient', component: GiftNewRecipientComponent},
      {path: 'past-holiday', component: GiftPastHolidaysComponent},
      {path: 'upcoming-holiday', component: GiftUpcomingHolidaysComponent}
    ]
  }
];

@NgModule({
  declarations: [GiftGivingComponent,GiftDashboardComponent,
    GiftUpcomingHolidaysComponent, GiftNewRecipientComponent, GiftPastHolidaysComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([]),
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, reducers),
    RouterModule.forChild(routes)
  ]
})
export class GiftGivingModule { }

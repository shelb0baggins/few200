import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './containers/todo/todo.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { TodoEntryComponent } from './components/todos/todo-entry/todo-entry.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { CommunicationsComponent } from './components/communications/communications.component';
import { LhsComponent } from './components/communications/lhs/lhs.component';
import { RhsComponent } from './components/communications/rhs/rhs.component';
import { CommService } from './services/communications.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoEntryComponent,
    DashboardComponent,
    NavComponent,
    CommunicationsComponent,
    LhsComponent,
    RhsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommService],
  bootstrap: [AppComponent]
})
export class AppModule { }

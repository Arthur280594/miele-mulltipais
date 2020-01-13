import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { MatDividerModule, MatCheckboxModule } from '@angular/material';



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatDividerModule,
    MatCheckboxModule
  ]
})
export class CalendarModule { }

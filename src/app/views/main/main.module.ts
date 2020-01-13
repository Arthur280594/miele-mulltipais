import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainRoutingModule } from './main-routing.module';

// materia
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

// ngModel directive
import { FormsModule } from '@angular/forms';


import { FilterPipeModule } from 'ngx-filter-pipe';
@NgModule({
  declarations: [MainComponent],
  imports: [
    MainRoutingModule,
    CommonModule,
    MatInputModule,
    MainRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    FilterPipeModule
  ]
})

export class MainModule { }

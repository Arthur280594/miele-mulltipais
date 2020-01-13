import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';

// ngModel directive
import { FormsModule } from '@angular/forms';

//material
import { MatSelectModule, MatPaginatorModule, MatDatepickerModule, MatInputModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    MatSelectModule, 
    MatTableModule,
    MatPaginatorModule,
    FilterPipeModule,
    MatDatepickerModule,
    MatInputModule,
    FilterPipeModule
  ]
})
export class ReportsModule { }

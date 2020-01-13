import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios.component';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { DialogLocationComponent } from 'src/app/dialogs/dialog-location/dialog-location.component';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatDatepickerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';



@NgModule({
  declarations: [ServiciosComponent , DialogLocationComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule, 
    MatTableModule,
    MatPaginatorModule,
    FilterPipeModule,
    MatDatepickerModule,
  ],
  entryComponents:[ DialogLocationComponent ]
})
export class ServiciosModule { }

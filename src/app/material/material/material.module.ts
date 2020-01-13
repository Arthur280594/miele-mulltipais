import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatSortModule, MatPaginatorModule, MatTableModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Datepicker
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [MatInputModule, BrowserAnimationsModule, MatGridListModule, 
            MatSortModule, MatPaginatorModule, MatTableModule, MatSelectModule, 
            MatButtonModule, MatDialogModule, MatDividerModule, ReactiveFormsModule,
            MatSnackBarModule, MatDatepickerModule, MatNativeDateModule],
            
  exports: [MatInputModule, BrowserAnimationsModule, MatGridListModule, 
            MatSortModule, MatPaginatorModule, MatTableModule, MatSelectModule, 
            MatButtonModule, MatDialogModule, MatDividerModule, ReactiveFormsModule,
            MatSnackBarModule, MatDatepickerModule, MatNativeDateModule],
})
export class MaterialModule { }

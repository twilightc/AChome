import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    // BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class ShareMaterialModule {}

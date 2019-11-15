import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-scaffold',
  templateUrl: './snackbar-scaffold.component.html',
  styleUrls: ['./snackbar-scaffold.component.scss']
})
export class SnackbarScaffoldComponent implements OnInit {
  snackBarData: any;
  constructor(
    private snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) private snackBarRawData: any
  ) {}

  ngOnInit() {
    this.snackBarData = this.snackBarRawData;
  }

  closeSnackBar() {
    this.snackBar.dismiss();
  }

  setTextColor() {
    return `${
      this.snackBarData.textColor ? this.snackBarData.textColor : '#000000'
    }`;
  }
}

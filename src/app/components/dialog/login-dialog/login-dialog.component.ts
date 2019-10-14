import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountModel } from 'src/app/Models/Models';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  account = new AccountModel();

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: AccountModel,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private router: Router,
    private loginservice: UserService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  login() {
    console.log(this.account);

    this.loginservice.Login(this.account).subscribe(response => {
      if (response.Success) {
        console.log('success');
        this.loginservice.isLoggedIn = true;
        localStorage.setItem('token', response.Data);
      }
      this.router.navigate(['/main']);
      this.dialogRef.close();
    });
  }
}

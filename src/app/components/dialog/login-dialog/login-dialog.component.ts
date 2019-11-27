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
    this.router.navigate(['/register']);
    this.dialogRef.close();
  }

  login() {
    // console.log(this.account);

    this.loginservice.Login(this.account).subscribe(response => {
      if (response.Success) {
        this.loginservice.isLoggedIn = true;

        console.log(!this.loginservice.userNameTrigger.value);
        localStorage.setItem('token', response.Data);
        this.loginservice.userNameTrigger.next(
          !this.loginservice.userNameTrigger.value
        );
      }
      console.log('login?');

      this.dialogRef.close();
    });
  }
}

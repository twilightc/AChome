import { Component, OnInit } from '@angular/core';
import { AccountModel, RegisterModel } from 'src/app/Models/Models';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/components/dialog/login-dialog/login-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Registration = new RegisterModel();
  LoginAccount = new AccountModel();

  constructor(
    private userservice: UserService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '350px',
      data: { loginaccount: this.LoginAccount }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.LoginAccount = result;
    });
  }

  register() {
    this.userservice.Register(this.Registration).subscribe(response => {
      if (response.Success) {
        this.userservice.isLoggedIn = true;
        localStorage.setItem('token', response.Data);
        this.router.navigate(['/main']);
      } else {
        console.log('register failed');
      }
    });
  }
}

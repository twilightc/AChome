import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  throttleTime,
  map,
  pairwise,
  distinctUntilChanged,
  share,
  filter
} from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../dialog/login-dialog/login-dialog.component';
import { AccountModel, TokenBody } from 'src/app/Models/Models';
import { UserService } from 'src/app/services/user.service';

export enum Direction {
  Up = 'Up',
  Down = 'Down'
}

export enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements AfterViewInit, OnInit {
  private isVisible = true;
  searchName = '';
  userAfterLogin: TokenBody;

  constructor(
    private router: Router,
    public loginservice: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loginservice.userNameTrigger.subscribe(response => {
      const temp = localStorage.getItem('token');
      if (temp) {
        const str = atob(temp.split('.')[1]);
        this.userAfterLogin = JSON.parse(str);
      }
    });
  }

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );
    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown$.subscribe(() => (this.isVisible = false));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed:');
    });
  }

  searchByHeader() {
    this.router.navigate(['main', { Keyword: this.searchName }]);
  }

  toRegister() {
    this.router.navigate(['/register']);
  }

  toEstablishOrder() {
    this.router.navigate(['/establish-order']);
  }

  Logout() {
    console.log('logout');
    this.loginservice.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/main']);
  }
}

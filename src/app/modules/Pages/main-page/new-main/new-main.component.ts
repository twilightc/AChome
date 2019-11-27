import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-main',
  templateUrl: './new-main.component.html',
  styleUrls: ['./new-main.component.scss']
})
export class NewMainComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('newmain');
  }
}

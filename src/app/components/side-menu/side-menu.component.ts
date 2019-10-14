import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  dummylist = [
    { name: '電腦及周邊產品', number: 1 },
    { name: '手機', number: 2 },
    { name: '家電及影音產品', number: 3 },
    { name: '相機、攝影機', number: 4 },
    { name: '生活用品', number: 4 }
  ];
  constructor() {}

  ngOnInit() {}
}

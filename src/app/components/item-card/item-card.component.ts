import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() merchandise: MerchandiseViewModel;
  // merchandise: MerchandiseViewModel;
  constructor(private router: Router) {}

  ngOnInit() {
    // this.merchandise = this.InputMerchandise;
    this.merchandise.ImagePath = `http://localhost:50390/img/${this.merchandise.ImagePath}`;
  }
}

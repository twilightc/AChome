import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() merchandise: MerchandiseViewModel;
  merchandiseInfo: MerchandiseViewModel;
  constructor(private router: Router) {}

  ngOnInit() {
    this.merchandiseInfo = this.merchandise;
    this.merchandiseInfo.ImagePath = `${environment.imgUrl}/${this.merchandise.ImagePath}`;
  }
}

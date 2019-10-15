import { Component, OnInit, Input } from '@angular/core';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';

@Component({
  selector: 'app-merchandise-region',
  templateUrl: './merchandise-region.component.html',
  styleUrls: ['./merchandise-region.component.scss']
})
export class MerchandiseRegionComponent implements OnInit {
  @Input() merchandiseList: MerchandiseViewModel[];

  constructor() {}

  ngOnInit() {}
}

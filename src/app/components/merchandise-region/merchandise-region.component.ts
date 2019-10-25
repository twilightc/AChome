import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MerchandiseWrapper } from 'src/app/models/CategoryListViewModel';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-merchandise-region',
  templateUrl: './merchandise-region.component.html',
  styleUrls: ['./merchandise-region.component.scss']
})
export class MerchandiseRegionComponent implements OnInit {
  @Input() merchandiseWrapper: MerchandiseWrapper;
  @Input() currentPageIndex: number;
  @Output() pageEvent = new EventEmitter<PageEvent>();

  constructor() {}

  ngOnInit() {}

  pageChange(event: PageEvent) {
    this.pageEvent.emit(event);
  }
}

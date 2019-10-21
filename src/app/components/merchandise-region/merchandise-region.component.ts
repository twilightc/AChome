import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-merchandise-region',
  templateUrl: './merchandise-region.component.html',
  styleUrls: ['./merchandise-region.component.scss']
})
export class MerchandiseRegionComponent implements OnInit {
  @Input() merchandiseList: MerchandiseViewModel[];
  @Output() pageEvent = new EventEmitter<PageEvent>();

  constructor() {}

  ngOnInit() {}

  pageChange(event: PageEvent) {
    this.pageEvent.emit(event);
  }
}

import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() length: number;
  @Input() currentPageIndex: number;
  @Output() pageEvent = new EventEmitter<PageEvent>();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10];

  constructor() {}

  ngOnInit() {}

  pageChange(pageEvent: PageEvent) {
    this.pageEvent.emit(pageEvent);
  }
}

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
  length = 16;
  pageSize = 10;
  @Output() pageEvent = new EventEmitter<PageEvent>();
  pageSizeOptions: number[] = [5, 10];

  constructor() {}

  ngOnInit() {}

  pageChange(pageEvent: PageEvent) {
    this.pageEvent.emit(pageEvent);
  }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  // }
}

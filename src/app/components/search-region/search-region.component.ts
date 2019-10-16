import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-search-region',
  templateUrl: './search-region.component.html',
  styleUrls: ['./search-region.component.scss']
})
export class SearchRegionComponent implements OnInit {
  @Output() search = new EventEmitter();
  searchName = '';

  constructor() {}

  ngOnInit() {}
}

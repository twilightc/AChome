import {
  Component,
  QueryList,
  AfterContentInit,
  ContentChildren
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  selectedTab: TabComponent;

  constructor() {}

  ngAfterContentInit() {
    this.select(this.tabs.first);
  }

  onSelect(tab) {
    this.select(tab);
  }

  select(tab) {
    this.tabs.forEach(item => {
      item.show = false;
    });

    this.selectedTab = tab;
    this.selectedTab.show = true;
  }
}

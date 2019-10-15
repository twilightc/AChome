import { Component, OnInit } from '@angular/core';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  merchandiseList = new MerchandiseViewModel();
  constructor(private merchandiseservice: MerchandiseService) {}

  ngOnInit() {
    this.merchandiseservice.GetMerchandiseList().subscribe(response => {
      this.merchandiseList = response.Data;
    });
  }
}

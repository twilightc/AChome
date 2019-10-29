import { Component, OnInit } from '@angular/core';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MerchandiseService } from 'src/app/services/merchandise.service';

@Component({
  selector: 'app-merchandise-detail',
  templateUrl: './merchandise-detail.component.html',
  styleUrls: ['./merchandise-detail.component.scss']
})
export class MerchandiseDetailComponent implements OnInit {
  merchandise: MerchandiseViewModel;
  purchasingQty = 0;
  constructor(
    private activateroute: ActivatedRoute,
    private merchandiseservice: MerchandiseService
  ) {}

  ngOnInit() {
    this.activateroute.paramMap
      .pipe(switchMap(params => of([params.get('ItemId')])))
      .subscribe(data => {
        this.merchandiseservice.GetMerchandise(data[0]).subscribe(response => {
          console.log(response.Data);
          this.merchandise = response.Data;
          this.merchandise.ImagePath = `http://localhost:50390/img/${this.merchandise.ImagePath}`;
        });
      });
  }
}

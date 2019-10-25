import { Component, OnInit } from '@angular/core';
import { MerchandiseViewModel } from 'src/app/models/CategoryListViewModel';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-merchandise-detail',
  templateUrl: './merchandise-detail.component.html',
  styleUrls: ['./merchandise-detail.component.scss']
})
export class MerchandiseDetailComponent implements OnInit {
  merchandise: MerchandiseViewModel;
  constructor(private activateroute: ActivatedRoute) {}

  ngOnInit() {
    this.activateroute.paramMap
      .pipe(switchMap(params => of([params.get('Cid')])))
      .subscribe(data => {
        this.merchandise.MerchandiseId = data[0];
      });
  }
}

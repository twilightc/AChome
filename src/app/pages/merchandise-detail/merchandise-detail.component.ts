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
  specOrder = ['', ''];
  disableSpec = new Array<string[]>();
  CanCheckOuted = false;

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
          console.log(this.merchandise.MerchandiseSpec);

          this.merchandise.MerchandiseSpec.forEach(specData => {
            if (!specData.Enable) {
              this.disableSpec.push([specData.Spec1, specData.Spec2]);
            }
          });
        });
      });
  }

  checkSpec() {
    console.log(this.specOrder);
    console.log(this.disableSpec);

    if (this.specOrder[0] !== '' && this.specOrder[1] !== '') {
      this.disableSpec.map(data => {
        if (
          data[0].includes(this.specOrder[0]) &&
          data[1].includes(this.specOrder[1])
        ) {
          console.log('disable spec');
          this.CanCheckOuted = true;
        } else {
          this.CanCheckOuted = false;
        }
      });
    }
  }

  setVal() {
    const regex = /(^[0-9]*[1-9][0-9]*$)/;
    const result = regex.test(this.purchasingQty.toString());

    !result
      ? (this.purchasingQty = 0)
      : (this.purchasingQty =
          this.purchasingQty >= this.merchandise.RemainingQty
            ? this.merchandise.RemainingQty
            : this.purchasingQty);
  }

  addToShoppingCart() {}
}

import { Component, OnInit } from '@angular/core';
import {
  MerchandiseViewModel,
  ShoppingCart
} from 'src/app/models/CategoryListViewModel';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarScaffoldComponent } from 'src/app/components/snackbar/snackbar-scaffold/snackbar-scaffold.component';

@Component({
  selector: 'app-merchandise-detail',
  templateUrl: './merchandise-detail.component.html',
  styleUrls: ['./merchandise-detail.component.scss']
})
export class MerchandiseDetailComponent implements OnInit {
  merchandise: MerchandiseViewModel;
  purchasingQty = 0;
  specOrder = ['', '']; // size , color
  disableSpec = new Array<string[]>();
  CanCheckOuted = false;
  durationInSeconds = 3;

  constructor(
    private activateroute: ActivatedRoute,
    private merchandiseservice: MerchandiseService,
    private userservice: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.activateroute.paramMap
      .pipe(switchMap(params => of([params.get('ItemId')])))
      .subscribe(data => {
        this.merchandiseservice.GetMerchandise(data[0]).subscribe(response => {
          this.merchandise = response.Data;
          this.merchandise.ImagePath = `http://localhost:50390/img/${this.merchandise.ImagePath}`;

          this.merchandise.MerchandiseSpec.forEach(specData => {
            if (!specData.Enable) {
              this.disableSpec.push([specData.Spec1, specData.Spec2]);
            }
          });
        });
      });
  }

  checkSpec() {
    if (this.specOrder[0] !== '' && this.specOrder[1] !== '') {
      this.disableSpec.map(data => {
        if (
          data[0].includes(this.specOrder[0]) &&
          data[1].includes(this.specOrder[1])
        ) {
          // console.log('disable spec');
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

  addToShoppingCart() {
    if (localStorage.getItem('token')) {
      let specId;
      this.merchandise.MerchandiseSpec.forEach(data => {
        if (
          data.Spec1 === this.specOrder[0] &&
          data.Spec2 === this.specOrder[1]
        ) {
          specId = data.SpecId;
        }
      });
      console.log('purchasingQty', this.purchasingQty);

      const shoppingCart: ShoppingCart = {
        Account: null,
        ProdId: this.merchandise.MerchandiseId,
        SpecId: specId,
        PurchaseQty: this.purchasingQty
      };
      this.merchandiseservice
        .AddToShoppingCart(shoppingCart)
        .subscribe(response => {
          if (response.Success) {
            this.snackBar.openFromComponent(SnackbarScaffoldComponent, {
              duration: this.durationInSeconds * 1000,
              verticalPosition: 'top',
              data: {
                text: '商品已加入購物車',
                textColor: '#ff8c00'
              }
            });
          }
        });
    } else {
      console.log('請先登入');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { EstablishOrderService } from 'src/app/services/established-order.service';
import { EstablishOrderViewModel } from 'src/app/models/EstablishedOrder';

@Component({
  selector: 'app-established-order-page',
  templateUrl: './established-order-page.component.html',
  styleUrls: ['./established-order-page.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class EstablishedOrderPageComponent implements OnInit {
  dataSource: EstablishOrderViewModel[];
  columnsToDisplay = [
    'OrderingTime',
    'SellerAccount',
    'AdditionalFee',
    'TotalPrice'
  ];
  columnsToDisplayTW = ['購買時間', '賣家', '運費', '總價格'];
  innerColumn = ['ProdName', 'Spec1', 'Spec2', 'Price', 'Qty', 'MinorTotal'];
  expandedElement: EstablishOrderViewModel;
  headerList: Map<string, string>;
  constructor(private establishedorderservice: EstablishOrderService) {}

  ngOnInit() {
    this.establishedorderservice.GetEstablishOrderList().subscribe(response => {
      this.dataSource = response.Data;
    });
  }

  getName(i) {
    console.log(this.columnsToDisplayTW[i]);

    return this.columnsToDisplayTW[i];
  }
}

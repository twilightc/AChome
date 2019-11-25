export class EstablishOrderViewModel {
  OrderGuid: string;
  OriginPrice: number;
  AdditionalFee: number;
  TotalPrice: number;
  OrderingTime: Date;
  TransportName: string;
  ReceiverName: string;
  ReceiverAddress: string;
  ReceiverPhone: string;
  SellerAccount: string;
  SellerName: string;
  OrderDetails: EstablishOrderDetail[];
}

export class EstablishOrderDetail {
  Seq: number;
  ProdId: string;
  ProdName: string;
  Spec1: string;
  Spec2: string;
  Price: number;
  Qty: number;
  MinorTotal: number;
}

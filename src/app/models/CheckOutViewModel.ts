import { ShoppingCartViewModel } from './ShoppingCartModel';

export class AreaZip {
  Area: string;
  Zip: string;
}

export class TransportMethodViewModel {
  TransportId: number;
  TransportName: string;
  Fee: number;
}

export class SevenElevenShopViewModel {
  Zip = '';
  ShopNumber = '';
  ShopName = '';
  Address = '';
}

export class CheckOutOrder {
  Merchandises: ShoppingCartViewModel[];
  Recipient = '';
  TransportId: number;
  ReceiveShop = new SevenElevenShopViewModel();
  ReceiverAddress = '';
  ReceiverPhone = '';
}

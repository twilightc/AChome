import { ShoppingCartViewModel } from './ShoppingCartModel';
import { PendedShoppingCartItemModel } from './RemoveShoppingCartItemModel';

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
  Merchandises: PendedShoppingCartItemModel[];
  Recipient = '';
  TransportId = 0;
  ReceiveShop = new SevenElevenShopViewModel();
  ReceiverAddress = '';
  ReceiverPhone = '';
}

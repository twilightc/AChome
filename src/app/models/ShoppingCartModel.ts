export class ShoppingCart {
  Account: string;
  ProdId: string;
  SpecId: number;
  PurchaseQty: number;
  AddTime?: Date;
}

export class ShoppingCartWrapper {
  SellerAccount: string;
  ShoppingCartViewModels: ShoppingCartViewModel[];
}

export class ShoppingCartViewModel {
  MerchandiseTitle: string;
  OwnerAccount: string;
  MerchandiseId: string;
  SpecId: number;
  Price?: number;
  Spec1: string;
  Spec2: string;
  PurchaseQty: number;
}

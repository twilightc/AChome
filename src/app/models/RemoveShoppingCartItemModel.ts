export class RemoveShoppingCartWrapper {
  Account: string;
  RemoveShoppingCartItemModel: PendedShoppingCartItemModel[];
}

export class PendedShoppingCartItemModel {
  Account: string;
  ProdId: string;
  SpecId: number;
}

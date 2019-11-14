export class RemoveShoppingCartWrapper {
  Account: string;
  RemoveShoppingCartItemModel: RemoveShoppingCartItemModel[];
}

export class RemoveShoppingCartItemModel {
  Account: string;
  ProdId: string;
  SpecId: number;
}

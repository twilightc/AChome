export class CategoryListViewModel {
  Cid: string;
  Cname: string;
  GroupSeq: number;
  Detail: CategoryListDetailViewModel[];
}

export class CategoryListDetailViewModel {
  DetailId: string;
  DetailName: string;
  Seq: number;
}

export class MerchandiseWrapper {
  MerchandiseViewModel: MerchandiseViewModel[];
  MerchandiseAmount: number;
}

export class MerchandiseViewModel {
  MerchandiseId: string;
  OwnerAccount: string;
  MerchandiseTitle: string;
  MerhandiseContent: string;
  SoldQty: number;
  RemainingQty: number;
  CategoryId: string;
  CategoryDetailId: string;
  ImagePath: string;
  Price: number;
  EnableSpec: boolean;
  MerchandiseSpec: MerchandiseSpecViewModel[];
  MerchandiseQa: MerchandiseQaViewModel[];
  Spec1: string[];
  Spec2: string[];
}

export class MerchandiseSpecViewModel {
  SpecId: number;
  Price: number;
  SoldQty: number;
  RemainingQty: number;
  Spec1: string;
  Spec2: string;
  Enable: boolean;
}

export class MerchandiseQaViewModel {
  Seq: number;
  QuestionAccount: string;
  Question: string;
  AskingTime: Date;
  Answer: string;
  AnswerTime: Date;
}

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

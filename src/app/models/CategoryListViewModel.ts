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
}

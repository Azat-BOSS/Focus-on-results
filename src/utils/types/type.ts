export type TClothe = {
  brand: number;
  id: number;
  image: string;
  regular_price: {
    currency: string;
    value: number;
  };
  sku: string;
  title: string;
  type: string;
  quan?: number;
  text?: string;
}

export type TBrand = {
  id: number;
  value: string;
  label: string;
}

export type TDataState = {
  brands: TBrand[] | [];
  clothesPag: TClothe[] | [];
}

export type TCartState = {
  clothes: TClothe[] | any;
  clothesCart: TClothe[] | [];
  clothesId: number | null;
  totalCost: number;
}

export type TModalState = {
  isOpen: boolean;
  isOpenSec: boolean;
}

export type TFiltrationSlice = {
  brandValue: string;
  clothes: TClothe[] | [];
  clothesTotal: TClothe[] | [];
  pagValue: string | number;
}
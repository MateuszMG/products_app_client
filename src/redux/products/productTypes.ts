export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  productionDate: string;
}

export interface ProductState {
  products: Product[];
  selectedProduct?: Product;
  loading: boolean;
}

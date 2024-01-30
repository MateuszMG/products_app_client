interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  productionDate: string;
}

interface ProductState {
  products: Product[];
  selectedProduct?: Product;
  loading: boolean;
}

type Category = string;

interface CategoryState {
  categories: Category[];
  categoryOptions: Option[];
  loading: boolean;
}

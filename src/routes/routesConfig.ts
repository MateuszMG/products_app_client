import { AddProduct } from '../pages/AddProduct/AddProduct';
import { Products } from '../pages/Products/Products';

import { paths } from './paths';

export const routesConfig = [
  {
    component: Products,
    path: paths.products,
  },
  {
    component: AddProduct,
    path: paths.addProduct,
  },
];

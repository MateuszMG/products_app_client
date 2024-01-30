import { AddProduct } from '../pages/AddProduct/AddProduct';
import { EditProduct } from '../pages/EditProduct/EditProduct';
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
  {
    component: EditProduct,
    path: paths.editProduct(':id'),
  },
];

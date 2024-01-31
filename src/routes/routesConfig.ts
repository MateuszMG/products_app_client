import { lazy } from 'react';

import { Products } from '../pages/Products/Products';

import { paths } from './paths';

const AddProduct = lazy(() =>
  import('../pages/AddProduct/AddProduct').then(({ AddProduct }) => ({
    default: AddProduct,
  })),
);

const EditProduct = lazy(() =>
  import('../pages/EditProduct/EditProduct').then(({ EditProduct }) => ({
    default: EditProduct,
  })),
);

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

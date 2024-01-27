import { AddProduct } from '../pages/AddProduct/AddProduct';
import { Home } from '../pages/Home/Home';

import { paths } from './paths';

export const routesConfig = [
  {
    component: Home,
    path: paths.products,
  },
  {
    component: AddProduct,
    path: paths.addProduct,
  },
];

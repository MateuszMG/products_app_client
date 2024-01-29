import { useEffect } from 'react';

import { getProductsAsync } from '../../redux/products/productActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const useProducts = () => {
  const { loading, products } = useAppSelector().products;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products.length) return;
    dispatch(getProductsAsync());
  }, []);

  return { loading, products };
};

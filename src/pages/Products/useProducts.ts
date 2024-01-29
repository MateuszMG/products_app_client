import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useModal } from '../../hooks/useModal';

import { paths } from '../../routes/paths';

import { getProductsAsync } from '../../redux/products/productActions';
import { Product } from '../../redux/products/productTypes';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const useProducts = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const productModal = useModal();
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const { loading, products } = useAppSelector().products;

  const redirectToAddProductPage = () => {
    navigate(paths.addProduct);
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    productModal.handleOpen();
  };

  useEffect(() => {
    if (products.length) return;
    dispatch(getProductsAsync());
  }, []);

  return {
    handleOpenProduct,
    loading,
    productModal,
    products,
    redirectToAddProductPage,
    selectedProduct,
  };
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { axiosInstance } from '../../utils/baseAxios';
import { errorToast } from '../../utils/toast/errorToast';

import { AddProductSchema } from '../../pages/AddProduct/useAddProduct';

import { Product } from './productTypes';

export const getProductsAsync = createAsyncThunk<Product[]>(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/api/products`);

      return res.data.products;
    } catch (error) {
      errorToast(error);
      rejectWithValue(error);
    }
  },
);

export const addProductAsync = createAsyncThunk<Product, AddProductSchema>(
  'products/addProduct',
  async (product: AddProductSchema, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`/api/products`, product);

      toast.success('Product added successfully');
      return res.data.newProduct;
    } catch (error) {
      errorToast(error);
      rejectWithValue(error);
    }
  },
);

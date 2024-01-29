import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils/baseAxios';
import { errorToast } from '../../utils/toast/errorToast';

import { AddProductSchema } from '../../pages/AddProduct/useAddProduct';

import { Product } from './productTypes';

export const addProductAsync = createAsyncThunk<Product, AddProductSchema>(
  'products/addProduct',
  async (product: AddProductSchema, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`/api/products`, product);

      return res.data.newProduct;
    } catch (error) {
      console.log('error', error);

      errorToast(error);
      rejectWithValue(error);
    }
  },
);

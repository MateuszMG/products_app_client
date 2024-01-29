import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils/baseAxios';
import { errorToast } from '../../utils/toast/errorToast';

import { Category } from './categoryTypes';

export const getCategoriesAsync = createAsyncThunk<Category[]>(
  'products/addProduct',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/api/categories`);

      return res.data.categories;
    } catch (error) {
      errorToast(error);
      rejectWithValue(error);
    }
  },
);

import { createSlice } from '@reduxjs/toolkit';

import { addProductAsync } from './productActions';
import { ProductState } from './productTypes';

const initialState: ProductState = {
  products: [],
  loading: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addProductAsync.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.loading = false;
    });
    builder.addCase(addProductAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

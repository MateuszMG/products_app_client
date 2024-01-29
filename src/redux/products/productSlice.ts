import { createSlice } from '@reduxjs/toolkit';

import { addProductAsync, getProductsAsync } from './productActions';
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
    builder.addCase(getProductsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getProductsAsync.rejected, (state) => {
      state.loading = false;
    });

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

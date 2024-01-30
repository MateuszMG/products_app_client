import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  addProductAsync,
  editProductAsync,
  getProductAsync,
  getProductsAsync,
} from './productActions';
import { Product, ProductState } from './productTypes';

const initialState: ProductState = {
  products: [],
  selectedProduct: undefined,
  loading: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (
      state: ProductState,
      action: PayloadAction<Product>,
    ) => {
      state.selectedProduct = action.payload;
    },
  },
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

    builder.addCase(getProductAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductAsync.fulfilled, (state, action) => {
      state.selectedProduct = action.payload;
      state.loading = false;
    });
    builder.addCase(getProductAsync.rejected, (state) => {
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

    builder.addCase(editProductAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editProductAsync.fulfilled, (state, action) => {
      state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product,
      );
      state.loading = false;
    });
    builder.addCase(editProductAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setSelectedProduct } = productSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

import { getCategoriesAsync } from './categoryActions';
import { CategoryState } from './categoryTypes';

const initialState: CategoryState = {
  categories: [],
  loading: false,
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(getCategoriesAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

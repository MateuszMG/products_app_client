import { useFormik } from 'formik';
import { useEffect, useMemo } from 'react';
import * as Yup from 'yup';

import { Option } from '../../components/global/inputs/SelectInput/SelectInput';

import { getCategoriesAsync } from '../../redux/categories/categoryActions';
import { addProductAsync } from '../../redux/products/productActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const initialValues = {
  name: '',
  price: 0,
  quantity: 0,
  category: '',
  productionDate: '',
};

export const useAddProduct = () => {
  const dispatch = useAppDispatch();
  const { loading: addProductsLoading } = useAppSelector().products;
  const { categories, loading: getCategoriesLoading } =
    useAppSelector().categories;

  const formik = useFormik({
    initialValues,
    validationSchema: addProductSchema,
    onReset: () => initialValues,
    onSubmit: (values) => dispatch(addProductAsync(values)),
  });

  const categoryOptions: Option[] = useMemo(
    () =>
      ['', ...categories].map((category) => ({
        label: category,
        value: category,
      })),
    [categories.length],
  );

  const handleCategoryChange = (optionValue: Option['value']) => {
    formik.setFieldValue('category', optionValue);
  };

  const showError = (key: keyof typeof formik.values) =>
    formik.touched[key] && formik.errors[key] ? formik.errors[key] : '';

  const createInputProps = (
    name: keyof typeof formik.values,
    type = 'text',
  ) => ({
    error: showError(name),
    name,
    onBlur: formik.handleBlur,
    onChange: formik.handleChange,
    type,
    value: formik.values[name],
  });

  const isError = !!Object.keys(formik.errors).length;
  const isLoading = addProductsLoading || getCategoriesLoading;

  useEffect(() => {
    if (categories.length) return;
    dispatch(getCategoriesAsync());
  }, [categories.length]);

  return {
    categoryOptions,
    createInputProps,
    formik,
    handleCategoryChange,
    isError,
    isLoading,
  };
};

const addProductSchema = Yup.object({
  name: Yup.string()
    .required('Product name is required')
    .max(100, 'Product name must be at most 100 characters')
    .label('Product name'),

  price: Yup.number()
    .required('Price is required')
    .min(1, 'Price must be at least 1')
    .max(1_000_000, 'Price must be at most 1,000,000')
    .label('Price'),

  quantity: Yup.number()
    .required('Quantity is required')
    .min(1, 'Quantity must be at least 1')
    .max(1_000_000, 'Quantity must be at most 1,000,000')
    .integer('Quantity must be an integer')
    .label('Quantity'),

  category: Yup.string()
    .required('Category is required')
    .max(100, 'Category must be at most 100 characters')
    .label('Category'),

  productionDate: Yup.string()
    .required('Production date is required')
    .label('Production date'),
});

export type AddProductSchema = Yup.InferType<typeof addProductSchema>;

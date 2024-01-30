import { useFormik } from 'formik';
import { useEffect } from 'react';

import { Option } from '../../components/global/inputs/SelectInput/SelectInput';

import {
  AddProductSchema,
  addProductSchema,
} from '../../utils/validations/productValidation';

import { getCategoriesAsync } from '../../redux/categories/categoryActions';
import { addProductAsync } from '../../redux/products/productActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const initialValues: AddProductSchema = {
  name: '',
  price: 0,
  quantity: 0,
  category: '',
  productionDate: '',
};

export const useAddProduct = () => {
  const dispatch = useAppDispatch();
  const { loading: addProductsLoading } = useAppSelector().products;
  const { categoryOptions, loading: getCategoriesLoading } =
    useAppSelector().categories;

  const formik = useFormik({
    initialValues,
    validationSchema: addProductSchema,
    onReset: () => initialValues,
    onSubmit: (values) => {
      dispatch(addProductAsync(values)).then(() => {
        formik.resetForm();
      });
    },
  });

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
    !categoryOptions.length && dispatch(getCategoriesAsync());
  }, []);

  return {
    categoryOptions,
    createInputProps,
    formik,
    handleCategoryChange,
    isError,
    isLoading,
  };
};

import { useFormik } from 'formik';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Option } from '../../components/global/inputs/SelectInput/SelectInput';

import { editProductSchema } from '../../utils/validations/productValidation';

import { paths } from '../../routes/paths';

import { getCategoriesAsync } from '../../redux/categories/categoryActions';
import {
  editProductAsync,
  getProductAsync,
} from '../../redux/products/productActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

interface Params {
  id: string;
}

const initialValues = {
  id: '',
  name: '',
  price: 0,
  quantity: 0,
  category: '',
  productionDate: '',
};

export const useEditProduct = () => {
  const params = useParams() as unknown as Params;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading: editProductsLoading, selectedProduct } =
    useAppSelector().products;
  const { categories, loading: getCategoriesLoading } =
    useAppSelector().categories;

  const formik = useFormik({
    initialValues,
    validationSchema: editProductSchema,
    onReset: () => ({ ...initialValues, id: params.id }),
    onSubmit: (values) => {
      dispatch(editProductAsync(values)).then(() => {
        formik.resetForm();
      });
    },
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
  const isLoading = editProductsLoading || getCategoriesLoading;

  useEffect(() => {
    !categories.length && dispatch(getCategoriesAsync());
  }, [categories.length]);

  useEffect(() => {
    selectedProduct
      ? formik.resetForm({ values: selectedProduct })
      : dispatch(getProductAsync(params.id));
  }, []);

  useEffect(() => {
    !isLoading && !selectedProduct && navigate(paths.products);
  }, [isLoading, selectedProduct]);

  return {
    categoryOptions,
    createInputProps,
    formik,
    handleCategoryChange,
    isError,
    isLoading,
  };
};

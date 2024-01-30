import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Option } from '../../components/global/inputs/SelectInput/SelectInput';

import { editProductSchema } from '../../utils/validations/productValidation';

import { paths } from '../../routes/paths';

import { getCategoriesAsync } from '../../redux/categories/categoryActions';
import {
  editProductAsync,
  getProductAsync,
} from '../../redux/products/productActions';
import { Product } from '../../redux/products/productTypes';
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

  const { loading: productsLoading, selectedProduct } =
    useAppSelector().products;
  const { categoryOptions, loading: categoriesLoading } =
    useAppSelector().categories;

  const formik = useFormik({
    initialValues,
    validationSchema: editProductSchema,
    onReset: () => ({ ...initialValues, id: params.id }),
    onSubmit: (values) => {
      dispatch(editProductAsync(values)).then(() => {
        navigate(paths.products);
      });
    },
  });

  const handleCategoryChange = (optionValue: Option['value']) => {
    formik.setFieldValue('category', optionValue);
  };

  const showError = (key: keyof typeof initialValues) =>
    formik.touched[key] && formik.errors[key] ? formik.errors[key] : '';

  const createInputProps = (
    name: keyof typeof initialValues,
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
  const isLoading = productsLoading || categoriesLoading;

  useEffect(() => {
    !categoryOptions.length && dispatch(getCategoriesAsync());
  }, []);

  useEffect(() => {
    selectedProduct
      ? formik.resetForm({ values: selectedProduct })
      : dispatch(getProductAsync(params.id)).then((reduxRes) =>
          !reduxRes.payload
            ? navigate(paths.products)
            : formik.resetForm({
                values: reduxRes.payload as Product,
              }),
        );
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

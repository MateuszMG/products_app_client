import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Option } from '../../components/global/inputs/SelectInput/SelectInput';

const mockedCategories = ['smartphones', 'laptops', 'displays'];
const initialValues = {
  name: '',
  price: '',
  quantity: '',
  category: '',
  productionDate: '',
};

export const useAddProduct = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: addProductSchema,
    onReset: () => initialValues,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  const categoriesOptions: Option[] = mockedCategories.map((category) => ({
    label: category,
    value: category,
  }));

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

  return {
    categoriesOptions,
    createInputProps,
    handleCategoryChange,
    formik,
  };
};

const addProductSchema = Yup.object({
  name: Yup.string().required().max(100).label('Product name'),
  price: Yup.number().required().min(1).max(1_000_000).label('Price'),
  quantity: Yup.number()
    .required()
    .min(1)
    .max(1_000_000)
    .integer()
    .label('Quantity'),
  category: Yup.string().required().max(100).label('Category'),
  productionDate: Yup.date().required().label('Production date'),
});

export type AddProductSchema = Yup.InferType<typeof addProductSchema>;

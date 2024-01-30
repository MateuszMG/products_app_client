import { Option } from '../../components/global/inputs/SelectInput/SelectInput';

export type Category = string;

export interface CategoryState {
  categories: Category[];
  categoryOptions: Option[];
  loading: boolean;
}

import { LoaderTag } from './Loader.styled';

const defaultLoaderSize = 10;

interface LoaderProps {
  size?: number;
}

export const Loader = ({ size }: LoaderProps) => {
  return <LoaderTag loading={true} size={size || defaultLoaderSize} />;
};

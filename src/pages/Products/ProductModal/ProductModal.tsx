import { Modal } from '../../../components/global/Modal/Modal';

import { UseModal } from '../../../hooks/useModal';

import { Container, Title, Wrapper } from './ProductModal.styled';

import { Product } from '../../../redux/products/productTypes';

interface ProductModalProps extends UseModal {
  product: Product;
}

export const ProductModal = ({ product, ...modal }: ProductModalProps) => {
  const { category, name, price, productionDate, quantity } = product;

  return (
    <Modal {...modal}>
      <Container>
        <Wrapper>
          <Title>Name:</Title>
          <p>{name}</p>
        </Wrapper>

        <Wrapper>
          <Title>Category:</Title>
          <p>{category}</p>
        </Wrapper>

        <Wrapper>
          <Title>Price:</Title>
          <p>{price}</p>
        </Wrapper>

        <Wrapper>
          <Title>Quantity:</Title>
          <p>{quantity}</p>
        </Wrapper>

        <Wrapper>
          <Title>Production date:</Title>
          <p>{productionDate}</p>
        </Wrapper>
      </Container>
    </Modal>
  );
};

import { Modal } from '../../../components/global/Modal/Modal';

import { UseModal } from '../../../hooks/useModal';

import { Container, Title } from './ProductModal.styled';

interface ProductModalProps extends UseModal {
  product: Product;
}

export const ProductModal = ({ product, ...modal }: ProductModalProps) => {
  const { category, description, name, price, productionDate, quantity } =
    product;

  return (
    <Modal {...modal}>
      <Container>
        <div>
          <Title>Name:</Title>
          <p>{name}</p>
        </div>

        <div>
          <Title>Description:</Title>
          <p>{description}</p>
        </div>

        <div>
          <Title>Category:</Title>
          <p>{category}</p>
        </div>

        <div>
          <Title>Price:</Title>
          <p>{price}</p>
        </div>

        <div>
          <Title>Quantity:</Title>
          <p>{quantity}</p>
        </div>

        <div>
          <Title>Production date:</Title>
          <p>{productionDate}</p>
        </div>
      </Container>
    </Modal>
  );
};

import {
  AddIcon,
  DeleteIcon,
  EditIcon,
} from '../../components/global/Icon/Icon.styled';
import { Loader } from '../../components/global/Loader/Loader';

import { Header, LoaderWrapper, Name, Row } from './Products.styled';

import { ProductModal } from './ProductModal/ProductModal';
import { useProducts } from './useProducts';

export const Products = () => {
  const {
    handleOpenProduct,
    loading,
    productModal,
    products,
    redirectToAddProductPage,
    selectedProduct,
  } = useProducts();

  return (
    <div>
      <Header>
        <strong>Add product</strong>
        <AddIcon onClick={redirectToAddProductPage} />
      </Header>

      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <div>
          {products.map((product) => (
            <Row key={product.id}>
              <Name onClick={() => handleOpenProduct(product)}>
                {product.name}
              </Name>
              <div>
                <EditIcon />
                <DeleteIcon />
              </div>
            </Row>
          ))}
        </div>
      )}

      {productModal.open && selectedProduct && (
        <ProductModal {...productModal} product={selectedProduct} />
      )}
    </div>
  );
};

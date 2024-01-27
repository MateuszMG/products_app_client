import { paths } from '../../../routes/paths';

import { Link, LinksWrapper, List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <LinksWrapper>
          <Link to={paths.products}>Products</Link>
          <Link to={paths.addProduct}>Add product</Link>
        </LinksWrapper>
      </List>
    </nav>
  );
};

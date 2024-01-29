import { css, styled } from 'styled-components';

export const Header = styled.header`
  align-items: center;
  display: flex;
  gap: 16px;
  height: 100px;
  justify-content: center;
`;

export const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 50vh;
  justify-content: center;
`;

export const Row = styled.div(
  ({ theme: { colors } }) => css`
    align-items: center;
    border-bottom: 1px solid ${colors.primary};
    display: flex;
    gap: 16px;
    justify-content: space-between;
    margin-bottom: 16px;
    padding: 0 8px;
  `,
);

export const Name = styled.p`
  cursor: pointer;
  font-weight: bold;
`;

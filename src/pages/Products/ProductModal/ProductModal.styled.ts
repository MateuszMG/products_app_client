import { css, styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.p(
  ({ theme: { colors } }) => css`
    color: ${colors.primary};
    margin-bottom: 4px;
    min-width: 150px;
    text-indent: -8px;
  `,
);

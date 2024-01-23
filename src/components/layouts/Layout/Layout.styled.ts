import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px minmax(calc(100vh - 80px), 1fr) 40px;
  min-height: 100%;
`;

export const PageWrapper = styled.div(
  ({ theme: { devices } }) => css`
    margin: 0 auto;
    max-width: ${devices['1600px']};
    width: 100%;
  `,
);

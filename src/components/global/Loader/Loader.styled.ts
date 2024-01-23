import { PulseLoader } from 'react-spinners';
import styled, { css } from 'styled-components';

export const LoaderTag = styled(PulseLoader)(
  ({ theme: { colors } }) => css`
    span {
      background-color: ${colors.primary} !important;
    }
  `,
);

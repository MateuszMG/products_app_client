import { HiPencil, HiPlus, HiTrash } from 'react-icons/hi';
import { MdCancel } from 'react-icons/md';
import styled, { css } from 'styled-components';

const iconStyles = css(
  ({ theme: { colors } }) => css`
    cursor: pointer;
    color: ${colors.primary};
    font-size: 24px;
  `,
);

export const AddIcon = styled(HiPlus)`
  ${iconStyles}
`;

export const EditIcon = styled(HiPencil)`
  ${iconStyles}
`;

export const DeleteIcon = styled(HiTrash)`
  ${iconStyles}
`;

export const CancelIcon = styled(MdCancel)`
  ${iconStyles}
`;

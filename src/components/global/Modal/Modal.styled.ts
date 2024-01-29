import styled, { css, CSSProperties } from 'styled-components';

export const Overlay = styled.div`
  background-color: #333;
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0.7;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export const ModalWrapper = styled.div(
  ({ theme: { colors } }) => css`
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    box-shadow: 0 0 3px 1px ${colors.primary};
    left: 50%;
    max-height: 95vh;
    max-width: 95vw;
    padding: 48px 64px;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s;
    z-index: 4;

    &:hover {
      box-shadow: 0 0 6px 2px ${colors.primary};
    }
  `,
);

export const ButtonWrap = styled.div`
  cursor: pointer;
  font-size: 28px;
  margin: 6px;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s;
`;

import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle(
  ({ theme: { colors } }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      font-family: 'Roboto', 'Arial';
      scroll-behavior: smooth;
    }

    body {
      background-color: ${colors.backgroundPrimary};
      color: ${colors.fontPrimary};
      min-height: 100vh;
    }

    ul,
    li {
      list-style: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ///////////////////////////////////
    ///////////////////////////////////   react-select
    ///////////////////////////////////

    .global-select__control {
      background-color: transparent !important ;
      border-color: ${colors.primary} !important;
    }

    .global-select__single-value {
      color: ${colors.primary} !important;
    }
    .global-select__menu {
      background-color: ${colors.backgroundPrimary} !important;
      color: ${colors.primary} !important;
    }

    ///////////////////////////////////
    ///////////////////////////////////   dictionary
    ///////////////////////////////////

    table {
      color: #99f;
      line-height: 1.23;
    }

    table * span {
      color: #ccc;
    }

    .even {
      background-color: #222;
      width: 100%;
    }

    .odd {
      background-color: #000;
      width: 100%;
    }

    .WRD {
      border-collapse: collapse;
      width: 100%;
    }

    .ToWrd {
      color: #0c0;
    }

    .WRD tr td:nth-child(2):not(.FrEx):not(.ToEx) {
      width: 40%;
    }

    .WRD tr td:nth-child(3):not(.FrEx):not(.ToEx) {
      width: 36%;
    }

    .WRD td.ToWrd {
      padding: 5px 0 1px;
    }
    tr.wrtopsection td {
      font-size: 20px;
      text-align: center;
      padding-top: 36px;
    }
    .WRD td {
      padding: 3px 2px;
    }
    :not(.even) + .even td,
    :not(.odd) + .odd td {
      padding-top: 8px;
    }
  `,
);

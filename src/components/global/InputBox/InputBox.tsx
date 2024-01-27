import { ReactNode } from 'react';

import {
  firstLetterToUpperCase,
  separateString,
} from '../../../helpers/strings';

import { Error, Label, Wrap } from './InputBox.styled';

interface InputBoxProps {
  children: ReactNode;
  error?: string;
  label?: string;
  name?: string;
}

export const InputBox = ({ children, error, label, name }: InputBoxProps) => {
  const labelText = label || firstLetterToUpperCase(separateString(name || ''));

  return (
    <Wrap>
      <Label>{labelText}</Label>
      {children}
      <Error>{error}</Error>
    </Wrap>
  );
};

import { InputHTMLAttributes } from 'react';

import { TextareaTag } from './TextareaInput.styled';

import { InputBox } from '../../InputBox/InputBox';

interface TextareaInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

export const TextareaInput = ({
  label,
  error,
  ...rest
}: TextareaInputProps) => {
  return (
    <InputBox {...{ label, error, name: rest.name }}>
      <TextareaTag data-testid={`textarea__${rest.name}`} {...rest} />
    </InputBox>
  );
};

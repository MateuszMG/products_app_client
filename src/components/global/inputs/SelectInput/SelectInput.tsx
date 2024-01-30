import { forwardRef, InputHTMLAttributes } from 'react';

import { OptionTag, SelectTag } from './SelectInput.styled';

import { InputBox } from '../../InputBox/InputBox';

export interface SelectInputProps
  extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  error?: string;
  label?: string;
  options: Option[];
  onChange: (optionValue: Option['value']) => void;
}

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ error, label, onChange, options, ...rest }: SelectInputProps, ref) => {
    return (
      <InputBox {...{ label, error, name: rest.name }}>
        <SelectTag
          onChange={(e) => onChange(e.currentTarget.value)}
          {...rest}
          ref={ref}
        >
          {options.map((option) => (
            <OptionTag key={option.value} value={option.value}>
              {option.label}
            </OptionTag>
          ))}
        </SelectTag>
      </InputBox>
    );
  },
);

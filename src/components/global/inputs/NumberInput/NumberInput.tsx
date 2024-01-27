import { useEffect, useRef } from 'react';

import { Input, InputProps } from '../Input/Input';

const availableKeys = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '.',
  'ArrowRight',
  'ArrowLeft',
  'Backspace',
  'Delete',
];

export const NumberInput = (props: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (availableKeys.includes(e.key.toString())) return;
      e.preventDefault();
    };

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    if (ref.current) {
      ref.current.addEventListener('keydown', handleKeyDown);
      ref.current.addEventListener('paste', handlePaste);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('keydown', handleKeyDown);
        ref.current.removeEventListener('paste', handlePaste);
      }
    };
  }, []);

  return <Input {...props} ref={ref} type={'number'} />;
};

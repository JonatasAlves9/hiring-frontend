import { Input, Label, Wrapper } from './styles.ts';
import React from 'react';

interface IProps extends React.HTMLProps<HTMLInputElement> {}

export const InputQuantity = ({ ...rest }: IProps) => {
  return (
    <Wrapper>
      <Input {...rest} placeholder="10" type={'number'} />
      <Label>UN</Label>
    </Wrapper>
  );
};

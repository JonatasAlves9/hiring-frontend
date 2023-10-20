import React from 'react';
import { Wrapper } from './styles.ts';

interface IProps {
  children: React.JSX.Element;
}

export const Content = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

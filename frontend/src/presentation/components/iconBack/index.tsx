import React from 'react';
import { Icon, Wrapper } from './styles.ts';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  onPress?: () => void;
}

export const IconBack = ({ onPress }: IProps) => {
  return (
    <Wrapper onClick={onPress}>
      <Icon icon={faArrowLeft} />
    </Wrapper>
  );
};

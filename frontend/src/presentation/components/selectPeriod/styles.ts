import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IDate {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const DateLabel = styled.p<IDate>`
  font-size: ${({ theme }) => theme.sizes.xs}px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.white};
  cursor: pointer;
  padding: 10px;
  margin: 0;
`;

export const Icon = styled(FontAwesomeIcon)<IDate>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.white};
  padding: 10px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.sizes.sm}px;
`;

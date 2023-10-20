import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ISides {
  side: 'left' | 'right';
}
export const Wrapper = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const Button = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 10px;
  border-radius: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.darks};
`;

export const Sides = styled.div<ISides>`
  display: flex;
  justify-content: ${({ side }) => (side !== 'left' ? 'flex-end' : 'none')};
  padding: 0 20px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding: 10px;
  height: 100%;
  border-radius: 10px;
  &:focus {
    /* Estilos para o estado de foco aqui. Por exemplo: */
    border: none;
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.background};
  }
`;

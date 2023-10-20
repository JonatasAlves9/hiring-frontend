import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1.5px solid ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  &:focus {
    /* Estilos para o estado de foco aqui. Por exemplo: */
    border: none;
    outline: none;
  }
`;

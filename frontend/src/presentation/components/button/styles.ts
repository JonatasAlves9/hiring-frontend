import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 100px;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 30px;
  cursor: pointer;
`;

export const Label = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

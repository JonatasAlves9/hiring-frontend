import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 8px 15px;
  border-radius: 20px;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.sizes.sm}px;
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
`;

import styled from 'styled-components';

export const PanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; // Full height of the viewport
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const ErrorMessage = styled.div`
  background-color: #ffffff;
  padding: 20px 40px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; // Space between the elements
  color: ${({ theme }) => theme.colors.background};
`;

export const ErrorIcon = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const RetryButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

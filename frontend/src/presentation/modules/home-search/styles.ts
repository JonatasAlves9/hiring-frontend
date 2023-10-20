import styled from 'styled-components';

interface ICenteredDiv {
  marginTop: number;
}

export const Wrapper = styled.div``;

export const LogoSearch = styled.img`
  width: 420px;
`;

export const CenteredDiv = styled.div<ICenteredDiv>`
  display: flex;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonSuggestion = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 5px 20px;
  border-radius: 10px;
  border: 1.5px solid ${({ theme }) => theme.colors.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const ButtonSuggestionLabel = styled.p`
  font-size: ${({ theme }) => theme.sizes.xs}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ViewSuggestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 20px;
  gap: 10px;
`;

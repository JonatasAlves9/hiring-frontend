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

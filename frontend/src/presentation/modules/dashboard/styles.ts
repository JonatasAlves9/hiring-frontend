import styled from "styled-components";

interface ICenteredDiv {
    marginTop: number
}

export const Wrapper = styled.div``;

export const ContentFlex = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

export const LogoSearch = styled.img`
  width: 420px;
`;

export const CenteredDiv = styled.div<ICenteredDiv>`
  display: flex;
  margin-top: ${({marginTop}) => marginTop || 0}px;
  justify-content: center;
  align-items: center;
`;

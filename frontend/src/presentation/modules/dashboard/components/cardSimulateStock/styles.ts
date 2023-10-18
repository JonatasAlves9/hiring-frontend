import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  flex: .4;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 20px;
`;

export const Title = styled.p`
  font-size: ${({theme}) => theme.sizes.xl}px;
  color: ${({theme}) => theme.colors.dark};
  font-weight: bold;
`;

export const Header = styled.div`
  height: 20px;
  padding: 30px 0;
  margin: 0 40px;
`;

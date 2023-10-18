import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
  display: flex;
  height: 100vh;
  width: 100%;
`;

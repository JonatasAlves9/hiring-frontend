import styled from "styled-components";

export const PanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; // Full height of the viewport
  width: 100%;
  background-color: ${({theme}) => theme.colors.dark};
`;

export const LoadingMessage = styled.div`
  background-color:  ${({theme}) => theme.colors.white};
  padding: 20px 40px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
`;

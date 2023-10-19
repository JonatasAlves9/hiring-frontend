import styled from "styled-components";

export const PanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px;
  width: 100%;
  height: 100%;
`;

export const ViewAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
export const LoadingMessage = styled.div`
  color:  ${({theme}) => theme.colors.white};
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
`;

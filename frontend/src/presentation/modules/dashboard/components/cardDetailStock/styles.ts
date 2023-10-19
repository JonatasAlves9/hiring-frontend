import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.dark};
  flex: 1;
  border-radius: 20px;
`;

export const Header = styled.div`
  height: 20px;
  padding: 30px 0;
  margin: 0 40px;
  border-bottom: 1px solid ${({theme}) => theme.colors.border_dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ViewCompareStocks = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const InputCompare = styled.input`
  background-color: #D9D9D9;
  padding: 10px;
  border-radius: 10px;
  border: none;
  width: 60px;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.sizes.xs}px;
`;

export const ButtonCompareAction = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.colors.dark};
  transition: border 0.3s ease;

  &:hover {
    border: 1px solid ${({theme}) => theme.colors.secondary};;
  }
`;


export const Button = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: ${({theme}) => theme.colors.background};;
  }
`;

export const ButtonLabel = styled.p`
  font-size: ${({theme}) => theme.sizes.xs}px;
  color: ${({theme}) => theme.colors.white};
`;

export const ViewInformationAndDate = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;


export const Title = styled.p`
  font-size: ${({theme}) => theme.sizes.xl}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: lighter;
`;

export const Content = styled.div`
  padding: 30px 0;
  margin: 0 40px;
`;
export const ValueStock = styled.p`
  font-size: ${({theme}) => theme.sizes.xxl + 10}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: lighter;
`;

export const DescriptionValueStock = styled.p`
  font-size: ${({theme}) => theme.sizes.xs}px;
  color: ${({theme}) => theme.colors.white};
`;

export const ContentChart = styled.div`
  width: 100%;
  margin-top: 30px;
`;

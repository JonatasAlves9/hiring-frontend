import styled from "styled-components";

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

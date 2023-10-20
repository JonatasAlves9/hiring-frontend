import styled from 'styled-components';
import { themeDark } from '../../../../style/themes.ts';

export const Wrapper = styled.div`
  flex: 0.3;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.sizes.xl}px;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bold;
`;

export const LabelInput = styled.p`
  font-size: ${({ theme }) => theme.sizes.sm}px;
  margin: 8px 0;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.sizes.xs}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Content = styled.div`
  padding: 30px;
  margin-top: 30px;
`;

export const Header = styled.div`
  height: 20px;
  padding: 30px 0;
  margin: 0 40px;
`;

export const HeaderResult = styled.div`
  justify-content: center;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ContentResult = styled.div`
  margin-top: 30px;
`;
export const TitleResult = styled.p`
  font-size: ${({ theme }) => theme.sizes.xl}px;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bold;
`;

export const DescriptionResult = styled.p`
  font-size: ${({ theme }) => theme.sizes.xs}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ViewPrices = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  border: 1px solid ${themeDark.colors.dark};
  border-radius: 10px;
  margin-top: 10px;
`;
export const ViewQuantityStocks = styled.div`
  padding: 10px 30px;
  border: 1px solid ${themeDark.colors.dark};
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.sizes.sm}px;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bold;
  text-align: center;
`;

export const Value = styled.p`
  font-size: ${({ theme }) => theme.sizes.sm}px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

export const ViewValue = styled.div``;

export const Feedback = styled.p`
  font-size: ${({ theme }) => theme.sizes.xs}px;
  color: red;
  margin-top: 5px;
`;

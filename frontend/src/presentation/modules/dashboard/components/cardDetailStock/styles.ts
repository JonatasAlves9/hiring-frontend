import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

interface ButtonProps {
  show: boolean;
}

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  flex: 1;
  border-radius: 20px;
`;

export const Header = styled.div`
  height: 20px;
  padding: 30px 0;
  margin: 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border_dark};
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

export const ViewAnimationPresence = styled.div<ButtonProps>`
  justify-content: space-between;
  align-items: center;
  display: flex;
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 0.5s forwards;
  gap: 10px;
`;
export const InputCompare = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  border-radius: 8px;
  border: none;
  width: 60px;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.xs}px;
`;

export const ButtonCompareAction = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  transition: border 0.3s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
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
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const ButtonLabel = styled.p`
  font-size: ${({ theme }) => theme.sizes.xs}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ViewInformationAndDate = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;

  // Quando a tela é menor que 768px
  @media (max-width: 1500px) {
    flex-direction: column; // Os itens do flexbox vão de cima para baixo

    > * {
      // Todos os elementos filhos diretos
      flex: none; // Redefinindo o flex para não usar os valores de flex definidos anteriormente
      width: 100%; // Tomando toda a largura disponível
      margin-bottom: 10px; // Adicionando uma margem para separar os elementos
    }

    > *:last-child {
      margin-bottom: 0; // Removendo a margem do último elemento para evitar espaçamento extra
      justify-content: center;
    }
  }
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.sizes.xl}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: lighter;
`;

export const Content = styled.div`
  padding: 30px 0;
  margin: 0 40px;
`;
export const ValueStock = styled.p`
  font-size: ${({ theme }) => theme.sizes.xxl + 10}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: lighter;
`;

export const DescriptionValueStock = styled.p`
  font-size: ${({ theme }) => theme.sizes.xs}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ContentChart = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
`;

export const TableContainer = styled.div`
  flex: 0.3;
`;

export const ChartContainer = styled.div`
  flex: 1;
`;

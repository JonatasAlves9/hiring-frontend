import styled from 'styled-components';

interface ICenteredDiv {
  marginTop: number;
}

export const Wrapper = styled.div``;

export const ContentFlex = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  // Quando a tela é menor que 768px (por exemplo, você pode ajustar esse valor conforme necessário)
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
    }
  }
`;

export const LogoSearch = styled.img`
  width: 420px;
`;

export const CenteredDiv = styled.div<ICenteredDiv>`
  display: flex;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  justify-content: center;
  align-items: center;
`;

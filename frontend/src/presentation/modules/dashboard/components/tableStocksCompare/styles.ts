// Componentes Estilizados
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${({theme}) => theme.colors.white};
`;

export const TableHeader = styled.thead`
  background-color: ${({theme}) => theme.colors.background};
`;

export const TableRow = styled.tr`
 
`;

export const TableCell = styled.td`
  padding: 8px 12px;
`;

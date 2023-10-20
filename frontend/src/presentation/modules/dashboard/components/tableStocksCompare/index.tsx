// Tabela.tsx
import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from './styles.ts';
import { CompareStockResponse } from '../../../../../domain/models/compare-stock-response.ts';
import { formatCurrency } from '../../../../utils/formatCurrency.ts';
import { formatDate } from '../../../../utils/formatDate.ts';

type TabelaProps = {
  data: CompareStockResponse | undefined;
};

export const TableStockCompare: React.FC<TabelaProps> = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Comparação</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        {(data?.lastPrices || []).map((stock, index) => (
          <TableRow key={index}>
            <TableCell>
              <b>{stock.name}</b>
            </TableCell>
            <TableCell>{formatCurrency(stock.lastPrice)}</TableCell>
            <TableCell>{formatDate(stock.pricedAt)}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { GetStockHistoryResponse } from '../../../../../domain/models/get-stock-history-response.ts';
import { formatCurrency } from '../../../../utils/formatCurrency.ts';
import {
  STATUS_REQUEST,
  StatusRequest,
} from '../../../../../domain/models/status-request.ts';
import { LoadingPanel } from '../../../../components/loadingPanel';
import { ErrorPanel } from '../../../../components/errorPanel';

Chart.register(...registerables);

interface IProps {
  stockHistory?: GetStockHistoryResponse;
  loading: StatusRequest;
}

function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

function extractLabels(stockHistory: any[]): string[] {
  return stockHistory.map((item) => formatDate(item.pricedAt || ''));
}

function extractDataHighLow(data: any[]): number[][] {
  return data.map((item) => [item.low, item.high]);
}

function extractClosing(data: any[]): number[] {
  return data.map((item) => item.closing);
}

const ChartLineHistory: React.FC<IProps> = ({
  stockHistory = { prices: [] },
  loading,
}) => {
  const labels = extractLabels(stockHistory.prices);
  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: 'Máxima e Mínima',
        backgroundColor: 'rgba(75, 192, 192, .1)',
        data: extractDataHighLow(stockHistory.prices),
        borderColor: 'rgba(75, 192, 192, .3)',
        borderWidth: 2,
      },
      {
        type: 'line',
        label: 'Valor de fechamento',
        borderColor: 'rgba(208,218,95,1)',
        borderWidth: 2,
        backgroundColor: 'rgba(208,218,95,0.10)',
        fill: true,
        data: extractClosing(stockHistory.prices),
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: false,
      tooltip: {
        callbacks: {
          label: function () {
            return null;
          },
          afterBody: function (item: any) {
            const max = item[0].raw[1];
            const min = item[0].raw[0];
            const closed = item[1].raw;

            return [
              `Valor de fechamento: ${formatCurrency(closed)}`,
              `Máxima: ${formatCurrency(max)}`,
              `Mínima: ${formatCurrency(min)}`,
            ];
          },
        },
      },
    },
  };

  if (loading === STATUS_REQUEST.LOADING) return <LoadingPanel />;
  if (loading === STATUS_REQUEST.ERROR)
    return <ErrorPanel onRetry={() => window.location.reload()} />;

  if (loading === STATUS_REQUEST.DONE) {
    return <Line data={data as any} options={options as any} height={100} />;
  }
  return null;
};

export default ChartLineHistory;

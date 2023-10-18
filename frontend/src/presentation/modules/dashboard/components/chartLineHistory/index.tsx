import {Line} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import {GetStockHistoryResponse} from "../../../../../domain/models/get-stock-history-response.ts";
import {formatCurrency} from "../../../../utils/formatCurrency.ts";

Chart.register(...registerables);

interface IProps {
    stockHistory: GetStockHistoryResponse
}

function ChartLineHistory({stockHistory}: IProps) {

    function extractLabels(stockHistory: GetStockHistoryResponse) {
        return stockHistory.prices.map(item => formatDate(item.pricedAt || ''));
    }

    function extractDataHighLow(stockHistory: GetStockHistoryResponse) {
        return stockHistory.prices.map(item => [item.low, item.high]);
    }

    function extractClosing(stockHistory: GetStockHistoryResponse) {
        return stockHistory.prices.map(item => item.closing);
    }

    const labels = extractLabels(stockHistory);

    function formatDate(dateString: string) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }


    const data = {
        labels,
        datasets: [
            {
                type: 'bar' as const,
                label: 'Máxima e Mínima',
                backgroundColor: 'rgba(75, 192, 192, .1)',
                data: extractDataHighLow(stockHistory),
                borderColor: 'rgba(75, 192, 192, .3)',
                borderWidth: 2,
            },
            {
                type: 'line' as const,
                label: 'Valor de fechamento',
                borderColor: 'rgba(208,218,95,1)',
                borderWidth: 2,
                backgroundColor: 'rgba(208,218,95,0.10)',
                fill: true,
                data: extractClosing(stockHistory),
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
                        return null; // Retornando null para o callback padrão
                    },
                    afterBody: function (item: any) {
                        const max = item[0].parsed.y; // ou algum código para extrair o valor máximo
                        const min = item[0].parsed.x; // ou algum código para extrair o valor mínimo
                        const closed = item[1].raw; // ou algum código para extrair o valor mínimo

                        return [`Valor de fechamento: ${formatCurrency(closed)}`, `Máxima: ${formatCurrency(max)}`, `Mínima: ${formatCurrency(min)}`];
                    },
                },
            },
        }
    };

    // @ts-ignore
    return <Line data={data} options={options} height={100}/>;
}

export default ChartLineHistory;

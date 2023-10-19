import {Line} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import {GetStockHistoryResponse} from "../../../../../domain/models/get-stock-history-response.ts";
import {formatCurrency} from "../../../../utils/formatCurrency.ts";
import {STATUS_REQUEST, StatusRequest} from "../../../../../domain/models/status-request.ts";
import {LoadingPanel} from "../../../../components/loadingPanel";

Chart.register(...registerables);

interface IProps {
    stockHistory: GetStockHistoryResponse | undefined
    loading: StatusRequest
}

function ChartLineHistory({stockHistory, loading}: IProps) {

    function extractLabels(stockHistory: any[]) {
        return stockHistory.map(item => formatDate(item.pricedAt || ''));
    }

    function extractDataHighLow(data: any[]) {
        return data.map(item => [item.low, item.high]);
    }

    function extractClosing(data: any[]) {
        return data.map(item => item.closing);
    }

    const labels = extractLabels(stockHistory?.prices || []);

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
                data: extractDataHighLow(stockHistory?.prices || []),
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
                data: extractClosing(stockHistory?.prices || []),
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
                        const max = item[0].parsed.y;
                        const min = item[0].parsed.x;
                        const closed = item[1].raw;

                        return [`Valor de fechamento: ${formatCurrency(closed)}`, `Máxima: ${formatCurrency(max)}`, `Mínima: ${formatCurrency(min)}`];
                    },
                },
            },
        }
    };

    // @ts-ignore
    return loading === STATUS_REQUEST.LOADING ? <LoadingPanel/> : <Line data={data} options={options} height={100}/>;
}

export default ChartLineHistory;

import {Line} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';
import {themeDark} from "../../../../style/themes.ts";

Chart.register(...registerables);

function ChartLineHistory() {

    const data = {
        labels: ['01/10/2023', '01/10/2023', '01/10/2023', '01/10/2023', '01/10/2023', '01/10/2023', '01/10/2023', '01/10/2023', '01/10/2023', '01/10/2023'],
        datasets: [
            {
                label: 'Vendas em 2023 (em milhares)',
                data: [10, 20, 15, 30, 25, 35, 30, 25, 35, 35],
                fill: true,
                backgroundColor: themeDark.colors.secondary,
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],

    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: false
        }
    };

    // @ts-ignore
    return <Line data={data} options={options} height={100}/>;
}

export default ChartLineHistory;

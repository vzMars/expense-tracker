import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type PropsType = {
  income: number;
  expense: number;
  balance: number;
};

const DoughnutChart = ({ income, expense, balance }: PropsType) => {
  const labels = [
    `Income $${income.toLocaleString('en-US')}`,
    `Expense $${expense.toLocaleString('en-US')}`,
    `Balance $${balance.toLocaleString('en-US')}`,
  ];

  const values = [income, expense, balance];

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: values,
        backgroundColor: ['#32d583', '#039855', '#1d2939'],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;

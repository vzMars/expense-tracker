import { TransactionType } from '../types';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

type PropsType = {
  transactions: TransactionType[];
};

const BarChart = ({ transactions }: PropsType) => {
  const categoryCount = new Map<string, number>();

  for (let i = 0; i < transactions.length; i++) {
    const category = transactions[i].categoryName;
    if (categoryCount.has(category)) {
      categoryCount.set(category, categoryCount.get(category)! + 1);
    } else {
      categoryCount.set(category, 1);
    }
  }

  const labels = [...categoryCount.keys()];
  const values = [...categoryCount.values()];

  const data = {
    labels,
    datasets: [
      {
        label: 'Count',
        data: values,
        backgroundColor: '#32d583',
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;

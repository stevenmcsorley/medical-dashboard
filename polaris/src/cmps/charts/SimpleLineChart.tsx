import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface SimpleLineChartProps {
  sortType: string;
}

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
  { name: 'Jul', value: 349 },
  { name: 'Aug', value: 349 },
  { name: 'Sep', value: 340 },
  { name: 'Oct', value: 249 },
  { name: 'Nov', value: 309 },
  { name: 'Dec', value: 129 },
];

const SimpleLineChart: React.FC<SimpleLineChartProps> = ({ sortType }) => {
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    // Update the sortedData state based on the selected sort option
    const sorted = [...data].sort((a, b) => {
      if (sortType === 'asc') {
        return a.value - b.value;
      } else if (sortType === 'desc') {
        return b.value - a.value;
      }
      return 0;
    });
    setSortedData(sorted);
  }, [sortType]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={sortedData}
        margin={{ top: 10, right: 30, left: 30, bottom: 20 }}>
      <CartesianGrid strokeDasharray="1 0" strokeOpacity={0.3} vertical={false} stroke="var(--color-green-brand)" />
        <XAxis dataKey="name" label="" tick={{ fill: 'var(--color-neutral-gray-light)' }} strokeOpacity={0} tickMargin={15} />
        <YAxis label="" tick={{ fill: 'var(--color-neutral-gray-light)' }} strokeOpacity={0} tickMargin={15} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="var(--color-green-brand)" yAxisId={0} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;

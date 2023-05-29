import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SimpleAreaChartProps {
  sortType: string;
}

const data = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
  { name: 'Aug', uv: 3490 },
  { name: 'Sep', uv: 3400 },
  { name: 'Oct', uv: 2490 },
  { name: 'Nov', uv: 3090 },
  { name: 'Dec', uv: 1290 },
];

const SimpleAreaChart: React.FC<SimpleAreaChartProps> = ({ sortType }) => {
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    // Sort the data based on the selected sort option
    const sorted = [...data].sort((a, b) => {
      if (sortType === 'asc') {
        return a.uv - b.uv;
      } else if (sortType === 'desc') {
        return b.uv - a.uv;
      }
      return 0;
    });
    setSortedData(sorted);
  }, [sortType]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={sortedData} margin={{ top: 10, right: 30, left: 30, bottom: 20 }}>
        <CartesianGrid strokeDasharray="1 0" strokeOpacity={0.3} vertical={false} />
        <XAxis dataKey="name" label="" tick={{ fill: 'var(--color-neutral-gray-light)' }} strokeOpacity={0} tickMargin={15} />
        <YAxis label="" tick={{ fill: 'var(--color-neutral-gray-light)' }} strokeOpacity={0} tickMargin={15} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="var(--color-green-brand)"
          fill="var(--color-green-brand)"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SimpleAreaChart;

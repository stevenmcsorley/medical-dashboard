import React from "react";
import ReactApexChart from "react-apexcharts";

const data = [
  { name: "male", value: 400 },
  { name: "female", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartWithPaddingAngleSimple: React.FC = () => {
  const series = data.map((entry) => entry.value);
  const labels = data.map((entry) => entry.name);
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
      height: 300,
    },
    colors: COLORS,
    labels: labels,
    responsive: [
      {
        breakpoint: 900,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => `${totalValue}`,
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" height={300} />
    </div>
  );
};

export default PieChartWithPaddingAngleSimple;

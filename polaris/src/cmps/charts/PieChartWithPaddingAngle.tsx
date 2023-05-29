import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./PieChart.module.css";

const data = [
  { name: "Under 15", value: 400 },
  { name: "15-18", value: 300 },
  { name: "19-25", value: 200 },
  { name: "26-45", value: 278 },
  { name: "45-65", value: 189 },
  { name: "Over 65", value: 349 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#FFA07A"];

const PieChartWithPaddingAngle = () => {
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
    legend: {
      position: "right",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: (w: any) => `${totalValue}`,
            },
          },
        },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        <ReactApexChart options={options} series={series} type="donut" height={300} />
      </div>
    </div>
  );
};

export default PieChartWithPaddingAngle;

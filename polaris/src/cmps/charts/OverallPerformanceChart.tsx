import React from "react";
import ReactApexChart from "react-apexcharts";

const OverallPerformanceChart: React.FC = () => {
  const value = 75; // Overall performance value between 0 and 100

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
      height: 400,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: "50%",
        },
        track: {
          background: "#ECECEC",
        },
        dataLabels: {
          show: true,
          value: {
            formatter: (val: number) => `${val}%`,
            color: "#111",
            fontSize: "28px",
            offsetY: -30,
            show: true,
          },
        },
      },
    },
    series: [value],
    labels: [""],
  };

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="radialBar" height={400} />
    </div>
  );
};

export default OverallPerformanceChart;

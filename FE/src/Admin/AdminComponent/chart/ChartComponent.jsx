import {
  Chart as ChartJs,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
} from "chart.js/auto";
import React from "react";
import { Container } from "react-bootstrap";
import { Doughnut, Pie, Line, Bar } from "react-chartjs-2";
import { useGetCountIndustry } from "../../AdminAPI/use/useGetCountIndustry";
import { useGetCountInductryApplication } from "../../AdminAPI/use/useGetCountInductryApplication";
import { useGetCountLocationJob } from "../../AdminAPI/use/useGetCountLocationJob";
import ChartBox from "./ChartBox";
import { useGetTotalJob } from "../../AdminAPI/use/useGetTotalJob";
import { useGetTotalCompanies } from "../../AdminAPI/use/useGetTotalCompanies";

ChartJs.register(LinearScale, LineElement, PointElement, CategoryScale);

const ChartComponent = () => {
  const { chartData, isLoading: isLoadingCountIndustry } =
    useGetCountIndustry();
  const { chartData2, isLoading: isLoadingCountApplyCation } =
    useGetCountInductryApplication();
  const { chartData3, isLoading: isLoadingCountLocationJob } =
    useGetCountLocationJob();
  const { chartData4, isLoading: isLoadingTotalJob } = useGetTotalJob();
  const { chartData5, isLoading: isLoadingTotalCompanies } =
    useGetTotalCompanies();

  if (
    isLoadingCountIndustry ||
    isLoadingCountApplyCation ||
    isLoadingCountLocationJob ||
    isLoadingTotalJob ||
    isLoadingTotalCompanies
  ) {
    return <p>Loading...</p>;
  }

  const generateColors = (length) => {
    return Array.from({ length }, () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r},${g},${b},0.6)`;
    });
  };

  const createChartData = (labels, data) => ({
    labels,
    datasets: [
      {
        label: "Chỉ số",
        backgroundColor: generateColors(labels.length),
        borderWidth: 1,
        data,
      },
    ],
  });

  const createLineChartData = (labels, datasets) => ({
    labels,
    datasets: datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      fill: false,
      backgroundColor: generateColors(dataset.data.length)[0],
      borderColor: generateColors(dataset.data.length)[0].replace("0.6", "1"),
    })),
  });

  const chartDataIndustry = createChartData(
    chartData.data.map((item) => item.industryName),
    chartData.data.map((item) => item.totalJobs)
  );

  const chartDataApplications = createChartData(
    chartData2.data.map((item) => item.industryName),
    chartData2.data.map((item) => item.totalJobs)
  );

  const chartDataLocation = createChartData(
    chartData3.data.map((item) => item.industryName),
    chartData3.data.map((item) => item.totalJobs)
  );

  const lineChartLabels = ["Total Jobs", "Total Companies"];
  const lineChartData = createLineChartData(lineChartLabels, [
    { label: "Jobs", data: Array(2).fill(chartData4.data) },
    { label: "Companies", data: Array(2).fill(chartData5.data) },
  ]);

  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Container>
      <h3 className="mt-5">Biểu đồ thống kê</h3>
      <div className="row">
        <ChartBox
          title="Area Chart"
          ChartComponent={Doughnut}
          data={chartDataIndustry}
          options={options}
        />
        <ChartBox
          title="Donut Chart"
          ChartComponent={Pie}
          data={chartDataApplications}
          options={options}
        />
        <ChartBox
          title="Line Chart"
          ChartComponent={Line}
          data={lineChartData}
          options={options}
        />
        <ChartBox
          title="Bar Chart"
          ChartComponent={Bar}
          data={chartDataLocation}
          options={options}
        />
      </div>
    </Container>
  );
};

export default ChartComponent;

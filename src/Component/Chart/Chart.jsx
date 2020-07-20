import React, { useState, useEffect } from "react";
import { fetchDataDaily } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import style from "./Chart.module.css";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchDailyData = async () => {
      setDailyData(await fetchDataDaily());
    };
    fetchDailyData();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      style={style.mb}
      data={{
        labels: dailyData.map((data) => data.reportDate),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
          },
          {
            data: dailyData.map((data) => data.deaths.total),
            label: "Recovered",
            borderColor: "rgba(255,0,0,0.5)",
          },
        ],
      }}
    />
  ) : null;

  const barChart = country ? (
    <Bar
      data={{
        labels: ["Infected", "Deaths", "Recovered"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(255, 0, 0, 0.5)",
              "rgba(0, 255, 0, 0.5)",
            ],
            data: [
              data.confirmed.value,
              data.deaths.value,
              data.recovered.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `current state in ${country}` },
      }}
    />
  ) : null;

  return <div>{country ? barChart : lineChart}</div>;
};

export default Chart;

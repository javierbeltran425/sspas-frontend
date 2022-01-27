import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

export default function BarChart(props) {
  const { meditions } = props;
  const [dates, setDates] = useState([]);
  const [numbers, setNumbers] = useState([
    {
      label: "",
      backgroundColor: "#42A5F5",
      data: [],
    },
  ]);

  console.log(meditions);

  useEffect(() => {
    if (meditions.length > 0) {
      for (let i = 0; i < meditions.length; i++) {
        setDates([...dates, meditions[i].ano]);
        setNumbers([
          {
            ...numbers,
            label: meditions[i].valores_factor,
            backgroundColor: "#42A5F5",
            data: meditions[i].valor_medicion,
          },
        ]);
      }
    }
  }, [meditions]);

  console.log(dates);
  console.log(numbers);

  const basicData = {
    labels: dates,
    datasets: numbers,
  };

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };
    return {
      basicOptions,
    };
  };

  const { basicOptions } = getLightTheme();

  return (
    <div className="card">
      <h5>Vertical</h5>
      <Chart type="bar" data={basicData} options={basicOptions} />
    </div>
  );
}

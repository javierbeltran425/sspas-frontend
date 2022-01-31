import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

let years = [];
let uniqueYearsArr = [];

export default function BarChart(props) {
  const { meditions = [], name } = props;
  const[ meditionsVal, setMeditionsVal ] = useState([])

  let measurementsPerYears = [];
  useEffect(() => {
    if (uniqueYearsArr.length > 0) {
      for (let i = 0; i < uniqueYearsArr.length; i++) {
        for (let j = 0; j < meditions.length; j++) {
          if (meditions[j].ano === uniqueYearsArr[i]) {
            measurementsPerYears[i] =
              measurementsPerYears[i] +
              parseInt(meditions[j].valor_medicion);
            }
          }
        }
        setMeditionsVal(measurementsPerYears)
    }
  }, [meditions]);

  if (meditions.length > 0) {
    meditions.forEach((element) => {
      years.push(element.ano);
    });

    uniqueYearsArr = [...new Set(years)];

    uniqueYearsArr.forEach((element) => {
      measurementsPerYears.push(0);
    });
  }


  const basicData = {
    labels: uniqueYearsArr,
    datasets: [
      {
        label: name !== undefined ? name : "Sin valor",
        backgroundColor: "#80b1f5",
        data: meditionsVal,
      }
    ],
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

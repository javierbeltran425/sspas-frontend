import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

let years = [];
let uniqueYearsArr = [];

export default function DinamicTableChart(props) {
  const {
    measurements = [],
    disaggregation1,
    disaggregation2,
    value1,
    value2,
  } = props;

  const [meditionsVal1, setMeditionsVal1] = useState([])
  const [meditionsVal2, setMeditionsVal2] = useState([])

  useEffect(() => {
    try {
      measurementsPerYears1 = [];
      measurementsPerYears2 = [];
    } catch (error) {
      console.error(error);
    }
  }, [measurements]);

  let measurementsPerYears1 = [];
  let measurementsPerYears2 = [];
  if (measurements !== undefined) {
    measurements.forEach((element) => {
      years.push(element.ano);
    });

    uniqueYearsArr = [...new Set(years)];

    uniqueYearsArr.forEach((element) => {
      measurementsPerYears1.push(0);
      measurementsPerYears2.push(0);
    });
  }
  
  useEffect(() => {
    if (uniqueYearsArr.length > 0) {
      for (let i = 0; i < uniqueYearsArr.length; i++) {
        for (let h = 0; h < measurements.length; h++) {
          if (measurements[h].ano === uniqueYearsArr[i]) {
            for (let j = 0; j < measurements[h].valores_factor.length; j++) {
              if (
                measurements[h].valores_factor[j].categoria ===
                  disaggregation1.nombre &&
                measurements[h].valores_factor[j].valor === value1.name
              ) {
                measurementsPerYears1[i] =
                  measurementsPerYears1[i] +
                  parseInt(measurements[h].valor_medicion);
              }
            }
          }
        }
      }
      setMeditionsVal1(measurementsPerYears1)
    }
  }, [measurements, disaggregation1, value1]);

  useEffect(() => {
    if (uniqueYearsArr.length > 0) {
      for (let i = 0; i < uniqueYearsArr.length; i++) {
        for (let h = 0; h < measurements.length; h++) {
          if (measurements[h].ano === uniqueYearsArr[i]) {
            for (let j = 0; j < measurements[h].valores_factor.length; j++) {
              if (
                measurements[h].valores_factor[j].categoria ===
                  disaggregation2.nombre &&
                measurements[h].valores_factor[j].valor === value2.name
              ) {
                measurementsPerYears2[i] =
                  measurementsPerYears2[i] +
                  parseInt(measurements[h].valor_medicion);
              }
            }
          }
        }
      }
      setMeditionsVal2(measurementsPerYears2)
    }
  }, [measurements, disaggregation2, value2]);

  const basicData = {
    labels: uniqueYearsArr,
    datasets: [
      {
        label: value1.name !== undefined ? value1.name : "Sin valor",
        backgroundColor: "#80b1f5",
        data: meditionsVal1,
      },
      {
        label: value2.name !== undefined ? value2.name : "Sin valor",
        backgroundColor: "#fcacea",
        data: meditionsVal2,
      },
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
    <div>
      <div className="card">
        <h5>Vertical</h5>
        <Chart type="bar" data={basicData} options={basicOptions} />
      </div>
    </div>
  );
}

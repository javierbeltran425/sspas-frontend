import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

let years = [];
let uniqueYearsArr = [];
let desagrigation = [];

export default function BarChart(props) {
  const { meditions = [], name, data, vals = [], selectedFactor } = props;
  const [meditionsVal, setMeditionsVal] = useState([]);

  console.log("Impresion de meditions");
  console.log(meditions);

  console.log("Impresion de data");
  console.log(data);

  console.log("impresion de vals");
  console.log(vals);

  /**
   * dataSet[i] = {
            label: name !== undefined ? name : "Sin valor",
            backgroundColor: "#80b1f5",
            data: [measurementsPerYears[i]],
          }
   */

  let measurementsPerYears = [];
  if (meditions.length > 0) {
    meditions.forEach((element) => {
      years.push(element.ano);
    });

    uniqueYearsArr = [...new Set(years)];

    uniqueYearsArr.forEach((element) => {
      measurementsPerYears.push({});
    });
  }

  useEffect(() => {
    if (uniqueYearsArr.length > 0) {
      for (let i = 0; i < uniqueYearsArr.length; i++) {
        if (meditions.legend > 0) {
          for (let j = 0; j < meditions.length; j++) {
            if (meditions[j].ano === uniqueYearsArr[i]) {
              for (let h = 0; h < meditions.valores_factor.length; h++) {
                if (
                  meditions.valores_factor[h].categoria ===
                  selectedFactor.nombre
                ) {
                  measurementsPerYears[i] = {
                    label: meditions.valores_factor[h].categoria,
                    backgroundColor: "#80b1f5",
                    data: [meditions.valor_medicion],
                  };
                }
              }
            }
          }
        }
      }
     
      console.log("impresion de dataset");
      console.log(measurementsPerYears);
      setMeditionsVal(measurementsPerYears);
    }
  }, [meditions]);

   //-------------------------------------------------------------------------------
      //-+-------------------------Alternativa 1 --------------------------------------
      let meds_per_val = [];
      vals.forEach((v) => {
        let meds = [];
        meditions.forEach((m) => {
          const vals_m = m.valores_factor;
          console.log("aqui:");
          console.log(m.valores_factor);
          if (m.valores_factor.includes(v)) meds = [...meds, m];
        });
        meds_per_val = [...meds_per_val, meds];
      });
      console.log("------------------------");
      console.log(meds_per_val);
      console.log("------------------------");

      //-------------------------------------------------------------------------------

  const basicData = {
    labels: uniqueYearsArr,
    datasets: meditionsVal,
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
      <Chart type="bar" data={basicData} options={basicOptions} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

let years = [];
let uniqueYearsArr = [];
let desagrigation = [];

export default function BarChart(props) {
  const { meditions = [], name, data, vals = [], selectedFactor } = props;
  const [meditionsVal, setMeditionsVal] = useState([]);

  const colors = [
    "aqua", 
    "black", 
    "blue", 
    "fuchsia", 
    "gray", 
    "green", 
    "lime", 
    "maroon", 
    "navy", 
    "olive", 
    "orange", 
    "purple", 
    "red", 
    "silver", 
    "teal", 
    "yellow"
  ]
  const color_picker = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  }

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
     
      // console.log("impresion de dataset");
      // console.log(measurementsPerYears);
      setMeditionsVal(measurementsPerYears);
    }
  }, [meditions]);

   //-------------------------------------------------------------------------------
      //-+-------------------------Alternativa 1 --------------------------------------
      let meds_per_val = [];
      vals.forEach((v) => {
        let meds = [];
        meditions.forEach((m) => {
          let vals_m = []
          m.valores_factor.forEach((v_m) => {
            vals_m = [...vals_m,v_m.valor]
          })
          if (vals_m.includes(v)) meds = [...meds, m];
        });
        meds_per_val = [...meds_per_val, meds];
      });

      let datasets_alternativo= []
      for (let i = 0; i < meds_per_val.length; i++) {
        let data_pivot = {label : vals[i], backgroundColor: color_picker() ,data : []}
        meds_per_val[i].forEach((m) => {
          data_pivot.data = [...data_pivot.data, m.valor_medicion]
        })
        datasets_alternativo = [...datasets_alternativo, data_pivot]
      }



      //-------------------------------------------------------------------------------

  const basicData = {
    labels: uniqueYearsArr,
    datasets: datasets_alternativo,
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

import * as React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { IBarChartField } from "./IBarChartField";
import { Div } from "../common/style/Div/div.style";
import { getData } from "../common/function/getData";

const BarChartField: React.FC<IBarChartField> = ({
  bruteforceData,
  setBruteforceData,
  setIsLoading,
  deepQLearningData,
  setDeepQLearningData,
}) => {
  Chart.register(...registerables);
  // const deepQUpdated = deepQLearningData.reward[0]

  const dataLine = {
    labels: ["Reward"],
    borderColor: "red",
    // xAxisID: [10, 11],
    datasets: [
      {
        label: "Bruteforce",
        data: [bruteforceData.reward],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        // yAxisID: "y",
      },
      {
        label: "QLearning",
        data: [0],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgb(54, 162, 235)",
        // yAxisID: "y2",
      },
      {
        label: "DeepQLearning",
        data: [deepQLearningData.reward],
        borderColor: "rgb(255, 205, 86)",
        backgroundColor: "rgb(255, 205, 86)",
      },
    ],
  };

  return (
    <>
      <Div
        display="flex"
        justifyContent="center"
        borderRadius="50px"
        boxShadow="20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff"
        margin="5%"
      >
        <Div width="70%" margin="5%">
          <Bar data={dataLine} />
        </Div>
      </Div>
    </>
  );
};

export default BarChartField;

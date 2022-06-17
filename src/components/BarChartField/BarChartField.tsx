import * as React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { IBarChartField } from "./IBarChartField";
import { Div } from "../common/style/Div/div.style";

const BarChartField: React.FC<IBarChartField> = ({
  bruteforceData,
  deepQLearningData,
  QLearningData,
  label,
}) => {
  Chart.register(...registerables);

  const dataLine = {
    labels: [label],
    borderColor: "red",
    // xAxisID: [10, 11],
    datasets: [
      {
        label: "Bruteforce",
        data: [
          label === "reward"
            ? bruteforceData.reward
            : label === "epochs"
            ? bruteforceData.epochs
            : label === "penalty"
            ? bruteforceData.pena
            : label === "execution"
            ? bruteforceData.timeLoading
            : bruteforceData.state,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        // yAxisID: "y",
      },
      {
        label: "QLearning",
        data: [
          // label === "reward"
          // ? bruteforceData.reward
          // :
          label === "epochs"
            ? QLearningData.epochs
            : label === "penalty"
            ? QLearningData.pena
            : label === "execution"
            ? QLearningData.timeLoading
            : QLearningData.epi,
        ],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgb(54, 162, 235)",
        // yAxisID: "y2",
      },
      {
        label: "DeepQLearning",
        data: [
          label === "reward"
            ? deepQLearningData.reward
            : // : label === "epochs"
            // ? deepQLearningData.epochs
            // : label === "penalty"
            // ? deepQLearningData.pena :
            label === "execution"
            ? deepQLearningData.timeLoading
            : deepQLearningData.step,
        ],
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

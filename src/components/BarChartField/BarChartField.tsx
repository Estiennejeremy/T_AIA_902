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
        label: `Bruteforce ${
          label === "reward"
            ? bruteforceData.reward
            : label === "number of actions realised"
            ? bruteforceData.epochs
            : label === "penalty"
            ? bruteforceData.pena
            : bruteforceData.timeLoading
        }`,
        data: [
          label === "reward"
            ? bruteforceData.reward
            : label === "number of actions realised"
            ? bruteforceData.epochs
            : label === "penalty"
            ? bruteforceData.pena
            : bruteforceData.timeLoading,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        // yAxisID: "y",
      },
      {
        label: `QLearning ${
          label === "number of actions realised"
            ? QLearningData.epochs
            : label === "penalty"
            ? QLearningData.pena
            : QLearningData.timeLoading
        }`,
        data: [
          // label === "reward"
          // ? bruteforceData.reward
          // :
          label === "number of actions realised"
            ? QLearningData.epochs
            : label === "penalty"
            ? QLearningData.pena
            : QLearningData.timeLoading,
        ],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgb(54, 162, 235)",
        // yAxisID: "y2",
      },
      {
        label: `DeepQLearning ${
          label === "reward"
            ? deepQLearningData.reward
            : label === "number of actions realised"
            ? deepQLearningData.step
            : label === "penalty"
            ? deepQLearningData.pena
            : deepQLearningData.timeLoading
        }`,
        data: [
          label === "reward"
            ? deepQLearningData.reward
            : label === "number of actions realised"
            ? deepQLearningData.step
            : label === "penalty"
            ? deepQLearningData.pena
            : deepQLearningData.timeLoading,
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

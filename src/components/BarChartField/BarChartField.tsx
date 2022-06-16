import * as React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { IBarChartField } from "./IBarChartField";
import { Div } from "../common/style/Div/div.style";
import { TBruteforce } from "../common/types.ts/TBruteforce";
import { getData } from "../common/function/getData";

const BarChartField: React.FC<IBarChartField> = ({ range }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [bruteforceData, setBruteforceData] = React.useState<
    TBruteforce | undefined
  >();

  React.useEffect(() => {
    getData("bruteforce", setBruteforceData, setIsLoading);
    console.log("bruteforceData", bruteforceData);
  }, [bruteforceData]);

  Chart.register(...registerables);

  const firstValue: number = Math.floor(range.episodes / 5);
  const secondValue: number = Math.floor((range.episodes / 5) * 2);
  const thirdValue: number = Math.floor((range.episodes / 5) * 3);
  const fourthValue: number = Math.floor((range.episodes / 5) * 4);

  const labels: string[] = [
    "0",
    firstValue.toString(),
    secondValue.toString(),
    thirdValue.toString(),
    fourthValue.toString(),
    range.episodes.toString(),
  ];

  const dataLine = {
    labels: labels,
    borderColor: "red",
    // xAxisID: [10, 11],
    datasets: [
      {
        label: "bruteforce",
        data: [10, 5, 2, 20, 30, 45],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        // yAxisID: "y",
      },
      {
        label: "sarsa",
        data: [20, 2, 5, 40, 25, 30],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgb(54, 162, 235)",
        // yAxisID: "y2",
      },
      {
        label: "q-learning",
        data: [10, 20, 50, 20, 36, 20],
        borderColor: "rgb(255, 205, 86)",
        backgroundColor: "rgb(255, 205, 86)",
      },
    ],
  };

  if (isLoading) {
    return <div>Is Loading</div>;
  }

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

import * as React from "react";
import BarChartField from "./components/BarChartField/BarChartField";
// import ChartField from "./components/ChartField/ChartField";
import { Div } from "./components/common/style";
import Parameters from "./components/Parameters/Parameters";
import "./App.css";
import { TPostData } from "./components/common/types/TPostData";
import { TBruteforce } from "./components/common/types/TBruteforce";
import { TQLearning } from "./components/common/types/TQLearning";
import { TDeepQLearning } from "./components/common/types/TDeepQLearning";
import { getData } from "./components/common/function/getData";

const App: React.FC = () => {
  const [range, setRange] = React.useState<TPostData>({
    alpha: 0.1,
    gamma: 0.1,
    epsilon: 0.1,
    episodes: 10,
  });
  const [bruteforceData, setBruteforceData] = React.useState<
    TBruteforce | undefined
  >();
  const [QLearningData, setQLearningData] = React.useState<
    TQLearning | undefined
  >({ epochs: 22, pena: 24, epi: 26 });
  const [deepQLearningData, setDeepQLearningData] = React.useState<
    TDeepQLearning | undefined
  >();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getData("bruteforce", setBruteforceData, setIsLoading);
    getData("deepQ", setDeepQLearningData, setIsLoading);
  }, [setBruteforceData, setDeepQLearningData, setIsLoading]);
  console.log("deepQLearningData", deepQLearningData);

  console.log("bruteforceData", bruteforceData);

  return (
    <Div className="App">
      {isLoading ? (
        <div>Is Loading</div>
      ) : (
        <>
          <Parameters
            range={range}
            setRange={setRange}
            setIsLoading={setIsLoading}
          />
          {/* <ChartField range={range} /> */}
          {bruteforceData && QLearningData && deepQLearningData && (
            <BarChartField
              bruteforceData={bruteforceData}
              setBruteforceData={setBruteforceData}
              setIsLoading={setIsLoading}
              deepQLearningData={deepQLearningData}
              setDeepQLearningData={setDeepQLearningData}
            />
          )}
        </>
      )}
    </Div>
  );
};

export default App;

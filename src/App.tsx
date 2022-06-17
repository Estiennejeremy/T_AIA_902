import * as React from "react";
import BarChartField from "./components/BarChartField/BarChartField";
import { Div } from "./components/common/style";
import Parameters from "./components/Parameters/Parameters";
import "./App.css";
import { TPostData } from "./components/common/types/TPostData";
import { TBruteforce } from "./components/common/types/TBruteforce";
import { TQLearning } from "./components/common/types/TQLearning";
import { TDeepQLearning } from "./components/common/types/TDeepQLearning";
import { getBruteForceData } from "./components/common/function/getBruteForceData";
import { getDeepQData } from "./components/common/function/getDeepQData";
import Loading from "./components/Loading/Loading";

const App: React.FC = () => {
  const [range, setRange] = React.useState<TPostData>({
    alpha: 0.1,
    gamma: 0.1,
    epsilon: 0.1,
    episodes: 10,
  });
  const [bruteforceData, setBruteforceData] = React.useState<
    TBruteforce | undefined
  >({
    epochs: 374,
    pena: 130,
    reward: 20,
    state: 410,
    timeLoading: 0.333,
  });
  const [QLearningData, setQLearningData] = React.useState<
    TQLearning | undefined
  >();
  const [deepQLearningData, setDeepQLearningData] = React.useState<
    TDeepQLearning | undefined
  >({
    epsilon: 0.1,
    gamma: 0.99,
    pena: 0,
    reward: 8,
    step: 13,
    timeLoading: 0.713,
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    // getDeepQData(setDeepQLearningData, setIsLoading);
    // getBruteForceData(setBruteforceData, setIsLoading);
  }, [setBruteforceData, setDeepQLearningData, setIsLoading]);

  console.log("bruteforceData", bruteforceData);
  console.log("deepQLearningData", deepQLearningData);
  console.log("QLearningData", QLearningData);

  return (
    <Div className="App">
      <Parameters
        range={range}
        setRange={setRange}
        setIsLoading={setIsLoading}
        setQLearningData={setQLearningData}
        deepQLearningData={deepQLearningData}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {bruteforceData && QLearningData && deepQLearningData && (
            <Div display="flex" flexWrap="wrap">
              {/* <Div width="50%">
                <BarChartField
                  bruteforceData={bruteforceData}
                  deepQLearningData={deepQLearningData}
                  QLearningData={QLearningData}
                  label="reward"
                /> 
              </Div>*/}
              <Div width="50%">
                <BarChartField
                  bruteforceData={bruteforceData}
                  deepQLearningData={deepQLearningData}
                  QLearningData={QLearningData}
                  label="epochs"
                />
              </Div>
              <Div width="50%">
                <BarChartField
                  bruteforceData={bruteforceData}
                  deepQLearningData={deepQLearningData}
                  QLearningData={QLearningData}
                  label="penalty"
                />
              </Div>
              {/* <Div width="50%">
                <BarChartField
                  bruteforceData={bruteforceData}
                  deepQLearningData={deepQLearningData}
                  QLearningData={QLearningData}
                  label="episode"
                />
              </Div> */}
              <Div width="50%">
                <BarChartField
                  bruteforceData={bruteforceData}
                  deepQLearningData={deepQLearningData}
                  QLearningData={QLearningData}
                  label="execution"
                />
              </Div>
            </Div>
          )}
        </>
      )}
    </Div>
  );
};

export default App;

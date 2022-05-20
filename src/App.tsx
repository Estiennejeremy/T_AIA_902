import * as React from "react";
import BarChartField from "./components/BarChartField/BarChartField";
import ChartField from "./components/ChartField/ChartField";
import { Div } from "./components/common/style";
import Parameters from "./components/Parameters/Parameters";
import "./App.css";

const App: React.FC = () => {
  const [range, setRange] = React.useState<{ [key: string]: number }>({
    alpha: 0.1,
    gamma: 0.1,
    epsilon: 0.1,
    episode: 10,
  });
  return (
    <Div className="App">
      <Parameters range={range} setRange={setRange} />
      <ChartField range={range} />
      <BarChartField range={range} />
    </Div>
  );
};

export default App;

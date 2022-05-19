import * as React from "react";
import "./App.css";
import ChartField from "./components/ChartField/ChartField";
import { Div } from "./components/common/style";
import RangeField from "./components/RangeField/RangeField";

const App: React.FC = () => {
  const [range, setRange] = React.useState<{ [key: string]: number }>({
    alpha: 0.1,
    gamma: 0.1,
    epsilon: 0.1,
    episode: 10,
  });
  return (
    <Div className="App">
      <RangeField range={range} setRange={setRange} />
      <ChartField range={range} />
    </Div>
  );
};

export default App;

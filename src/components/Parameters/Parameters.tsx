import * as React from "react";
import { Div } from "../common/style";
import DeepQLearningField from "./DeepQLearningField/DeepQLearningField";
import RangeField from "./RangeField/RangeField";
import { IParameters } from "./IParameters";

const Parameters: React.FC<IParameters> = ({
  range,
  setRange,
  setIsLoading,
  setQLearningData,
  deepQLearningData,
}) => {
  return (
    <Div display="flex" justifyContent="space-around" flexWrap="wrap">
      <Div margin="2%">
        <RangeField
          range={range}
          setRange={setRange}
          setIsLoading={setIsLoading}
          setQLearningData={setQLearningData}
        />
      </Div>
      <Div margin="2%">
        <DeepQLearningField deepQLearningData={deepQLearningData} />
      </Div>
    </Div>
  );
};

export default Parameters;

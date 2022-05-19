import * as React from "react";
import { Div, Input, Text } from "../../common/style";
import { ITextField } from "./ITextField";

const TextField: React.FC<ITextField> = ({
  title,
  range,
  value,
  setRange,
  min,
  max,
  step,
  text,
}) => {
  return (
    <Div margin="50px">
      <Div display="flex" alignItems="start">
        <Text width="200px">{title}</Text>
        <Div>
          <Input
            type="range"
            min={min}
            max={max}
            step={step}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setRange({ ...range, [text]: e.target.valueAsNumber });
            }}
            value={value}
          />
          <Div display="flex" justifyContent="space-between">
            <Text margin="10px" fontSize="1.5em">
              {min}
            </Text>
            <Text margin="10px" fontSize="1.5em">
              {max}
            </Text>
          </Div>
        </Div>
        <Text margin="10px 50px" width="50px" fontSize="2em">
          {range.alpha}
        </Text>
      </Div>
    </Div>
  );
};

export default TextField;

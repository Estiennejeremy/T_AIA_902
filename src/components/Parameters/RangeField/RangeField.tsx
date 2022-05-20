import * as React from "react";
import { IRangeField } from "./IRangeField";
import { Button, Input, Text, Div } from "../../common/style";

const RangeField: React.FC<IRangeField> = ({ range, setRange }) => {
  return (
    <>
      <form>
        <Div
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          borderRadius="50px"
          boxShadow="20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff"
        >
          <Div margin="5%">
            <Div display="flex" alignItems="start" borderRadius="20px">
              <Text width="250px" fontSize="1.2em" margin="10px">
                Alpha(learning rate)
              </Text>
              <Div>
                <Input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setRange({ ...range, alpha: e.target.valueAsNumber });
                  }}
                  value={range.alpha}
                />
                <Div display="flex" justifyContent="space-between">
                  <Text margin="10px" fontSize="1.5em">
                    0,1
                  </Text>
                  <Text margin="10px" fontSize="1.5em">
                    2
                  </Text>
                </Div>
              </Div>
              <Text
                margin="0 50px"
                width="50px"
                fontSize="2em"
                color="black"
                // color="#81cbd4"
              >
                {range.alpha}
              </Text>
            </Div>

            <Div display="flex" alignItems="start" borderRadius="20px">
              <Text width="250px" fontSize="1.2em" margin="10px">
                Gamma
              </Text>
              <Div>
                <Input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setRange({ ...range, gamma: e.target.valueAsNumber });
                  }}
                  value={range.gamma}
                />
                <Div display="flex" justifyContent="space-between">
                  <Text margin="10px" fontSize="1.5em">
                    0,1
                  </Text>
                  <Text margin="10px" fontSize="1.5em">
                    2
                  </Text>
                </Div>
              </Div>
              <Text
                margin="0 50px"
                width="50px"
                fontSize="2em"
                color="black"
                // color="#81cbd4"
              >
                {range.gamma}
              </Text>
            </Div>
            <Div display="flex" alignItems="start">
              <Text width="250px" fontSize="1.2em" margin="10px">
                Epsilon
              </Text>
              <Div>
                <Input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setRange({ ...range, epsilon: e.target.valueAsNumber });
                  }}
                  value={range.epsilon}
                />
                <Div display="flex" justifyContent="space-between">
                  <Text margin="10px" fontSize="1.5em">
                    0,1
                  </Text>
                  <Text margin="10px" fontSize="1.5em">
                    2
                  </Text>
                </Div>
              </Div>
              <Text
                margin="0 50px"
                width="50px"
                fontSize="2em"
                color="black"
                // color="#81cbd4"
              >
                {range.epsilon}
              </Text>
            </Div>

            <Div display="flex" alignItems="start">
              <Text width="250px" fontSize="1.2em" margin="10px">
                Episodes
              </Text>
              <Div>
                <Input
                  type="range"
                  min="10"
                  max="20000"
                  step="10"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setRange({ ...range, episode: e.target.valueAsNumber });
                  }}
                  value={range.episode}
                />
                <Div display="flex" justifyContent="space-between">
                  <Text margin="10px" fontSize="1.5em">
                    10
                  </Text>
                  <Text margin="10px" fontSize="1.5em">
                    20000
                  </Text>
                </Div>
              </Div>
              <Text
                margin="0 50px"
                width="50px"
                fontSize="2em"
                color="black"
                // color="#81cbd4"
              >
                {range.episode}
              </Text>
            </Div>
          </Div>
          <Div display="flex" alignItems="center" margin="50px">
            <Button type="submit">Submit</Button>
          </Div>
        </Div>
      </form>
    </>
  );
};

export default RangeField;
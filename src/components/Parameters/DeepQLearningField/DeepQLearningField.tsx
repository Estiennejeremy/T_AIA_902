import * as React from "react";
import { Input, Text, Div } from "../../common/style";
import { IDeepQLearningField } from "./IDeepQLearningField";

const DeepQLearningField: React.FC<IDeepQLearningField> = ({ range }) => {
  return (
    <Div
      display="flex"
      flexDirection="column"
      borderRadius="50px"
      boxShadow="20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff"
    >
      <h1>Deep Q Learning</h1>

      <Div margin="50px">
        <Div display="flex" alignItems="start" borderRadius="20px">
          <Text width="250px" fontSize="1.2em" margin="10px" disabled>
            Alpha(learning rate)
          </Text>
          <Div>
            <Input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={range.alpha}
              onChange={() => {}}
              disabled
            />
            <Div display="flex" justifyContent="space-between">
              <Text margin="10px" fontSize="1.5em" disabled>
                0,1
              </Text>
              <Text margin="10px" fontSize="1.5em" disabled>
                2
              </Text>
            </Div>
          </Div>
          <Text margin="0 50px" width="50px" fontSize="2em" disabled>
            {range.alpha}
          </Text>
        </Div>

        <Div display="flex" alignItems="start" borderRadius="20px">
          <Text width="250px" fontSize="1.2em" margin="10px" disabled>
            Gamma
          </Text>
          <Div>
            <Input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={range.gamma}
              onChange={() => {}}
              disabled
            />
            <Div display="flex" justifyContent="space-between">
              <Text margin="10px" fontSize="1.5em" disabled>
                0,1
              </Text>
              <Text margin="10px" fontSize="1.5em" disabled>
                2
              </Text>
            </Div>
          </Div>
          <Text margin="0 50px" width="50px" fontSize="2em" disabled>
            {range.gamma}
          </Text>
        </Div>
        <Div display="flex" alignItems="start">
          <Text width="250px" fontSize="1.2em" margin="10px" disabled>
            Epsilon
          </Text>
          <Div>
            <Input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={range.epsilon}
              onChange={() => {}}
              disabled
            />
            <Div display="flex" justifyContent="space-between">
              <Text margin="10px" fontSize="1.5em" disabled>
                0,1
              </Text>
              <Text margin="10px" fontSize="1.5em" disabled>
                2
              </Text>
            </Div>
          </Div>
          <Text margin="0 50px" width="50px" fontSize="2em" disabled>
            {range.epsilon}
          </Text>
        </Div>

        <Div display="flex" alignItems="start">
          <Text width="250px" fontSize="1.2em" margin="10px" disabled>
            Episodes
          </Text>
          <Div>
            <Input
              type="range"
              min="10"
              max="20000"
              step="10"
              value={range.episode}
              onChange={() => {}}
              disabled
            />
            <Div display="flex" justifyContent="space-between">
              <Text margin="10px" fontSize="1.5em" disabled>
                10
              </Text>

              <Text margin="10px" fontSize="1.5em" disabled>
                20000
              </Text>
            </Div>
          </Div>
          <Text margin="0 50px" width="50px" fontSize="2em" disabled>
            {range.episode}
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default DeepQLearningField;

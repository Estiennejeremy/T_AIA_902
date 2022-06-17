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
      <Div display="flex" alignItems="start" borderRadius="20px">
        <Text width="250px" fontSize="1.2em" margin="10px" disabled>
          Episodes
        </Text>

        <Text margin="0 50px" width="50px" fontSize="2em" disabled>
          100000
        </Text>
      </Div>
    </Div>
  );
};

export default DeepQLearningField;

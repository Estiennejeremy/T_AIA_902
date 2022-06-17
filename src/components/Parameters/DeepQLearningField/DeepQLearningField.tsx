import * as React from "react";
import { Text, Div } from "../../common/style";
import { IDeepQLearningField } from "./IDeepQLearningField";

const DeepQLearningField: React.FC<IDeepQLearningField> = () => {
  return (
    <Div
      display="flex"
      flexDirection="column"
      borderRadius="50px"
      boxShadow="20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff"
      width="700px"
      height="70vh"
    >
      <h1>Deep Q Learning</h1>
      <Div margin="2%">
        <Div
          display="flex"
          justifyContent="space-around"
          borderRadius="20px"
          margin="50px 0px"
        >
          <Text width="200px" fontSize="1.2em" margin="10px" disabled>
            Alpha(learning rate)
          </Text>

          <Text
            margin="0 50px"
            width="50px"
            fontSize="2em"
            color="black"
            // color="#81cbd4"
            disabled
          >
            ????
          </Text>
        </Div>

        <Div
          display="flex"
          justifyContent="space-around"
          borderRadius="20px"
          margin="50px 0px"
        >
          <Text width="200px" fontSize="1.2em" margin="10px" disabled>
            Gamma
          </Text>

          <Text
            margin="0 50px"
            width="50px"
            fontSize="2em"
            color="black"
            // color="#81cbd4"
            disabled
          >
            ????
          </Text>
        </Div>
        <Div display="flex" justifyContent="space-around" margin="50px 0px">
          <Text width="200px" fontSize="1.2em" margin="10px" disabled>
            Epsilon
          </Text>

          <Text
            margin="0 50px"
            width="50px"
            fontSize="2em"
            color="black"
            // color="#81cbd4"
            disabled
          >
            ????
          </Text>
        </Div>

        <Div display="flex" justifyContent="space-around" margin="50px 0px">
          <Text width="200px" fontSize="1.2em" margin="10px" disabled>
            Episodes
          </Text>

          <Text
            margin="0 50px"
            width="50px"
            fontSize="2em"
            color="black"
            disabled
            // color="#81cbd4"
          >
            100000
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default DeepQLearningField;

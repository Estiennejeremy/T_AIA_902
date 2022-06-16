import { TQLearning } from "../common/types.ts/TQLearning";

export interface IParameters {
  range: TQLearning;
  setRange: React.Dispatch<React.SetStateAction<TQLearning>>;
}

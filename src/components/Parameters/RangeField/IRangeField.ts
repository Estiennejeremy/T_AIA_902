import { TQLearning } from "../../common/types.ts/TQLearning";

export interface IRangeField {
  range: TQLearning;
  setRange: React.Dispatch<React.SetStateAction<TQLearning>>;
}

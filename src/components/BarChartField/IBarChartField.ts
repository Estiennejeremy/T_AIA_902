import { TBruteforce } from "../common/types/TBruteforce";
import { TDeepQLearning } from "../common/types/TDeepQLearning";
import { TQLearning } from "../common/types/TQLearning";

export interface IBarChartField {
  bruteforceData: TBruteforce;
  deepQLearningData: TDeepQLearning;
  QLearningData: TQLearning;
  label: string;
}

import { TBruteforce } from "../common/types/TBruteforce";
import { TDeepQLearning } from "../common/types/TDeepQLearning";

export interface IBarChartField {
  // range: TQLearning;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  bruteforceData: TBruteforce;
  setBruteforceData: React.Dispatch<
    React.SetStateAction<TBruteforce | undefined>
  >;
  deepQLearningData: TDeepQLearning;
  setDeepQLearningData: React.Dispatch<
    React.SetStateAction<TDeepQLearning | undefined>
  >;
}

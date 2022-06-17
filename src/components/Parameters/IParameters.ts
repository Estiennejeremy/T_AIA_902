import { TPostData } from "../common/types/TPostData";
import { TQLearning } from "../common/types/TQLearning";

export interface IParameters {
  range: TPostData;
  setRange: React.Dispatch<React.SetStateAction<TPostData>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setQLearningData: React.Dispatch<
    React.SetStateAction<TQLearning | undefined>
  >;
}

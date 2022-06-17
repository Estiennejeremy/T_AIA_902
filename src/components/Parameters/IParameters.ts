import { TPostData } from "../common/types/TPostData";

export interface IParameters {
  range: TPostData;
  setRange: React.Dispatch<React.SetStateAction<TPostData>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

import { TPostData } from "../../common/types/TPostData";

export interface IRangeField {
  range: TPostData;
  setRange: React.Dispatch<React.SetStateAction<TPostData>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

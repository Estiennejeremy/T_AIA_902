import axios, { AxiosError, AxiosResponse } from "axios";
import { TPostData } from "../types/TPostData";

export function postData(
  data: TPostData,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setIsLoading(true);
  axios
    .post(`http://api.damned-i-am-lost.com/qlearning`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result: AxiosResponse<TPostData>): TPostData => {
      setIsLoading(false);
      return result.data;
    })
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        setIsLoading(false);
        console.log(`error.response`, error.response);
      }
    });
}

import axios, { AxiosError, AxiosResponse } from "axios";
import { TPostData } from "../types/TPostData";
import { TQLearning } from "../types/TQLearning";

export function postData(
  data: TPostData,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setQLearningData: React.Dispatch<React.SetStateAction<TQLearning | undefined>>
) {
  setIsLoading(true);
  const startCalcul = Date.now();
  axios
    .post(`http://api.damned-i-am-lost.com/qlearning`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result: AxiosResponse<any>): TQLearning => {
      setIsLoading(false);
      const endCalcul = Date.now();
      const timeLoading = endCalcul - startCalcul;
      setQLearningData({
        // reward: result.data.data.reward,
        epochs: result.data.data.epochs,
        pena: result.data.data.pena,
        epi: result.data.data.epi,
        timeLoading: timeLoading,
      });
      return result.data;
    })
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        setIsLoading(false);
        console.log(`error.response`, error.response);
      }
    });
}

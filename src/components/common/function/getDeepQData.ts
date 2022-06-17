import axios, { AxiosError, AxiosResponse } from "axios";
import { TDeepQLearning } from "../types/TDeepQLearning";

export function getDeepQData(
  setData: React.Dispatch<React.SetStateAction<TDeepQLearning | undefined>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  const startCalcul = Date.now();
  axios
    .get(`http://api.damned-i-am-lost.com/deepQ`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result: AxiosResponse<any>) => {
      const endCalcul = Date.now();
      const timeLoading = endCalcul - startCalcul;
      setIsLoading(false);

      setData({
        reward: result.data.reward[0],
        // epochs: result.data.data.epochs,
        // pena: result.data.data.pena,
        step: result.data.steps[0],
        timeLoading: timeLoading,
      });
    })
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        setIsLoading(false);
        console.log(`error.response`, error.response);
      }
    });
}

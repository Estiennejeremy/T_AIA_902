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
      const timeLoading = (endCalcul - startCalcul) / 1000;
      setIsLoading(false);
      console.log("result", result);
      setData({
        reward: result.data.reward,
        // epochs: result.data.data.epochs,
        pena: result.data.pena,
        step: result.data.steps,
        epsilon: result.data.epsilon,
        gamma: result.data.gamma,
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

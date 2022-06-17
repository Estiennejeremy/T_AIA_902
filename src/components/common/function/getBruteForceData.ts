import axios, { AxiosError, AxiosResponse } from "axios";
import { TBruteforce } from "../types/TBruteforce";

export function getBruteForceData(
  setData: React.Dispatch<React.SetStateAction<TBruteforce | undefined>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  const startCalcul = Date.now();
  axios
    .get(`http://api.damned-i-am-lost.com/bruteforce`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result: AxiosResponse<any>) => {
      const endCalcul = Date.now();
      const timeLoading = endCalcul - startCalcul;
      setIsLoading(false);
      setData({
        reward: result.data.data.reward,
        epochs: result.data.data.epochs,
        pena: result.data.data.pena,
        state: result.data.data.state,
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

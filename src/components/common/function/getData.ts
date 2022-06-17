import axios, { AxiosError, AxiosResponse } from "axios";
import { TBruteforce } from "../types/TBruteforce";
import { TDeepQLearning } from "../types/TDeepQLearning";

export function getData(
  path: string,
  setData: React.Dispatch<React.SetStateAction<any | undefined>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  axios
    .get(`http://api.damned-i-am-lost.com/${path}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result: AxiosResponse<any>) => {
      setData(result.data.data);
      setIsLoading(false);
    })
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        setIsLoading(false);
        console.log(`error.response`, error.response);
      }
    });
}

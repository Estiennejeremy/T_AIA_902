import axios, { AxiosError, AxiosResponse } from "axios";
import { TBruteforce } from "../types.ts/TBruteforce";

export function getData(
  path: string,
  setData: React.Dispatch<React.SetStateAction<TBruteforce | undefined>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  axios
    .get(`https://api.damned-i-am-lost.com/${path}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result: AxiosResponse<TBruteforce>) => {
      setData(result.data);
      setIsLoading(false);
    })
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        setIsLoading(false);
        console.log(`error.response`, error.response);
      }
    });
}

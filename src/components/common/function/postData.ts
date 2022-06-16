import axios, { AxiosError, AxiosResponse } from "axios";
import { TQLearning } from "../types.ts/TQLearning";

export function postData(data: TQLearning) {
  axios
    .post(`https://api.damned-i-am-lost.com/qlearning`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result: AxiosResponse<TQLearning>): TQLearning => result.data)
    .catch((error: AxiosError<any>): void => {
      if (error.response) {
        console.log(`error.response`, error.response);
      }
    });
}

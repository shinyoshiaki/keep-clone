import { useState } from "react";
import axios from "axios";

const url =
  process.env.NODE_ENV === "production"
    ? "https://echosome.tk:9443"
    : "http://localhost:1323";

export const req = axios.create({ baseURL: url });

export function useApi<A, T>(
  url: string,
  dir: string,
  initialArg: A,
  initialData: T
) {
  const req = axios.create({ baseURL: url });
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false as any);
  const [arg, setArg] = useState(initialArg);

  async function fetchData(arg: A) {
    setArg(arg);
    setIsLoading(true);
    const res = await req.post(dir, arg).catch(e => setIsError(e));
    if (res) {
      setData(res.data);
    }
    setIsLoading(false);
  }

  return { data, isLoading, isError, fetchData, arg };
}

export function useKeepApi<A, T>(dir: string, initialArg: A, initialData: T) {
  return useApi(url, dir, initialArg, initialData);
}

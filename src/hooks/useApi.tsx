import { useState } from "react";
import axios from "axios";

const url =
  process.env.NODE_ENV === "production"
    ? "https://echosome.tk:9443"
    : "http://localhost:1323";

export const req = axios.create({ baseURL: url });

export function useApi<T>(url: string, dir: string, initialData: T) {
  const req = axios.create({ baseURL: url });
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false as any);

  const fetchData = async (arg: any) => {
    setIsLoading(true);
    const res = await req.post(dir, arg).catch(e => setIsError(e));
    if (res) {
      setData(res.data);
    }
    setIsLoading(false);
  };

  return { data, isLoading, isError, fetchData };
}

export function useKeepApi<T>(dir: string, initialData: T) {
  return useApi(url, dir, initialData);
}

import { useEffect, useState } from "react";

export type Status = "loading" | "error" | "idle" | "success";

export const useFetch = <T>(
  fnQuery: () => Promise<T>,
  dependencies?: string
) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const fetchData = async () => {
    try {
      setStatus("loading");
      const data = await fnQuery();
      setData(data);
      setStatus("idle");
    } catch (err: any) {
      setStatus("error");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dependencies]);

  return { data, setData, status };
};

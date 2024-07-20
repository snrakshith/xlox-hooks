// const { data, error } = useSWR('/api', fetcher)

import { useEffect, useState } from "react";

export function useSWR(endpoint: string, fetcher: any) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const fetchRequest = fetcher(endpoint);

  useEffect(() => {
    if (fetchRequest instanceof Promise) {
      Promise.resolve(fetchRequest)
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, []);

  return {
    data,
    error,
  };
}

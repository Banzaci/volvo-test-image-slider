import { useEffect, useState } from "react";

const useAsync = <T>(url: string) => {
  const [data, setData] = useState<T[] | null>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      if (!response.ok) {
        setError('Something went wrong')
      } else {
        setData(await response.json())
      }
      setLoading(false)
    })()
  }, [url])

  return { data, loading, error } as const;
}

export default useAsync;
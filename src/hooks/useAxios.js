import { useCallback, useEffect, useState } from "react";

export const useAxios = (dataFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const request = useCallback(async () => {

    try {
      const response = await dataFunc();
      setData(response);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [dataFunc]);
  
  useEffect(() => {
    request();
  }, [request])

  return { request, data, loading, error };
};

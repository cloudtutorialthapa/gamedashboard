import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genre {
  id: number;
  name: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenre] = useState<Genre[]>();

  const [error, setError] = useState('');
  const [isLoading, setLoadding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoadding(true);
    apiClient
      .get<FetchGenresResponse>('/games', { signal: controller.signal })
      .then((res) => {
        setGenre(res.data?.results);
        setLoadding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoadding(false);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;

import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FecthingGenres {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FecthingGenres>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { genres, error, loading };
};

export default useGenre;

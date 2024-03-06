import { useEffect, useState } from "react";
import { Result } from "../types/Result.type";
import { Movies } from "../types/Movies.type";

const useMovieData = (
  url: string,
  apiKey: string
): [Result[], () => void, Error | null] => {
  const [movieData, setMovieData] = useState<Result[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const getMovies = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Erro ao buscar filmes");
      }
      const data: Movies = await res.json();
      const moviesInfo: Result[] = data.results.filter(
        (movie: Result) => movie.overview !== ""
      );
      setMovieData(moviesInfo);
      setError(null);
    } catch (error) {
      setError(error as Error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [url, apiKey]);

  return [movieData, getMovies, error];
};

export default useMovieData;

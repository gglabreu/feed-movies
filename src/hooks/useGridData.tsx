import { useEffect, useState } from "react";
import { process } from "@progress/kendo-data-query";
import { GridPageChangeEvent } from "@progress/kendo-react-grid";
import useMovieData from "./useMovieData";

const useGridData = (moviesUrl: string, category: string, apiKey: string) => {
  const [dataState, setDataState] = useState({
    skip: 0,
    take: 10,
    pageSize: 10,
    page: 1,
  });

  const [topRatedData, getTopRatedMovies] = useMovieData(
    `${moviesUrl}/${category}?language=pt-BR&${apiKey}`,
    apiKey
  );

  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);

  const [result, setResult] = useState(process(topRatedData, dataState));

  useEffect(() => {
    setResult(process(topRatedData, dataState));
  }, [topRatedData, dataState]);

  const onDataStateChange = (event: any) => {
    setDataState(event.dataState);
    setResult(process(topRatedData, event.dataState));
  };

  const onPageChange = (event: GridPageChangeEvent) => {
    setDataState({
      ...dataState,
      skip: event.page.skip,
      take: event.page.take,
      page: event.page.skip / event.page.take + 1,
    });
  };

  return {
    result,
    dataState,
    onDataStateChange,
    onPageChange,
    total: topRatedData.length,
  };
};

export default useGridData;

import { Result } from "./Result.type";

export type Movies = {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

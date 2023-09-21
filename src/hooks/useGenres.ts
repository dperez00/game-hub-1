import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// previous implementation: const useGenres = () => ({ data: genres, isLoading: false, error: null })

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: genres
  // when we provide initialData, this data is inserted into the cache.
  // because we gave a stale time of 24 hours, the data will be fresh for 24 hours.
  // no request will be made to the backend to get the genres because of the stale time.
})

export default useGenres;
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

// previous implementation: const useGenres = () => ({ data: genres, isLoading: false, error: null })

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms("24h"), // 24 hours
  initialData: genres
  // when we provide initialData, this data is inserted into the cache.
  // because we gave a stale time of 24 hours, the data will be fresh for 24 hours.
  // no request will be made to the backend to get the genres because of the stale time.
})

export default useGenres;
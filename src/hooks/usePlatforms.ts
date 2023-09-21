import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//previous implementation: const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// fetch platforms from the backend
const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: {count: platforms.length, results: platforms} // so we don't have to show a spinner or send a request to the backend.
});

export default usePlatforms;

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

//previous implementation: const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// fetch platforms from the backend
const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms("24h"), // 24 hours
  initialData: platforms // so we don't have to show a spinner or send a request to the backend.
});

export default usePlatforms;

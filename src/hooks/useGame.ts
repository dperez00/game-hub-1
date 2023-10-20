import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

// we are using the game interface that is in another hook.
// we dont want one hook to depend on another hook for getting the definition of an interface.

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug)
});

export default useGame;
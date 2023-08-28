import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import Game from "../entities/Game";


const apiClient2 = new ApiClient<Game>('/games')

const useGamesDetails = (slug : string) => useQuery({
    queryKey : ['games',slug],
    queryFn : () => apiClient2.get(slug),
    staleTime : 24 * 60 * 60 * 1000
})

export default useGamesDetails

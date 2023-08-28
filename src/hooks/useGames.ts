import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchRes } from "../services/api-client";
import useGameQueryStore from "../store";
import Game from "../entities/Game";



const apiClient = new ApiClient<Game>('/games')


const useGames = () => {
    
    const {gameQuery} = useGameQueryStore()
    
    return useInfiniteQuery<FetchRes<Game>,Error>({

        queryKey: ['games', gameQuery],
        queryFn: ({pageParam}) => apiClient.getAll({params: {
            page : pageParam,
            genres: gameQuery?.genreId, 
            parent_platforms: gameQuery?.platformId,
            ordering: gameQuery?.ordering, 
            search: gameQuery?.search
        }}),
        staleTime : 24 * 60 * 60 * 1000,
        getNextPageParam : (lastPage,allPages) =>{
            return lastPage.next ? allPages.length + 1 : undefined
        }
    })
}
    
export default useGames
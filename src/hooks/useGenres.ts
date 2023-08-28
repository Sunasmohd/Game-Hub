import { useQuery } from "@tanstack/react-query"
import Genre from "../entities/Genre"
import ApiClient from "../services/api-client"

const apiClient = new ApiClient<Genre>('/genres')


const useGenres = () => useQuery({
    queryKey : ['genres'],
    queryFn : apiClient.getAll,
    staleTime : 24 * 60 * 60 * 1000,
   
})


export default useGenres
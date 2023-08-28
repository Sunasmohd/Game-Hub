import { create } from "zustand";

interface GameQuery {
    genreId? : number;
    platformId? : number;
    ordering? : string
    search? : string
}

interface GameQueryStore {
    gameQuery : GameQuery;
    setGenreId : (genreId:number) => void ;
    setPlatformId : (platformId:number) => void
    setOrdering : (ordering:string) => void
    setSearch : (search:string) => void
}

const useGameQueryStore =  create<GameQueryStore>((set) => ({
    gameQuery : {},
    setGenreId : (genreId) => set((store) => ({gameQuery : {...store.gameQuery,genreId}})),
    setPlatformId : (platformId) => set((store) => ({gameQuery : {...store.gameQuery,platformId}})),
    setOrdering : (ordering) => set((store) => ({gameQuery : {...store.gameQuery,ordering}})),
    setSearch : (search) => set(() => ({gameQuery : {search}})),

}))

export default useGameQueryStore
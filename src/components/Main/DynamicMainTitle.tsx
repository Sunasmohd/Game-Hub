import { Heading } from "@chakra-ui/react"
// import { GameQuery } from "../../App"
import useGenres from "../../hooks/useGenres"
import usePlatforms from "../../hooks/usePlatforms"
import useGameQueryStore from "../../store"



const DynamicMainTitle = () => {

    const genreId = useGameQueryStore(s=>s.gameQuery.genreId)
    const platformId = useGameQueryStore(s=>s.gameQuery.platformId)

    const {data:genre} = useGenres()
    const genres = genre?.results.find(g=>g.id === genreId)  

    const {data:platform} = usePlatforms()
    const platforms = platform?.results.find(p => p.id === platformId)

    const heading = `${platforms?.name || ''} ${genres?.name || ''} Games`
    return (
        <Heading as='h1'>{heading}</Heading>
  )
}

export default DynamicMainTitle
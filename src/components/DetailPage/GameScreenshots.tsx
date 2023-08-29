import { Box, Image, SimpleGrid, Spinner } from "@chakra-ui/react"
import useScreenshots from "../../hooks/useScreenshots"

const GameScreenshots = ({gameId} : {gameId:number}) => {
    
    const {data,isLoading,error} = useScreenshots(gameId)

    if (error) throw Error

    if (isLoading) return <Spinner/>
    return (
       <Box marginY={6}>
        
            <SimpleGrid columns={{base:1,md:2}} spacing={4}>
            {data?.results.map(file=>(<Image key={file.id} src={file.image}></Image>))}
            </SimpleGrid>
        
       </Box>
    )
}

export default GameScreenshots
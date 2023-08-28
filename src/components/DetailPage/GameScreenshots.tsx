import { Box, Image, SimpleGrid } from "@chakra-ui/react"
import useScreenshots from "../../hooks/useScreenshots"

const GameScreenshots = ({gameId} : {gameId:number}) => {
    
    const {data} = useScreenshots(gameId)
    return (
       <Box marginY={6}>
        
            <SimpleGrid columns={{base:1,md:2}} spacing={4}>
            {data?.results.map(file=>(<Image key={file.id} src={file.image}></Image>))}
            </SimpleGrid>
        
       </Box>
    )
}

export default GameScreenshots
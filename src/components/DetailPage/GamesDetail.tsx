import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGamesDetails from '../../hooks/useGamesDetail'
import ExpandableText from './ExpandableText'
import GameAttr from './GameAttr'
import GameTrailer from './GameTrailer'
import GameScreenshots from './GameScreenshots'

const GamesDetail = () => {
  const {id} = useParams()

  const {data:game,error,isLoading} = useGamesDetails(id!)


  if(error) throw error

  if(isLoading) return <Spinner/>

  if(game === undefined) return null
  
  return (
    <>
      <SimpleGrid margin={2} columns={{base:1,md:2}}>
        <Box marginRight={5}>
          <Heading paddingY={4}>{game?.name}</Heading>
          <ExpandableText>
            {game?.description_raw}
          </ExpandableText>
          <GameAttr game={game}></GameAttr>
        </Box>
        
        <Box>
          <GameTrailer gameId={game?.id}></GameTrailer>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </Box>
      </SimpleGrid>
    </>
  )
}

export default GamesDetail
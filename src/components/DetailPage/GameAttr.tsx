import { SimpleGrid, Text } from '@chakra-ui/react'
import Game from "../../entities/Game"
import MetaScore from '../Main/MetaScore'
import DefinitionAttr from './DefinitionAttr'



const GameAttr = ({game}:{game : Game | undefined}) => {
  return (
    <SimpleGrid columns={{
        sm:1,
        md : 2,
        lg:4
      }}>
          <DefinitionAttr term='Platform'>
            {game?.parent_platforms.map(({platform})=><Text key={platform.id}>{platform.name}</Text>)}
          </DefinitionAttr>
          <DefinitionAttr term='Meta Score'>
            <MetaScore score={game?.metacritic!}></MetaScore>
          </DefinitionAttr>
          <DefinitionAttr term='Genres'>
            {game?.genres.map(genre=><Text key={genre.id}>{genre.name}</Text>)}
          </DefinitionAttr>
          <DefinitionAttr term='Publishers'>
            {game?.publishers.map(publisher=><Text key={publisher.id}>{publisher.name}</Text>)}
          </DefinitionAttr>
      </SimpleGrid>
  )
}

export default GameAttr
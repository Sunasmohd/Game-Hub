import { Card,CardBody,HStack,Heading,Image } from "@chakra-ui/react"
import Game from "../../entities/Game"
import PlatformIcons from "./PlatformIcons"
import MetaScore from "./MetaScore"
import cropImage from "../../services/crop-image"
import EmojiRating from "./EmojiRating"


const GameCard = ({game}:{game : Game}) => {
 
  return (
    <>
        <Card borderRadius={10} overflow='hidden'>
            <Image src={cropImage(game.background_image)}></Image>
            <CardBody paddingX={5} paddingTop={1}>
                <HStack justifyContent='space-between'>
                  <PlatformIcons platform={game.parent_platforms.map(({platform})=>platform)}/>
                  <MetaScore score={game.metacritic}></MetaScore>
                </HStack>
                <Heading fontSize='2xl' marginBottom={4}>{game.name}</Heading>
                
                <EmojiRating rating={game.rating_top}></EmojiRating>
            </CardBody>
        </Card>
        
    </>
  )
}

export default GameCard
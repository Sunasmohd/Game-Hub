import bull from '../../assets/bulls-eye.webp'
import meh from '../../assets/meh.webp'
import thumps from '../../assets/thumbs-up.webp'
import { Image, ImageProps } from '@chakra-ui/react'


interface Props{
    rating : number
}
const EmojiRating = ({rating} : Props) => {
  if(rating < 3) return null
  const emojiMap : {[key : number] : ImageProps} = {
    3 : {src : meh, alt : 'meh',boxSize:25},
    4 : {src : thumps, alt : 'good',boxSize:25},
    5 : {src : bull, alt : 'wow',boxSize:35}
  }
  return (
    <>
        <Image {...emojiMap[rating]}></Image>
    </>
  )
}

export default EmojiRating
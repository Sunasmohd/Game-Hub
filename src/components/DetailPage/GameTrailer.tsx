import { Box } from '@chakra-ui/layout'
import useTrailers from '../../hooks/useTrailers'

const GameTrailer = ({gameId} : {gameId:number}) => {

    const {data,error} = useTrailers(gameId)
    
    if (error) throw Error

    const trailer = data?.results[0]

    if (trailer)
        return <Box marginY={5}>
            <video poster={trailer.preview} controls src={trailer.data.max} />
        </Box>
    return null
    
}

export default GameTrailer
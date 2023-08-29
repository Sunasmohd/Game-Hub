import { Box } from '@chakra-ui/layout'
import useTrailers from '../../hooks/useTrailers'
import { Spinner } from '@chakra-ui/react'

const GameTrailer = ({gameId} : {gameId:number}) => {

    const {data,error,isLoading} = useTrailers(gameId)
    
    if (error) throw Error

    if (isLoading) return <Spinner/>

    const trailer = data?.results[0]
    
    if (trailer)
        return <Box marginY={5}>
            <video poster={trailer.preview} controls src={trailer.data.max} />
        </Box>
    return null
    
}

export default GameTrailer
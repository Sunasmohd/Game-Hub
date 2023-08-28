import { Badge } from "@chakra-ui/react"


const MetaScore = ( {score} : {score : number} ) => {
    console.log(' meta render')

    const color = (score > 90) ? "green" : (score > 80) ? "yellow" : "red"

    return (
    <Badge fontSize='14px' borderRadius={2} paddingX={1.5} colorScheme={color}>{score}</Badge>
    )
}

export default MetaScore
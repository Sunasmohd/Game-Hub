import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../../hooks/usePlatforms"
import useGameQueryStore from "../../store"


// interface Props{
//     onSelect : (platforms : Platform) => void
//     selectedButtonId? : number
// }

const DropDown = (
    // {onSelect,selectedButtonId}:Props
    ) => {
    const setPlatformId = useGameQueryStore(s=>s.setPlatformId)
    const selectedButtonId = useGameQueryStore(s=>s.gameQuery.platformId)

    
    const {data,error} = usePlatforms();
    const pl = data?.results.find(g=>g.id === selectedButtonId)
    if(error) return null
    return (

    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} fontSize='lg'>
            {pl?.name ? pl.name : 'Platforms'}
             
        </MenuButton>
        <MenuList>
            {data?.results.map(platforms => (
                <MenuItem onClick={()=>{
                    setPlatformId(platforms.id)
                }} key={platforms.id}>{platforms.name}</MenuItem>
            ))}
        </MenuList>
    </Menu>
  )
}

export default DropDown
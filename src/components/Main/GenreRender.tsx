import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import useGenres from "../../hooks/useGenres"
import useGameQueryStore from "../../store"



const GenreRender = (
    // {onSelect}:{onSelect : (genre:Genre)=>void}
    ) => {
    const {data} = useGenres()
    console.log(' genre render')

    const setGenreId = useGameQueryStore(s=>s.setGenreId)

    return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} fontSize='lg'>Genres</MenuButton>
        <MenuList>
            {data?.results.map(genre=>(
                <MenuItem key={genre.id} onClick={()=>setGenreId(genre.id)}>{genre.name}</MenuItem>
            ))}
        </MenuList>
    </Menu>
    )
}

export default GenreRender
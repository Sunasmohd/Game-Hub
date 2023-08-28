import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../../store'

// interface Props{
//     onSelect : (sortOrder:string) => void
//     sortName : string
// }

const SortByOrdering = (
  // {onSelect,sortName}:Props
  ) => {
  const setOrdering = useGameQueryStore(s=>s.setOrdering)
  
  const sortMap = [
    {value:'',label : 'Relevance'},
    {value:'-released',label : 'Release Date'},
    {value:'name',label : 'Name'},
    {value:'-added',label : 'Date Added'},
    {value:'-rating',label : 'Average Rating'},
    {value:'-metacritic',label : 'Popularity'},
  ]
  // const currentSelected = sortMap.find(order=>order.value === sortName)
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} fontSize='lg'>
            {/* Order By : {currentSelected?.label || 'Relevance'} */}
            Relevance
        </MenuButton>
        <MenuList>
            {sortMap.map(order=>(
                <MenuItem onClick={()=>setOrdering(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>
            ))}
        </MenuList>
    </Menu>
  )
}

export default SortByOrdering
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import useGameQueryStore from "../../store"
import { useNavigate } from "react-router-dom"


const SearchIcon = () => {
  console.log(' search render')

  const setSearch = useGameQueryStore(s => s.setSearch)
  const Navigate = useNavigate()

  const ref = useRef<HTMLInputElement>(null)
  return (
    <form action="" onSubmit={(e)=>{
      e.preventDefault()
      if(ref.current){
        setSearch(ref.current.value)
        Navigate('/')
      }
      
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch/>}></InputLeftElement>
        <Input ref={ref} borderRadius={20} placeholder="Search Games" variant='filled'></Input>
    </InputGroup>
    </form>
  )
}

export default SearchIcon

// import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
// import { useRef } from "react"
// import { BsSearch } from "react-icons/bs"

// interface Props {
//   onSearch : (search : string) => void
// }

// const SearchIcon = ({onSearch}:Props) => {
//   const ref = useRef<HTMLInputElement>(null)
//   return (
//     <form action="" onSubmit={(e)=>{
//       e.preventDefault()
//       if(ref.current) onSearch(ref.current.value)
//     }}>
//       <InputGroup>
//         <InputLeftElement children={<BsSearch/>}></InputLeftElement>
//         <Input ref={ref} borderRadius={20} placeholder="Search Games" variant='filled'></Input>
//     </InputGroup>
//     </form>
//   )
// }

// export default SearchIcon
import { Box, HStack, Image } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"
import logo from "../../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchIcon from "./SearchIcon"


const Navbar = () => {
  return (
    <>
       <HStack padding='15px' spacing={5}> 
            <Link to='/'>
            <Image  src={logo} boxSize='60px'></Image>
            </Link>
            <SearchIcon/>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
        <Box padding={5}>
          <Outlet />
        </Box>
    </>
  )
}

export default Navbar

// import {HStack, Image} from "@chakra-ui/react"
// import ColorModeSwitch from "./ColorModeSwitch"
// import logo from "../../assets/react.svg"
// import SearchIcon from "./SearchIcon"

// interface Props {
//   onSearch : (search : string) => void
// }

// const Navbar = ({onSearch}:Props) => {
//   return (
//     <>
//        <HStack padding='15px' spacing={5}> 
//             <Image src={logo} boxSize='60px'></Image>
//             <SearchIcon onSearch={onSearch}/>
//             <ColorModeSwitch></ColorModeSwitch>
//         </HStack>
//     </>
//   )
// }

// export default Navbar
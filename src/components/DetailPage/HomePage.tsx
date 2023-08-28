import { Box, Grid, GridItem, HStack, Show, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import DynamicMainTitle from "../Main/DynamicMainTitle";
import GameGrid from "../Main/GameGrid";
import GenreRender from "../Main/GenreRender";
import SortByOrdering from "../Main/SortByOrdering";
import DropDown from "../Main/SortByPlatform";
import GenreList from "../SideBar/GenreList";


function HomePage() {
  const [isSmScreen, setIsSmScreen] = useState(false);

  const [isSmScreenQuery] = useMediaQuery("(max-width: 991px)"); // "sm" breakpoint

  useEffect(() => {
    setIsSmScreen(isSmScreenQuery);
  }, [isSmScreenQuery]);


  return (
    <>
      <Grid templateAreas={{
        base : `"nav" "main"`,
        lg : `"nav nav" "left main"`
      }}
      templateColumns={{
        base : '1fr',
        lg : '200px 1fr',
      }}
      // <Grid templateAreas={{
      //   base : `"nav" "main"`,
      //   lg : `"nav nav" "left main"`
      // }}
      // templateColumns={{
      //   base : '1fr',
      //   lg : '200px 1fr',
      // }}
      >
          
          <Show above="lg">
            <GridItem area="left" paddingX={1}>
              <GenreList/>
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box marginLeft={2} marginY={6}>
              <DynamicMainTitle></DynamicMainTitle>
            </Box>
            <HStack spacing={5} marginLeft={2} marginBottom={3}>
              <DropDown></DropDown>
              { isSmScreen && 
              
                <GenreRender></GenreRender>
              }
              
            </HStack>
            <HStack marginLeft={2} marginBottom={2}><SortByOrdering ></SortByOrdering></HStack>
            <GameGrid></GameGrid>
          </GridItem>
      </Grid>
    </>
  )
}

export default HomePage




// import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
// import Navbar from "./components/Navbar/Navbar"
// import GameGrid from "./components/Main/GameGrid"
// import GenreList from "./components/SideBar/GenreList"
// import { useState, useEffect } from "react"
// import DropDown from "./components/Main/SortByPlatform"
// import SortByOrdering from "./components/Main/SortByOrdering"
// import DynamicMainTitle from "./components/Main/DynamicMainTitle"
// import GenreRender from "./components/Main/GenreRender"
// import { useMediaQuery } from "@chakra-ui/react"
// import useGameQueryStore from "./store"

// export interface GameQuery{
//   genreId? : number;
//   platformId? : number;
//   ordering : string
//   search : string
// }

// function HomePage() {
//   const [isSmScreen, setIsSmScreen] = useState(false);

//   const [isSmScreenQuery] = useMediaQuery("(max-width: 991px)"); // "sm" breakpoint

//   useEffect(() => {
//     setIsSmScreen(isSmScreenQuery);
//   }, [isSmScreenQuery]);
//   // const [selectedGenre,setSelectedGenre] = useState<Genre | null>(null);
//   // const [selectedPlatform,setSelectedPlatform] = useState<Platform | null>(null);

//   // const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)
//   const { gameQuery } = useGameQueryStore()

//   return (
//     <>
//       <Grid templateAreas={{
//         base : `"nav" "main"`,
//         lg : `"nav nav" "left main"`
//       }}
//       templateColumns={{
//         base : '1fr',
//         lg : '200px 1fr',
//       }}
//       >
//           <GridItem area="nav">
//             <Navbar onSearch={(search)=>{
//               setGameQuery({...gameQuery,search})
//             }}></Navbar>
//           </GridItem>
//           <Show above="lg">
//             <GridItem area="left" paddingX={5}>
//               <GenreList selectedGenreId={gameQuery.genreId} 
//               onSelect={(genre)=> {
//               // setGameQuery({...gameQuery,genreId:genre.id}
//               return genreId = genre}
//                }/>
//             </GridItem>
//           </Show>
//           <GridItem area="main">
//             <Box marginLeft={4} marginY={6}>
//               <DynamicMainTitle MainTitle={{...gameQuery}}></DynamicMainTitle>
//             </Box>
//             <HStack spacing={5} marginLeft={4} marginBottom={3}>
//               <DropDown selectedButtonId={gameQuery.platformId} onSelect={(platform)=>setGameQuery({...gameQuery,platformId:platform.id})} ></DropDown>
//               { isSmScreen && 
              
//                 <GenreRender  onSelect={(genre)=>setGameQuery({...gameQuery,genreId:genre.id})}></GenreRender>
//               }
              
//             </HStack>
//             <HStack marginLeft={4}><SortByOrdering sortName={gameQuery.ordering} onSelect={(ordering)=>setGameQuery({...gameQuery,ordering})}></SortByOrdering></HStack>
//             <GameGrid gameQuery={gameQuery}></GameGrid>
//           </GridItem>
//       </Grid>
//     </>
//   )
// }

// export default HomePage

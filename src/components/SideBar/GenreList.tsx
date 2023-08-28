import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import cropImage from "../../services/crop-image";
import useGameQueryStore from "../../store";



const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const setGenreId = useGameQueryStore(s=>s.setGenreId)
  const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId)


  if (isLoading) return <Spinner />;

  if (error) return null;
  return (
    <>
      <Heading fontSize='3xl' marginY={3}>Genres</Heading>
      <List>
        {data?.results.map((genres) => (
          <ListItem key={genres.id} paddingY={2}>
            <HStack key={genres.id}>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={cropImage(genres.image_background)}
                objectFit='cover'
              ></Image>
              <Button
                fontWeight = {selectedGenreId === genres.id ? 'bold' : 'normal'}
                variant="link"
                fontSize="md"
                paddingLeft={1}
                onClick={() => setGenreId(genres.id)}
                whiteSpace='normal'
                textAlign='start'
              >
                {genres.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;


// import useGenres, { Genre } from "../../hooks/useGenres";
// import {
//   Button,
//   HStack,
//   Heading,
//   Image,
//   List,
//   ListItem,
//   Spinner,
// } from "@chakra-ui/react";
// import cropImage from "../../services/crop-image";

// interface Props {
//   onSelect: (genre: Genre) => void;
//   selectedGenreId? : number ;
// }

// const GenreList = ({ onSelect,selectedGenreId}: Props) => {
//   const { data, error, isLoading } = useGenres();

//   if (isLoading) return <Spinner />;

//   if (error) return null;
//   return (
//     <>
//       <Heading fontSize='3xl' marginY={3}>Genres</Heading>
//       <List>
//         {data?.results.map((genres) => (
//           <ListItem key={genres.id} paddingY={2}>
//             <HStack key={genres.id}>
//               <Image
//                 boxSize="32px"
//                 borderRadius={8}
//                 src={cropImage(genres.image_background)}
//                 objectFit='cover'
//               ></Image>
//               <Button
//                 fontWeight = {selectedGenreId === genres.id ? 'bold' : 'normal'}
//                 variant="link"
//                 fontSize="md"
//                 paddingLeft={1}
//                 onClick={() => onSelect(genres)}
//                 whiteSpace='normal'
//                 textAlign='start'
//               >
//                 {genres.name}
//               </Button>
//             </HStack>
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// };

// export default GenreList;

import {  SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import { Link } from "react-router-dom";
// interface Props {
//   // selectedGenre : Genre | null
//   // selectedPlatform : Platform | null
//   gameQuery: GameQuery;
// }

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames();


  const skeleton = [1, 2, 3, 4, 5, 6];


  const fetchedGames =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;


  return (
    <>
      {error && <p>{error.message}</p>}

      <InfiniteScroll
        dataLength={fetchedGames}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader = {<Spinner/>}
      >
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
          }}
          spacing={5}
          padding={2}
        >
          {isLoading && skeleton.map((sk) => <GameSkeleton key={sk} />)}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <Link to={`/games/${game.slug}`}><GameCard key={game.id} game={game}></GameCard></Link>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;

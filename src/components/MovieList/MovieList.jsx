import React, { useEffect, useState } from 'react'
import './MovieList.css'
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
const MovieList = () => {
  const movies = useSelector(state => state.movies.movies);
  console.log("movies-now ",movies)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      setData(movies);
    }, 2000);
  }, [movies]);
  return (
    <div>
      {loading ?
        <Box padding='6' boxShadow='lg' bg='white' className='box'>
          <SkeletonCircle size='10' />
          <SkeletonText noOfLines={4} spacing='4' />
        </Box>: null}
      {loading ? (
        <Grid templateColumns='repeat(3, 1fr)' gap={6} className='grid'>
          <GridItem w='400px' h='400px'>
            <Box padding='6' boxShadow='lg' bg='white'>
              <SkeletonCircle size='10' />
              <SkeletonText noOfLines={4} spacing='4' />
            </Box>
          </GridItem>
          <GridItem w='400px' h='400px'>
            <Box padding='6' boxShadow='lg' bg='white'>
              <SkeletonCircle size='10' />
              <SkeletonText mt='4' noOfLines={4} spacing='4' />
            </Box>
          </GridItem>
          <GridItem w='400px' h='400px'>
            <Box padding='6' boxShadow='lg' bg='white'>
              <SkeletonCircle size='10' />
              <SkeletonText mt='4' noOfLines={4} spacing='4' />
            </Box>
          </GridItem>
        </Grid>
      ) : (
          <>
      <h2>Movies</h2>
      <Skeleton isLoaded={!loading} >
      <div className="movie-list">
        {data.Search?.map((movie, index) => (
          <MovieCard key={index} data={movie} />
       ) )}
        </div>
            </Skeleton> 
          </>)}
    </div>
  )
}

export default MovieList

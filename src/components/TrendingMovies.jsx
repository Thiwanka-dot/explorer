import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import MovieCard from './MovieCard';

function TrendingMovies() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=401e0db255caec39034482d61909cc33`
        );
        setTrending(res.data.results);
      } catch (error) {
        console.error('Error fetching trending movies: ', error);
      }
    };
    fetchTrending();
  }, []);

  return (
    <Box mt={5}>
      <Typography variant="h5" gutterBottom>
        Trending This Week
      </Typography>
      <Grid container spacing={2}>
        {trending.map((movie) => (
        <Grid item key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
      </Grid>
    </Box>
  );
}

export default TrendingMovies;

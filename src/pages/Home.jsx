import { Box, Typography } from "@mui/material";
import React from "react";
import TrendingMovies from "../components/TrendingMovies";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <Box sx={{padding: 3, fontFamily:"Inter"}}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily:"Libre Baskerville" }}>
        <strong>Welcome to the Movie Explorer</strong>
      </Typography>
      <Typography variant="h6" gutterBottom>
        <em>Discover Your Favorite Films...</em>
      </Typography>
      <Typography variant="body1">
        Use the search bar to find your favorite movies, or explore trending films.
      </Typography>
      <SearchBar />
      <TrendingMovies />
    </Box>
  );
}

export default Home;

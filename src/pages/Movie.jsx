import { Box, Button, Chip, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useMovies } from "../context/MovieContext";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { addFavorite, removeFavorite, favorites } = useMovies();

  const isFavorite = movie && favorites.some((m) => m.id === movie.id);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=401e0db255caec39034482d61909cc33&append_to_response=videos,credits`
        );
        setMovie(res.data);
      } catch (error) {
        console.error('Failed to load movie details: ', error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <CircularProgress />;
  
  const trailer = movie.videos?.results.find((v) => v.type === 'Trailer');

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">{movie.title}</Typography>
      <Typography variant="subtitle1">{movie.overview}</Typography>
      <Box mt={2}>
        {movie.genres.map((genre) => (
          <Chip key={genre.id} label={genre.name} sx={{ marginRight: 1 }} />
        ))}
      </Box>
      <Box mt={2}>
        <Button onClick={() => isFavorite ? removeFavorite(movie.id) : addFavorite(movie)}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </Box>
      {trailer && (
        <Box mt={4}>
          <Typography variant="h6">Trailer</Typography>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Movie Trailer"
            allowFullScreen
          />
        </Box>
      )}
    </Box>
  );
}

export default Movie;

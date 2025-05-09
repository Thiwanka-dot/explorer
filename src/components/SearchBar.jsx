import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import MovieCard from "./MovieCard";
import axios from 'axios';
import { useMovies } from '../context/MovieContext';

function SearchBar(){

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const {setSearchQuery} = useMovies();

    const handleSearch = async () => {
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=401e0db255caec39034482d61909cc33&query=${query}`
            );
            setResults(res.data.results);
            setSearchQuery(query);
            localStorage.setItem("lastSearch", query);
        } catch (error) {
            console.error('Error searching movies: ', error);
        }
    };

    return (
        <Box my={4}>
            <Box display="flex" gap={2}>
                <TextField
                    label="Search Movies"
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    fullWidth
                />
                <Button variant="contained" onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Grid container spacing={2} mt={2}>
                {results.map((movie) => (
                    <Grid item key={movie.id}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default SearchBar;
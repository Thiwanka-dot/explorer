import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";


function MovieCard({ movie }) {

    return (

          <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ width: 200, cursor: 'pointer' }}>
              <CardMedia
                component="img"
                alt={movie.title}
                height="280"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <CardContent>
                <Typography variant="body1">{movie.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {movie.release_date?.slice(0, 4)} | Rating: {movie.vote_average}
                </Typography>
              </CardContent>
            </Card>
          </Link>
  );
}

export default MovieCard;

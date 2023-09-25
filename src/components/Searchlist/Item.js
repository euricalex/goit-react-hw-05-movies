import { MovieTitle } from "./StyledItem";

export const Item = ({ movie }) => {
    const img = `http://image.tmdb.org/t/p/w200${movie.poster_path}`
    return (
      <>
        {movie.poster_path?(<img src={img} alt={movie.title} width='250px'></img>):(<p></p>)}
        <MovieTitle>{movie.title}</MovieTitle>
      </>
    );
  };
  
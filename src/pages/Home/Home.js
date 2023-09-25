
import { useEffect, useState } from 'react';
import { getPopularMovies } from 'fetch';
import { Link } from 'react-router-dom';
import { Item } from 'components/Searchlist/Item';
import { StyledMain } from './StyledHome';
import { StyledLi, StyledUl } from 'components/Cast/Styledcast';
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const creatMarkap = async () => {
      const data = await getPopularMovies();
      const array = await data.results.map(({ title, id,poster_path }) => {
        return { title, id,poster_path };
      });
      setMovies(array);
    };
    creatMarkap();
  });
  return (
    <StyledMain>
      <h2>Trending today</h2>
      <StyledUl>
        {movies.map(movie => {
          return (
            <StyledLi key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <Item movie={movie} />
              </Link>
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledMain>
  );
};

export default Home;

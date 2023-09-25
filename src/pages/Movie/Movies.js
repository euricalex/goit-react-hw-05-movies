import { Item } from 'components/Searchlist/Item';
import { getMovieByQuery } from 'fetch';
import { useEffect, useState } from 'react';
import {  useLocation, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { StyledMain } from 'pages/Home/StyledHome';
import { StyledLi, StyledUl } from 'components/Cast/Styledcast';
import { StyledInput, StyledSearchButton } from './StyledMovie';
import { StyledLink } from 'components/Layout/StyledLayout';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');
  const location = useLocation();

  const onSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.search.value;
    setQuery(newQuery);
    if (newQuery === '') {
      return toast.error('Sorry, please provide a search word');
    }

    setSearchParams({ search: newQuery });
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchSearchMovie() {
      try {
        const data = await getMovieByQuery(query);
        if (data.results.length === 0) {
          return toast.error('Sorry,no movies with this query');
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSearchMovie();
  }, [query]);

  return (
    <StyledMain>
      <Toaster position="top-center" reverseOrder={true} />
      <form onSubmit={onSubmit}>
        <StyledInput name="search"
        defaultValue={query} />
        <StyledSearchButton  type="submit">Search</StyledSearchButton>
      </form>
      <hr />

      {movies.length !== 0 && (
        <section>
          <StyledUl>
            {movies.map(movie => {
              return (
                <StyledLi key={movie.id}>
                  <StyledLink to={`/movies/${movie.id} `} state={{ from: location }}>
                    <Item movie={movie} />
                  </StyledLink>
                </StyledLi>
              );
            })}
          </StyledUl>
        </section>
      )}
    </StyledMain>
  );
};
export default Movies;

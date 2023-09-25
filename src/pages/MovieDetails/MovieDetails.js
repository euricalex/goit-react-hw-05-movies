import { getMoviesByID } from 'fetch';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { StyledButton } from './StyledMovieDetails';
import { StyledMain } from 'pages/Home/StyledHome';
import { StyledUl } from 'components/Cast/Styledcast';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backButton = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function buBu() {
      try {
        const data = await getMoviesByID(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    buBu();
  }, [id]);

  

  if (movie === null) {
    return;
  }

  const {
    title,
    poster_path,
    genres,
    release_date,
    vote_average,
    overview,
    homepage,
  } = movie;
  const tags =
    genres &&
    genres.map(tag => (
      <li key={tag.id}>
        <p>{tag.name}</p>
      </li>
    ));
  const img = `http://image.tmdb.org/t/p/w500${poster_path}`;
  const data = release_date.slice(0, 4);
  const score = Math.round(vote_average * 10);
  return (
    <StyledMain>
      <StyledButton to={backButton.current}>Get back</StyledButton>
      <h2>
        {title}({data})
      </h2>
      <img src={img} alt="" />
      {homepage && (
        <div>
          <p>Homepage: </p>
          <a href={homepage} target="_blank" rel="noreferrer">
            {homepage}
          </a>
        </div>
      )}
      <p>User score:{score}%</p>
      <h3>Overiew</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <StyledUl>{tags}</StyledUl>
      <p>Addinitional information</p>
      <StyledUl>
        <li>
          <StyledButton to={"cast"}>Cast</StyledButton>
        </li>
        <li>
          <StyledButton to={"reviews"}>Reviews</StyledButton>
        </li>
      </StyledUl>
      <hr />
      <Suspense  fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </StyledMain>
  );
};
export default MovieDetails;
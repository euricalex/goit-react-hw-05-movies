import { getCast } from 'fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledLi, StyledUl } from './Styledcast';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await getCast(id);
        if (data.cast.length !== 0) {
          setCast(data.cast);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [id]);

  return (
    <>
      {cast ? (
        <StyledUl>
          {cast.map(actor => (
            <StyledLi key={actor.id}>
              <img
                src={`http://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt=""
                width='250px'
              />
              <p>{actor.name}</p>
              <p>character:{actor.character}</p>
            </StyledLi>
          ))}
        </StyledUl>
      ) : (
        <div>нема</div>
      )}
    </>
  );
};
export default Cast;
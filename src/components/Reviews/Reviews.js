import { getReviews } from 'fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function createRewies() {
      try {
        const data = await getReviews(id);
        if (data.results.length !== 0) {
          setReviews(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    }
    createRewies();
  }, [id]);

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author:{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We dont have any reviews for this movie</div>
      )}
    </>
  );
};
export default Reviews;
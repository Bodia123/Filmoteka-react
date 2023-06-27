import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieReview.module.css';
import { fetchReview } from 'service';

const MovieReview = function () {
  const [review, setReview] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    fetchReview(movieId).then(res => setReview(res.results));
  }, [movieId]);
  return (
    <ul className={css.list}>
      {review ? (
        review.map(item => (
          <li key={item.id} className={css.item}>
            <p className={css.author}>Author: {item.author}</p>
            <p className={css.review}>Review: {item.content}</p>
          </li>
        ))
      ) : (
        <p>Bye</p>
      )}
    </ul>
  );
};

export default MovieReview;

//
import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from 'service';
import Loader from 'components/Loader/Loader';
//

import css from './MovieQuery.module.css';
import { Link } from 'react-router-dom';

export const MovieListQuery = function ({ onSubmit, reset }) {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchMovieByQuery(onSubmit).then(res => setMovies(res.results));
    setLoader(false);
  }, [onSubmit, reset]);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <ul className={css.List}>
          {movies.map(item => (
            <li key={item.id} className={css.popularItem}>
              <Link to={`/movies/${item.id}`} className={css.popularLink}>
                <img
                  src={
                    item.poster_path === null
                      ? 'img/image_not_available.png'
                      : `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  }
                  alt={item.name}
                  className={css.popularImg}
                />
                <span className={css.vote}>
                  {Math.round(item.vote_average)}
                </span>
                <h3 className={css.nameMovie}>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

//
import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from 'service';
import Loader from 'components/Loader/Loader';
import { Pagination } from '@mui/material';
//

import css from './MovieQuery.module.css';
import { Link } from 'react-router-dom';
import ScrollToTop from 'Function/ScrollToTop';

export const MovieListQuery = function ({ onSubmit, reset }) {
  const [movies, setMovies] = useState([]);
  const [pageApi, setPageApi] = useState(1);

  const [pages, setPages] = useState(1);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchMovieByQuery(onSubmit, pageApi).then(res => {
      setMovies(res.results);
      setPages(res.total_pages);
    });
    setLoader(false);
  }, [onSubmit, pageApi, reset]);
  useEffect(() => {
    setPageApi(1);
  }, [onSubmit]);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
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
          <Pagination
            className={css.pagination}
            count={pages}
            page={pageApi}
            color="primary"
            onChange={(e, value) => {
              ScrollToTop();

              setPageApi(value);
            }}
          />
        </>
      )}
    </>
  );
};

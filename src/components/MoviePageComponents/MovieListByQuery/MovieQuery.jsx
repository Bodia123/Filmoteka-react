//
import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from 'service';
import Loader from 'components/Loader/Loader';
import { Pagination } from '@mui/material';
//
import ListMovie from 'components/GeneralComponent/GeneralMovieList/List';
import ScrollToTop from 'Function/ScrollToTop';

export const MovieListQuery = function ({ onSubmit, reset }) {
  const [movies, setMovies] = useState([]);
  const [pageApi, setPageApi] = useState(1);

  const [pages, setPages] = useState(0);
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
          <ListMovie movie={movies} />
          <Pagination
            count={pages >= 1000 ? 1000 : pages}
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

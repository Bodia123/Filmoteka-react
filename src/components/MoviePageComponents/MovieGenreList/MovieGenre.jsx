import ListMovie from 'components/GeneralComponent/GeneralMovieList/List';
import Loader from 'components/Loader/Loader';
import Title from 'components/GeneralComponent/Titles/Title';
import { Pagination } from '@mui/material';
import ScrollToTop from 'Function/ScrollToTop';
import genreList from 'genreList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchByGenreId } from 'service';
const MovieGenreList = function () {
  const [movies, setMovies] = useState([]);
  const [pageApi, setPageApi] = useState(1);
  const [loader, setLoader] = useState(true);
  const [pages, setPages] = useState(0);
  const { genreId } = useParams();
  useEffect(() => {
    fetchByGenreId(genreId, pageApi).then(res => {
      setMovies(res.results);
      setPages(res.total_pages);
    });
    setLoader(false);
  }, [genreId, pageApi]);
  useEffect(() => {
    setPageApi(1);
  }, [genreId]);
  const genreName = genreList.filter(item => item.id === Number(genreId));
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Title text={genreName[0].name} />
          <ListMovie movie={movies} />
          <Pagination
            count={pages >= 500 ? 500 : pages}
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
export default MovieGenreList;

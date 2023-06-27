import ListMovie from 'components/GeneralComponent/GeneralMovieList/List';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchByGenreId } from 'service';
const GenresPage = function () {
  const [movies, setMovies] = useState([]);
  const { genreId } = useParams();
  useEffect(() => {
    fetchByGenreId(genreId).then(res => {
      setMovies(res.results);
    });
  });

  return (
    <>
      <ListMovie movie={movies} />
      Genres page{genreId}
    </>
  );
};
export default GenresPage;

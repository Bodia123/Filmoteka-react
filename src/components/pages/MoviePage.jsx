import MovieFilterForm from 'components/MoviePageComponents/MoviePageInput/MoviePageInput';
import { useState } from 'react';

import { MovieListQuery } from 'components/MoviePageComponents/MovieListByQuery/MovieQuery';
import { MovieFirstLoad } from 'components/MoviePageComponents/MoviePageFirstLoad/MovieFirstLoad';
const MoviePage = function () {
  const [query, setQuery] = useState('');

  return (
    <>
      <MovieFilterForm changeQuery={setQuery} />
      {query === '' ? <MovieFirstLoad /> : <MovieListQuery onSubmit={query} />}
    </>
  );
};

export default MoviePage;

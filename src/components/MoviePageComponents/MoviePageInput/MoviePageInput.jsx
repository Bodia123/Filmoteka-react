import css from './MoviePageInput.module.css';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

const MovieFilterForm = function ({ changeQuery }) {
  const [search, setSearch] = useState('');
  const changeSearch = function (e) {
    setSearch(e.target.value);
  };
  const onSubmit = function (e) {
    e.preventDefault();

    changeQuery(search);
    setSearch('');
  };
  return (
    <form onSubmit={onSubmit} className={css.searchBox}>
      <input
        className={css.searchInput}
        type="text"
        autoComplete="off"
        onChange={changeSearch}
        value={search}
      ></input>
      <button className={css.searchButton}>
        <BsSearch />
      </button>
    </form>
  );
};
export default MovieFilterForm;

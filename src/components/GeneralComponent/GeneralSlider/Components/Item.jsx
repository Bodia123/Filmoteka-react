import { Link } from 'react-router-dom';
import css from '../GenralSlider.module.css';

const ItemCollection = function ({ item }) {
  return (
    <div key={item.id} className={css.popularItem}>
      <Link to={`/movies/${item.id}`} className={css.popularLink}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.name}
          className={css.popularImg}
        />
        <span className={css.vote}>{Math.round(item.vote_average)}</span>
        <h3 className={css.nameMovie}>{item.title}</h3>
      </Link>
    </div>
  );
};
export default ItemCollection;

import { Link } from 'react-router-dom';

import css from './MainSLiderCard.module.css';
const MovieSliderCard = function ({ item }) {
  return (
    <div className={css.popularItem}>
      <Link to={`/movies/${item.id}`} className={css.popularLink}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.name}
          className={css.popularImg}
        />
        <div className={css.textContainer}>
          <h3 className={css.title}>{item.title}</h3>
          <div className={css.someDetail}>
            <p className={css.votePar}>
              Рейтинг:
              <span className={css.vote}>{item.vote_average}</span>
            </p>
            <p className={css.releasePar}>
              Дата виходу :
              <span className={css.release}>{item.release_date}</span>
            </p>
          </div>

          <p className={css.overviewPar}>
            <span>Короткий опис: </span>
            {item.overview
              ? `${item.overview}`
              : 'Вибачте, але опис відсутній!'}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default MovieSliderCard;

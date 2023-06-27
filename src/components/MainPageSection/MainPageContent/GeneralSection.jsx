import MovieSlider from 'components/GeneralComponent/GeneralSlider/GeneralSlider';
import MainMovieSlider from '../MainMovieSlider/MainMoviesSlider';
import { popularFetch, fetchUpcommingMovie, fectTrandMovie } from 'service';
import css from './GeneralSection.module.css';
const GeneralSection = function () {
  return (
    <>
      <h2 className={css.title}>Головні новинки</h2>
      <MainMovieSlider fetchBy={popularFetch} />

      <h2 className={css.title}>В тренді</h2>
      <MovieSlider fetchBy={fectTrandMovie} />

      <h2 className={css.title}>Скоро на екранах</h2>
      <MovieSlider fetchBy={fetchUpcommingMovie} />
    </>
  );
};

export default GeneralSection;

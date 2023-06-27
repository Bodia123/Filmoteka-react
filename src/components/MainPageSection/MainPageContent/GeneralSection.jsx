import { MovieSlider } from 'components/MainPageSection/MoiveSlider/MovieSlider';
import MainMovieSlider from '../MainMovieSlider/MainMoviesSlider';
import { popularFetch, fetchUpcommingMovie, fectTrandMovie } from 'service';
import css from './GeneralSection.module.css';
const GeneralSection = function () {
  return (
    <>
      <h2 className={css.title}>Головні Новинки</h2>
      <MainMovieSlider fetchBy={popularFetch} />
      <MovieSlider fetchBy={fetchUpcommingMovie} />
      <MovieSlider fetchBy={fectTrandMovie} />
    </>
  );
};

export default GeneralSection;

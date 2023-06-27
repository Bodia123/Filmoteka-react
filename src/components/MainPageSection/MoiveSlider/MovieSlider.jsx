import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';

import css from './MovieSlider.module.css';
//slider imports
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
export const MovieSlider = function ({ fetchBy, sliderSetting }) {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const settings = {
    lazyLoad: true,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToScroll: 2,
    slidesToShow: 4,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    ...sliderSetting,
  };
  useEffect(() => {
    fetchBy().then(responce => {
      setMovies(responce.results);
    });
    setLoader(false);
  }, [fetchBy]);
  return (
    <>
      {loader ? (
        <Loader></Loader>
      ) : (
        <div className={css.sliderWrapper}>
          <Slider {...settings}>
            {movies.map(item => (
              <div key={item.id} className={css.popularItem}>
                <Link to={`/movies/${item.id}`} className={css.popularLink}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item.name}
                    className={css.popularImg}
                  />
                  <span className={css.vote}>
                    {Math.round(item.vote_average)}
                  </span>
                  <h3 className={css.nameMovie}>{item.title}</h3>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';

import css from './GenralSlider.module.css';
import ItemCollection from './Components/Item';
//slider imports
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
const MovieSlider = function ({ fetchBy, sliderSetting }) {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const [width] = useState(window.innerWidth);

  const settingsPC = {
    lazyLoad: true,
    arrows: true,
    dots: false,
    infinite: true,

    slidesToScroll: 2,
    slidesToShow: 5,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };
  const settingsMOB = {
    lazyLoad: true,
    arrows: true,
    dots: false,
    infinite: true,

    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: 'linear',
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
          {width >= 1150 ? (
            <Slider {...settingsPC}>
              {movies.map(itemMovie => (
                <ItemCollection item={itemMovie} />
              ))}
            </Slider>
          ) : (
            <Slider {...settingsMOB}>
              {movies.map(itemMovie => (
                <ItemCollection item={itemMovie} />
              ))}
            </Slider>
          )}
        </div>
      )}
    </>
  );
};
export default MovieSlider;

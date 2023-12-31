//main imports
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from 'service';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToFavorite,
  deleteFromFavorite,
} from 'Redux/FavoriteSlice/favoriteSlice';
import ScrollToTop from 'Function/ScrollToTop';
// components
import {
  CardContainer,
  ItemContainer,
  PosterWrapper,
  Img,
  LocalToogle,
} from './MovieCard.styled';
import Loader from 'components/Loader/Loader';
import DescriptionPart from './ItemDescription/DescriptionPart';

//
import { notificationSuccess } from 'Notification/success';
import { notificationErorr } from 'Notification/erorr';
//
const ItemCard = function () {
  const [movie, setMovie] = useState({});
  const [loader, setLoader] = useState(true);

  const favorite = useSelector(state => state.favorite);
  const dispatch = useDispatch();
  const toggleFavoriteHandle = e => {
    const filtered = favorite.every(item => item.id !== movie.id);
    if (!filtered) {
      dispatch(deleteFromFavorite(movie));
      notificationErorr('Видалено!');
      return;
    }
    dispatch(addToFavorite(movie));
    notificationSuccess('Додали!');
  };

  const { movieId } = useParams();

  useEffect(() => {
    fetchById(movieId).then(response => {
      setMovie(response);
      setLoader(false);
    });
    setLoader(true);
  }, [movieId]);
  ScrollToTop();

  const { poster_path, title } = movie;

  return (
    <CardContainer>
      {loader ? (
        <Loader></Loader>
      ) : (
        <ItemContainer>
          <PosterWrapper>
            <Img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              loading="lazy"
            />
            <LocalToogle onClick={toggleFavoriteHandle}>
              {!favorite.every(item => item.id !== movie.id)
                ? 'Видалити'
                : 'Додати'}
            </LocalToogle>
          </PosterWrapper>
          <DescriptionPart info={movie} />
        </ItemContainer>
      )}
    </CardContainer>
  );
};
export default ItemCard;

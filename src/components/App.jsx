import { Route, Routes } from 'react-router-dom';
// pages
import MainPage from './pages/MainPage';
import ItemCard from 'components/MovieDetailCard/MoveDetailCard';
import MoviePage from './pages/MoviePage';
import Profile from './pages/Profile';
// component
import MovieCast from './MovieDetailCard/MovieDetailCast/MovieCast';
import MovieReview from './MovieDetailCard/MovieDetailReviews/MovieReview';
// new imports
import SharedLayout from './SharedLayout/SharedLayout';
import GenresPage from './pages/Genres';
// new components
// const
//
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="movies" element={<MoviePage />} />

        <Route path="movies/:movieId" element={<ItemCard />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="review" element={<MovieReview />} />
        </Route>
        <Route path="genres/:genreId" element={<GenresPage />} />
        <Route path="library" element={<Profile />} />
        <Route path="*" element={<>Error</>} />
      </Route>
    </Routes>
  );
};

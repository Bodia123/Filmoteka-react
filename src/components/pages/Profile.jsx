// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//components
import ListMovie from 'components/GeneralComponent/GeneralMovieList/List';
import Title from 'components/GeneralComponent/Titles/Title';
//

const Profile = function () {
  const favorite = useSelector(state => state.favorite);

  return (
    <>
      <Title text={'Подивитись пізніше!'} />
      <ListMovie movie={favorite} />
    </>
  );
};
export default Profile;

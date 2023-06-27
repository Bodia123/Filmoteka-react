// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//components
import ListMovie from 'components/GeneralComponent/GeneralMovieList/List';
//

const Profile = function () {
  const favorite = useSelector(state => state.favorite);

  return (
    <>
      <ListMovie movie={favorite} />
    </>
  );
};
export default Profile;

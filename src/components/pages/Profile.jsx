// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//components
import WatchLater from 'components/ProfileComponents/WatchLaterList/WatchLater';
//

const Profile = function () {
  const favorite = useSelector(state => state.favorite);

  return (
    <>
      <WatchLater movie={favorite} />
    </>
  );
};
export default Profile;

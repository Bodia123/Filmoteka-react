import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fecthCredits } from 'service';

//css
import styled from '@emotion/styled';

const List = styled.ul`
  padding: 0;
  margin: -5;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Item = styled.li`
  margin: 5px;
  position: relative;
  text-align: center;
  border: 1px solid rgb(81, 79, 79);
  width: 165px;
  height: 300;
`;
const Poster = styled.img`
  display: inline-block;
  width: 100%;
`;
const RealName = styled.p`
  color: #fff;
`;
const Character = styled.p`
  color: #fff;
  & > span {
    color: #ffffffa1;
  }
`;

//

const MovieCast = function () {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fecthCredits(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  const imageSelect = function (profile_path) {
    if (profile_path !== null) {
      return `https://image.tmdb.org/t/p/w300${profile_path}`;
    }
    return 'https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png';
  };

  return (
    <>
      <List>
        {cast.map(cast => (
          <Item key={cast.credit_id}>
            <Poster
              src={imageSelect(cast.profile_path)}
              alt={cast.name}
              width={175}
              height={262}
            />
            <RealName>{cast.name} </RealName>
            <Character>
              <span>Персонаж: </span> <br />
              {cast.character}
            </Character>
          </Item>
        ))}
      </List>
    </>
  );
};
export default MovieCast;

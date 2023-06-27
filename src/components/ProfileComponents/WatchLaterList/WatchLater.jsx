import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
// styled components
const List = styled.ul`
  padding-left: 15px;
  padding-right: 15px;
  margin: -10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;
const Item = styled.li`
  width: 136px;
  @media (min-width: 900px) {
    width: 176px;
  }
`;

const LinkWrapper = styled(Link)`
  display: block;
  text-decoration: none;
  margin: 5px;
  @media (min-width: 900px) {
    margin: 10px;
  }
  & > span {
    font-size: 14px;
    color: #fff;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 234px;
`;
// const
//
const WatchLater = function ({ movie }) {
  return (
    <>
      {movie === [] ? (
        <>пустий список</>
      ) : (
        <List>
          {movie.map(item => (
            <Item key={item.id}>
              <LinkWrapper to={`/movies/${item.id}`}>
                <Img
                  src={
                    item.poster_path === null
                      ? 'img/image_not_available.png'
                      : `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  }
                  alt={item.name}
                />
                <span>{item.title}</span>
              </LinkWrapper>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default WatchLater;

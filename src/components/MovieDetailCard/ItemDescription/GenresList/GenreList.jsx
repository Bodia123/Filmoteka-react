import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  & > span {
    margin-right: 5px;
    color: #ffffffa1;
  }
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style: none;
`;
const Genre = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

const GenreList = function ({ movieGenres }) {
  return (
    <Container>
      <span>Жанри: </span>

      <List>
        {movieGenres.map(genre => (
          <Genre key={genre.id}>
            <Link to="">
              <span>{genre.name}</span>
            </Link>
          </Genre>
        ))}
      </List>
    </Container>
  );
};
export default GenreList;

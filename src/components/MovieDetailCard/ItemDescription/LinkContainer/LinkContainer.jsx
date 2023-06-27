import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
const Container = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
  text-align: center;
`;
const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
  &.active {
    color: orange;
  }
`;

const LinkContainer = function () {
  return (
    <>
      <Container>
        <Link to="/">Назад!</Link>

        <Link to="cast">Акторський склад</Link>

        <Link to="review">Відгуки</Link>
      </Container>
      <Outlet />
    </>
  );
};
export default LinkContainer;

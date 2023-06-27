import {
  MainHeader,
  ContentWrapper,
  Logo,
  Menu,
  Link,
  Item,
} from './Header.stuled';
const Header = function () {
  return (
    <MainHeader>
      <ContentWrapper>
        <Logo>
          <Link to="/">
            <span>Головна</span>
          </Link>
        </Logo>
        <Menu>
          <Item>
            <Link to="/movies">
              <span>Фільми</span>
            </Link>
          </Item>

          <Item>
            <Link to="/library">
              <span>Бібліотека</span>
            </Link>
          </Item>
        </Menu>
      </ContentWrapper>
    </MainHeader>
  );
};
export default Header;

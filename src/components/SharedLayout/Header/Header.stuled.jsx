import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainHeader = styled.header``;

export const Logo = styled.div``;

export const ContentWrapper = styled.div`
  position: relative;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;
  padding-left: 0;
  margin: 0;
  margin-left: auto;
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 6px;
  }
`;

export const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  color: #1d9af2;
  background-color: #292d3e;
  border: 1px solid #1d9af2;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  height: 32px;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  &.active {
    color: #1d9af2;
    box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
    transform: translateX(-3px);
  }
`;

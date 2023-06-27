import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  padding-left: 15px;
  padding-right: 15px;
  margin: -10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;
export const Item = styled.li`
  width: 136px;
  @media (min-width: 900px) {
    width: 176px;
  }
`;

export const LinkWrapper = styled(Link)`
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

export const Img = styled.img`
  width: 100%;
  height: 234px;
`;

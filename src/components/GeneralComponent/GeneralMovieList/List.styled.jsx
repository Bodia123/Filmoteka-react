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
  width: 156px;
  @media (min-width: 900px) {
    width: 176px;
  }
`;

export const LinkWrapper = styled(Link)`
  position: relative;
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
export const VoteCircle = styled.span`
  position: absolute;
  text-align: center;
  height: 25px;
  width: 25px;
  margin-top: 5px;
  padding: 1px;
  top: 0;
  left: 5px;
  color: #fff;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 50%;
`;
export const NameMovie = styled.h3`
  color: #fff;
`;

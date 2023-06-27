import styled from '@emotion/styled';
// components//
import Rating from './Rating/Rating';
import Overview from './Overview/Overview';
import GenreList from './GenresList/GenreList';
import LinkContainer from './LinkContainer/LinkContainer';
// styled
const DescriptionList = styled.ul`
  list-style: none;
  padding: 10px;
  @media (min-width: 786px) {
  }
`;

const Item = styled.li``;

const Title = styled.p`
  display: block;
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
`;
//
const DescriptionPart = function ({ info }) {
  return (
    <DescriptionList>
      <Item>
        <Title>{info.title}</Title>
      </Item>

      <Item>
        <Rating rating={info.vote_average} />
      </Item>

      <Item>{info.genres && <GenreList movieGenres={info.genres} />}</Item>

      <Item>
        <Overview overview={info.overview} />
      </Item>

      <Item>
        <LinkContainer />
      </Item>
    </DescriptionList>
  );
};
export default DescriptionPart;

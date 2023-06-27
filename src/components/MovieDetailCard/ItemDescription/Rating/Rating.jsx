import styled from '@emotion/styled';
const Vote = styled.p`
  color: #fff;
  & > span {
    margin-right: 5px;
    color: #ffffffa1;
  }
`;
const Rating = function ({ rating }) {
  return (
    <Vote>
      <span>Рейтинг: </span> {Math.round(rating)}
    </Vote>
  );
};
export default Rating;

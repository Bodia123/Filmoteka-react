import styled from '@emotion/styled';
const Container = styled.div`
  display: flex;
  & > span {
    margin-right: 5px;
    color: #ffffffa1;
  }
`;
const Text = styled.p`
  color: #fff;
`;
const Overview = function ({ overview }) {
  return (
    <Container>
      <span>Опис: </span>
      {overview ? <Text>{overview}</Text> : <Text>Опис відсутній!</Text>}
    </Container>
  );
};
export default Overview;

import styled from '@emotion/styled';
const Titled = styled.h2`
  color: #fff;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const Title = function ({ text }) {
  return <Titled>{text}</Titled>;
};
export default Title;

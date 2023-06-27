import { Audio } from 'react-loader-spinner';
import styled from '@emotion/styled';
const LoaderWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader = function () {
  return (
    <LoaderWrapper>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </LoaderWrapper>
  );
};
export default Loader;
